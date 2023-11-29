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
        } else {
            error_log('Stripe Secret Key is required.');
        }

        $email = new Email($stripeClient, $mailer);

        new Stripe($stripeClient);

        $stripe_payment_intent = new StripePaymentIntents($stripeClient);
        $stripe_charges = new StripeCharges($stripeClient);
        $stripe_payment_methods = new StripePaymentMethods($stripeClient);
        $stripe_products = new StripeProducts($stripeClient);
        $stripe_prices = new StripePrices($stripeClient);

        $payment = new Payment($stripe_payment_intent, $stripe_payment_methods);

        $clients = new Clients($stripeClient);
        $customers = new Customers($stripeClient);
        $quote = new Quote($stripeClient);
        $invoice = new Invoice($stripeClient);
        $receipt = new Receipt($stripeClient);

        $pdf = new PDF;
        new EmailQuote($stripeClient, $mailer);
        new EmailInvoice($stripeClient, $mailer);
        new EmailReceipt($stripeClient, $mailer);
        new EmailOnboarding($stripeClient, $mailer);

        register_rest_route('orb/users/clients/v1', '/add', array(
            'methods' => 'POST',
            'callback' => array($clients, 'add_client'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/users/client/v1', '/(?P<slug>[a-zA-Z0-9-_%.]+)', array(
            'methods' => 'GET',
            'callback' => array($clients, 'get_client'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/customers', [
            'methods' => 'POST',
            'callback' => [$customers, 'add_stripe_customer'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/stripe/customers/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'GET',
            'callback' => [$customers, 'get_stripe_customer'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/stripe/customers/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'PATCH',
            'callback' => [$customers, 'update_stripe_customer'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/email/quote/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'POST',
            'callback' => [$email, 'send_quote_email'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/email/invoice/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'POST',
            'callback' => [$email, 'send_invoice_email'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/email/receipt/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'POST',
            'callback' => [$email, 'send_receipt_email'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/email/onboarding/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'POST',
            'callback' => [$email, 'send_onboarding_email'],
            'permission_callback' => '__return_true',
        ]);

        // add_action('rest_api_init', function () {
        //     register_rest_route('orb/v1', '/stripe/invoice/(?P<slug>[a-zA-Z0-9-_]+)', [
        //         'methods' => 'POST',
        //         'callback' => [$invoice, 'create_stripe_invoice'],
        //         'permission_callback' => '__return_true',
        //     ]);
        // });

        // add_action('rest_api_init', function () {
        //     register_rest_route('orb/v1', '/invoice/(?P<slug>[a-zA-Z0-9-_]+)', [
        //         'methods' => 'POST',
        //         'callback' => [$invoice, 'save_invoice'],
        //         'permission_callback' => '__return_true',
        //     ]);
        // });

        register_rest_route('orb/v1', '/invoice/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'POST',
            'callback' => [$invoice, 'get_invoice'],
            'permission_callback' => '__return_true',
        ]);

        // add_action('rest_api_init', function () {
        //     register_rest_route('orb/v1', '/invoice/(?P<slug>[a-zA-Z0-9-_]+)/id', [
        //         'methods' => 'POST',
        //         'callback' => [$invoice, 'get_invoice_by_id'],
        //         'permission_callback' => '__return_true',
        //     ]);
        // });

        // add_action('rest_api_init', function () {
        //     register_rest_route('orb/v1', '/invoice/(?P<slug>[a-zA-Z0-9-_]+)/quoteid', [
        //         'methods' => 'POST',
        //         'callback' => [$invoice, 'get_invoice_by_quote_id'],
        //         'permission_callback' => '__return_true',
        //     ]);
        // });

        register_rest_route('orb/v1', '/stripe/invoices/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'GET',
            'callback' => [$invoice, 'get_stripe_invoice'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/stripe/invoices/(?P<slug>[a-zA-Z0-9-_]+)/finalize', [
            'methods' => 'POST',
            'callback' => [$invoice, 'finalize_invoice'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/invoice/(?P<slug>[a-z0-9-]+)', [
            'methods' => 'PATCH',
            'callback' => [$invoice, 'update_invoice'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/invoice/status/(?P<slug>[a-z0-9-]+)', [
            'methods' => 'PATCH',
            'callback' => [$invoice, 'update_invoice_status'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/invoices/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'GET',
            'callback' => [$invoice, 'get_invoices'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/invoices/client/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'GET',
            'callback' => [$invoice, 'get_client_invoices'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/stripe/payment_intents', [
            'methods' => 'POST',
            'callback' => [$payment, 'create_payment_intent'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/stripe/payment_intents/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'GET',
            'callback' => [$payment, 'get_payment_intent'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/stripe/payment_intents/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'PATCH',
            'callback' => [$payment, 'update_payment_intent'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/stripe/payment_methods/(?P<slug>[a-zA-Z0-9-_]+)', [
            'methods' => 'GET',
            'callback' => [$payment, 'get_payment_method'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/quote', array(
            'methods' => 'POST',
            'callback' => array($quote, 'create_stripe_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/quote/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'get_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/quote/(?P<slug>[a-zA-Z0-9-_]+)/id', array(
            'methods' => 'POST',
            'callback' => array($quote, 'get_quote_by_id'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($quote, 'get_stripe_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/quote/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'PATCH',
            'callback' => array($quote, 'update_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'update_stripe_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/(?P<slug>[a-zA-Z0-9-_]+)/finalize', array(
            'methods' => 'POST',
            'callback' => [$quote, 'finalize_quote'],
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/(?P<slug>[a-zA-Z0-9-_]+)/accept', array(
            'methods' => 'POST',
            'callback' => array($quote, 'accept_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/(?P<slug>[a-zA-Z0-9-_]+)/cancel', array(
            'methods' => 'POST',
            'callback' => array($quote, 'cancel_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/quote/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'update_quote_status'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/quote/(?P<slug>[a-zA-Z0-9-_]+)/pdf', array(
            'methods' => 'GET',
            'callback' => array($quote, 'pdf_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/quotes', array(
            'methods' => 'GET',
            'callback' => array($quote, 'get_quotes'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/quotes/client/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($quote, 'get_client_quotes'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes', array(
            'methods' => 'GET',
            'callback' => array($quote, 'get_stripe_quotes'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($quote, 'get_stripe_client_quotes'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/receipt', [
            'methods' => 'POST',
            'callback' => [$receipt, 'save_receipt'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/receipt/(?P<slug>[a-z0-9-_]+)', [
            'methods' => 'POST',
            'callback' => [$receipt, 'get_receipt'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/receipt/(?P<slug>[a-z0-9-_]+)/id', [
            'methods' => 'POST',
            'callback' => [$receipt, 'get_receipt_by_id'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('orb/v1', '/receipts/client/(?P<slug>[a-z0-9-_]+)', [
            'methods' => 'GET',
            'callback' => [$receipt, 'get_client_receipts'],
            'permission_callback' => '__return_true',
        ]);
    }

    public function allow_cors_headers()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }
}
