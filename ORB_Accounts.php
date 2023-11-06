<?php

/**
 * @package ORB Accounts
 */
/*
Plugin Name: ORB Accounts
Plugin URI: 
Description: Accounts
Version: 1.0.0
Author: THE7OFDIAMONDS.TECH
Author URI: http://THE7OFDIAMONDS.TECH
License: 
Text Domain: seven-tech
*/

namespace ORB\Accounts;

require_once 'vendor/autoload.php';

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
define('ORB_ACCOUNTS', WP_PLUGIN_DIR . '/orb-accounts/');
define('ORB_ACCOUNTS_URL', WP_PLUGIN_URL . '/orb-accounts/');

use Dotenv\Dotenv;

use ORB\Accounts\Admin\Admin;
use ORB\Accounts\API\Email;
use ORB\Accounts\API\Clients;
use ORB\Accounts\API\Customers;
use ORB\Accounts\API\Quote;
use ORB\Accounts\API\Invoice;
use ORB\Accounts\API\Receipt;
use ORB\Accounts\API\Payment;
use ORB\Accounts\API\Stripe\Stripe;
use ORB\Accounts\API\Stripe\StripeCharges;
use ORB\Accounts\API\Stripe\StripeProducts;
use ORB\Accounts\API\Stripe\StripePrices;
use ORB\Accounts\API\Stripe\StripePaymentMethods;
use ORB\Accounts\API\Stripe\StripePaymentIntents;
use ORB\Accounts\CSS\CSS;
use ORB\Accounts\Email\EmailInvoice;
use ORB\Accounts\Email\EmailQuote;
use ORB\Accounts\Email\EmailReceipt;
use ORB\Accounts\Email\EmailOnboarding;
use ORB\Accounts\JS\JS;
use ORB\Accounts\Pages\Pages;
use ORB\Accounts\PDF\PDF;
use ORB\Accounts\Roles\Roles;
use ORB\Accounts\Shortcodes\Shortcodes;
use ORB\Accounts\Database\Database;
use ORB\Accounts\Templates\Templates;

use Stripe\Stripe as StripeAPI;
use Stripe\StripeClient;

use PHPMailer\PHPMailer\PHPMailer;

class ORB_Accounts
{
    public $plugin;

    public function __construct()
    {
        $this->plugin = plugin_basename(__FILE__);
        add_filter("plugin_action_links_$this->plugin", [$this, 'settings_link']);

        new Admin;
        new CSS;
        new JS;
        new Pages;
        new Shortcodes;
        new Database;
        new Roles;
        new Templates;

        $dotenv = Dotenv::createImmutable(ORB_ACCOUNTS);
        $dotenv->load(__DIR__);
        $envFilePath = ORB_ACCOUNTS . '.env';
        $envContents = file_get_contents($envFilePath);
        $lines = explode("\n", $envContents);
        $stripeSecretKey = null;

        foreach ($lines as $line) {
            $parts = explode('=', $line, 2);
            if (count($parts) === 2 && $parts[0] === 'STRIPE_SECRET_KEY') {
                $stripeSecretKey = trim($parts[1]);
                break;
            }
        }

        $mailer = new PHPMailer();

        if ($stripeSecretKey !== null) {
            StripeAPI::setApiKey($stripeSecretKey);
            $stripeClient = new StripeClient($stripeSecretKey);

            new Email($stripeClient, $mailer);

            new Stripe($stripeClient);

            $stripe_payment_intent = new StripePaymentIntents($stripeClient);
            $stripe_charges = new StripeCharges($stripeClient);
            $stripe_payment_methods = new StripePaymentMethods($stripeClient);
            $stripe_products = new StripeProducts($stripeClient);
            $stripe_prices = new StripePrices($stripeClient);

            new Payment($stripe_payment_intent, $stripe_payment_methods);

            new Clients($stripeClient);
            new Customers($stripeClient);
            new Quote($stripeClient);
            new Invoice($stripeClient);
            new Receipt($stripeClient);

            $pdf = new PDF;
            new EmailQuote($stripeClient, $mailer);
            new EmailInvoice($stripeClient, $mailer);
            new EmailReceipt($stripeClient, $mailer);
            new EmailOnboarding($stripeClient, $mailer);
        } else {
            error_log('Stripe Secret Key is required.');
        }
    }

    public function activate()
    {
        flush_rewrite_rules();
    }

    public function settings_link($links)
    {
        $settings_link = '<a href="' . admin_url('admin.php?page=orb_services') . '">Settings</a>';
        array_push($links, $settings_link);

        return $links;
    }
}

$orb_services = new ORB_Accounts();
register_activation_hook(__FILE__, [$orb_services, 'activate']);
// register_deactivation_hook( __FILE__, [ $thfw, 'deactivate' ]);