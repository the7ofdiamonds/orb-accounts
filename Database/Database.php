<?php

namespace ORB\Accounts\Database;

require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

use PDO;
use PDOException;

use ORB\Accounts\ENV\EnvironmentVariables;

class Database
{
    private $db_type;
    private $db_host;
    private $db_name;
    private $db_user;
    private $db_password;
    private $connection;
    public $db_charset;
    public $db_collate;
    public $charset_collate;
    private $primary_key_config;
    private $updated_at;
    private $standard_conforming_strings;
    private $encoding;

    public function __construct()
    {
        try {
            global $wpdb;

            $env = new EnvironmentVariables;

            $this->db_type = $_ENV['DB_TYPE'];
            $this->db_host = $_ENV['DB_HOST'];
            $this->db_user = $_ENV['DB_USER'];
            $this->db_password = $_ENV['DB_PASSWORD'];
            $this->db_name = $_ENV['DB_NAME'] ?: 'orb';
            $this->primary_key_config = 'INT NOT NULL AUTO_INCREMENT';
            $this->updated_at = ' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP';
            $this->db_charset = $wpdb->charset;
            $this->db_collate = $wpdb->collate;
            $this->charset_collate = $wpdb->get_charset_collate();
            $this->standard_conforming_strings = 'ON';
            $this->encoding = 'UTF8';

            if (!$this->db_type || !$this->db_host || !$this->db_user || !$this->db_password) {
                $this->db_host = $wpdb->dbhost;
                $this->db_user = $wpdb->dbuser;
                $this->db_password = $wpdb->dbpassword;
                $this->db_name = get_option('DB_NAME', 'orb');

                $dsn = "mysql:host=$this->db_host;dbname=$this->db_name;charset=$this->db_charset";
                $this->connection = new PDO($dsn, $this->db_user, $this->db_password);
            }

            if ($this->db_type == 'mysql') {
                $dsn = "mysql:host=$this->db_host;dbname=$this->db_name;charset=$this->db_charset";
                $this->connection = new PDO($dsn, $this->db_user, $this->db_password);
            }

            if ($this->db_type == 'pgsql') {
                $dsn = "pgsql:host=$this->db_host;dbname=$this->db_name";
                $this->connection = new PDO($dsn, $this->db_user, $this->db_password);
                $this->primary_key_config = 'SERIAL';
                $this->updated_at = '';
                $this->charset_collate = '';
            }

            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            if ($this->connection) {
                $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } else {
                error_log("Database connection is not established.");
            }
        } catch (PDOException $e) {
            error_log("Connection failed: " . $e->getMessage());
        }

        new DatabaseUsers();
        new DatabaseInvoice();
        new DatabaseQuote();
        new DatabaseReceipt();
    }

    function createDatabase()
    {
        try {

            if ($this->db_type === 'pgsql') {
                $dsn = "pgsql:host={$this->db_host};";
                $sql = "CREATE DATABASE {$this->db_name} TEMPLATE template0 ENCODING 'UTF8'";
            } elseif ($this->db_type === 'mysql') {
                $dsn = "mysql:host={$this->db_host};charset={$this->db_charset}";
                $sql = "CREATE DATABASE IF NOT EXISTS $this->db_name";
            }

            $connection = new PDO($dsn, $this->db_user, $this->db_password);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $checkDatabaseExists = $connection->prepare("SELECT datname FROM pg_database WHERE datname = :dbname");
            $checkDatabaseExists->execute([':dbname' => $this->db_name]);

            if (!empty($checkDatabaseExists->rowCount())) {
                return $this->createTables();
            }

            $connection->exec($sql);

            $connection = new PDO("$dsn;dbname=$this->db_name;", $this->db_user, $this->db_password);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $this->createTables();
        } catch (PDOException $e) {
            error_log("Connection failed: " . $e->getMessage());
        }
    }

    function updatedAT($table_name)
    {
        if ($this->db_type === 'pgsql') {
            $setEncoding = "SET CLIENT_ENCODING TO {$this->encoding}";

            $this->connection->query($setEncoding);

            $standardConformingStrings = "SET STANDARD_CONFORMING_STRINGS TO {$this->standard_conforming_strings};";

            $this->connection->query($standardConformingStrings);

            $triggerSql = "
                CREATE OR REPLACE FUNCTION update_timestamp()
                RETURNS TRIGGER AS $$
                BEGIN
                    NEW.updated_at = CURRENT_TIMESTAMP;
                    RETURN NEW;
                END;
                $$ LANGUAGE plpgsql;
    
                DROP TRIGGER IF EXISTS update_timestamp ON {$table_name};
                CREATE TRIGGER update_timestamp
                BEFORE UPDATE ON {$table_name}
                FOR EACH ROW
                EXECUTE FUNCTION update_timestamp();
            ";

            $this->connection->exec($triggerSql);
        }
    }

