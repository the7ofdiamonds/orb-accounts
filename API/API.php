<?php

namespace ORB\Accounts\API;

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
use ORB\Accounts\Router\Router;

use Stripe\Stripe as StripeAPI;
use Stripe\StripeClient;

use PHPMailer\PHPMailer\PHPMailer;

class API
{
    public function __construct()
    {
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

    public function add_to_rest_api()
    {
        register_meta(
            'post',
            '_service_cost',
            [
                'type' => 'number',
                'description' => 'Service Cost',
                'single' => true,
                'show_in_rest' => true
            ]
        );

        register_meta(
            'post',
            '_service_features',
            [
                'type' => 'string',
                'description' => 'Service Features',
                'single' => true,
                'show_in_rest' => true
            ]
        );

        register_meta(
            'post',
            '_service_description',
            [
                'type' => 'string',
                'description' => 'Service Description',
                'single' => true,
                'show_in_rest' => true
            ]
        );

        register_meta(
            'post',
            '_service_features',
            [
                'type' => 'string',
                'description' => 'Service Features',
                'single' => true,
                'show_in_rest' => true
            ]
        );

        register_meta(
            'post',
            '_service_price_id',
            [
                'type' => 'string',
                'description' => 'Service Price ID',
                'single' => true,
                'show_in_rest' => true
            ]
        );
    }

    public function allow_cors_headers()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }
}
