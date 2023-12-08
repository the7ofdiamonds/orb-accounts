<?php

namespace ORB\Accounts\Database;

require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

class Database
{
    private $wpdb;

    public function __construct()
    {
        global $wpdb;
        $this->wpdb = $wpdb;

        $this->createTables();

        new DatabaseUsers();
        new DatabaseInvoice();
        new DatabaseQuote();
        new DatabaseReceipt();
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
        $charset_collate = $this->wpdb->get_charset_collate();

        $sql = "CREATE TABLE {$table_name} (
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
        ) $charset_collate;";

        dbDelta($sql);
    }

    function create_quote_table()
    {
        $table_name = 'orb_quote';
        $charset_collate = $this->wpdb->get_charset_collate();

        $sql = "CREATE TABLE {$table_name} (
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
        ) $charset_collate;";

        dbDelta($sql);
    }

    function create_invoice_table()
    {
        $table_name = 'orb_invoice';
        $charset_collate = $this->wpdb->get_charset_collate();

        $sql = "CREATE TABLE {$table_name} (
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
            onboarding_link TEXT DEFAULT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";

        dbDelta($sql);
    }

    function create_receipt_table()
    {
        $table_name = 'orb_receipt';
        $charset_collate = $this->wpdb->get_charset_collate();

        $sql = "CREATE TABLE {$table_name} (
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
        onboarding_link TEXT DEFAULT NULL,
        PRIMARY KEY (id)
    ) $charset_collate;";

        dbDelta($sql);
    }
}