    function createTables()
    {
        $this->create_users_table();
        $this->create_quote_table();
        $this->create_invoice_table();
        $this->create_receipt_table();
    }


    function create_users_table()
    {
        $table_name = 'orb_users';

        $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (  
            id {$this->primary_key_config} PRIMARY KEY,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL {$this->updated_at},
            user_id VARCHAR(255) DEFAULT NULL,
            stripe_customer_id VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            phone VARCHAR(255) DEFAULT NULL,
            first_name VARCHAR(255) DEFAULT NULL,
            last_name VARCHAR(255) DEFAULT NULL
        ) {$this->charset_collate};";

        $this->connection->query($sql);

        $this->updatedAT($table_name);
    }

    function create_quote_table()
    {
        $table_name = 'orb_quote';

        $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (  
            id {$this->primary_key_config} PRIMARY KEY,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL {$this->updated_at},
            stripe_customer_id VARCHAR(255) DEFAULT NULL,
            stripe_quote_id VARCHAR(255) DEFAULT NULL,
            status VARCHAR(255) DEFAULT NULL,
            expires_at VARCHAR(255) DEFAULT NULL,
            selections JSON DEFAULT NULL,
            amount_subtotal VARCHAR(255) DEFAULT NULL,
            amount_discount VARCHAR(255) DEFAULT NULL,
            amount_shipping VARCHAR(255) DEFAULT NULL,
            amount_tax VARCHAR(255) DEFAULT NULL,
            amount_total VARCHAR(255) DEFAULT NULL,
            onboarding_links TEXT DEFAULT NULL
        ) {$this->charset_collate};";

        $this->connection->query($sql);

        $this->updatedAT($table_name);
    }

    function create_invoice_table()
    {
        $table_name = 'orb_invoice';

        $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (
            id {$this->primary_key_config} PRIMARY KEY,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL {$this->updated_at},
            stripe_customer_id VARCHAR(255) DEFAULT NULL,
            quote_id VARCHAR(255) DEFAULT NULL,
            stripe_invoice_id VARCHAR(255) DEFAULT NULL,
            status VARCHAR(255) DEFAULT NULL,
            payment_intent_id VARCHAR(255) DEFAULT NULL,
            client_secret VARCHAR(255) DEFAULT NULL,
            due_date VARCHAR(255) DEFAULT NULL,
            subtotal VARCHAR(255) DEFAULT NULL,
            tax VARCHAR(255) DEFAULT NULL,
            amount_due VARCHAR(255) DEFAULT NULL,
            amount_remaining VARCHAR(255) DEFAULT NULL,
            invoice_pdf_url VARCHAR(255) DEFAULT NULL,
            onboarding_links TEXT DEFAULT NULL
        ) {$this->charset_collate};";

        $this->connection->query($sql);

        $this->updatedAT($table_name);
    }

    function create_receipt_table()
    {
        $table_name = 'orb_receipt';

        $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (
            id {$this->primary_key_config} PRIMARY KEY,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL {$this->updated_at},
            invoice_id VARCHAR(255) DEFAULT NULL,
            stripe_invoice_id VARCHAR(255) DEFAULT NULL,
            payment_intent_id VARCHAR(255) DEFAULT NULL,
            payment_method_id VARCHAR(255) DEFAULT NULL,
            payment_date VARCHAR(255) DEFAULT NULL,
            currency VARCHAR(255) DEFAULT NULL,
            amount_paid VARCHAR(255) DEFAULT NULL,
            balance VARCHAR(255) DEFAULT NULL,
            payment_method VARCHAR(255) DEFAULT NULL,
            stripe_customer_id VARCHAR(255) DEFAULT NULL,
            name VARCHAR(255) DEFAULT NULL,
            receipt_pdf_url VARCHAR(255) DEFAULT NULL,
            onboarding_links TEXT DEFAULT NULL
        ) {$this->charset_collate};";

        $this->connection->query($sql);

        $this->updatedAT($table_name);
    }
}
