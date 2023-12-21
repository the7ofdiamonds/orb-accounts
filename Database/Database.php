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

    public function __construct()
    {
        try {
            global $wpdb;

            $env = new EnvironmentVariables;

            $this->db_type = $env->getENV('DB_TYPE');
            $this->db_host = $env->getENV('DB_HOST');
            $this->db_user = $env->getENV('DB_USER');
            $this->db_password = $env->getENV('DB_PASSWORD');
            $this->db_name = $env->getENV('DB_NAME') ?: 'ORB';
            $this->db_charset = $wpdb->charset;
            $this->db_collate = $wpdb->collate;
            $this->charset_collate = $wpdb->get_charset_collate();

            if (!$this->db_type || !$this->db_host || !$this->db_user || !$this->db_password || !$this->db_name) {
                $this->db_host = $wpdb->dbhost;
                $this->db_user = $wpdb->dbuser;
                $this->db_password = $wpdb->dbpassword;
                $this->db_name = get_option('DB_NAME', 'ORB');

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
            $dsn = $this->db_type . ":host={$this->db_host};charset={$this->db_charset}";
            $connection = new PDO($dsn, $this->db_user, $this->db_password);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "CREATE DATABASE IF NOT EXISTS $this->db_name";
            $connection->exec($sql);

            $this->connection = new PDO("$dsn;dbname=$this->db_name;charset={$this->db_charset}", $this->db_user, $this->db_password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $this->createTables();
        } catch (PDOException $e) {
            error_log("Connection failed: " . $e->getMessage());
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
            id INT NOT NULL AUTO_INCREMENT,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            user_id VARCHAR(255) DEFAULT NULL,
            stripe_customer_id VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            phone VARCHAR(255) DEFAULT NULL,
            first_name VARCHAR(255) DEFAULT NULL,
            last_name VARCHAR(255) DEFAULT NULL,
            PRIMARY KEY (id)
        ) $this->charset_collate;";

        $this->connection->query($sql);
    }

    function create_quote_table()
    {
        $table_name = 'orb_quote';

        $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (  
            id INT NOT NULL AUTO_INCREMENT,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
            onboarding_links TEXT DEFAULT NULL,
            PRIMARY KEY (id)
        ) $this->charset_collate;";

        $this->connection->query($sql);
    }

    function create_invoice_table()
    {
        $table_name = 'orb_invoice';

        $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (
            id INT NOT NULL AUTO_INCREMENT,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
            onboarding_links TEXT DEFAULT NULL,
            PRIMARY KEY (id)
        ) $this->charset_collate;";

        $this->connection->query($sql);
    }

    function create_receipt_table()
    {
        $table_name = 'orb_receipt';

        $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (
            id INT NOT NULL AUTO_INCREMENT,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
            onboarding_links TEXT DEFAULT NULL,
            PRIMARY KEY (id)
        ) $this->charset_collate;";

        $this->connection->query($sql);
    }
}
