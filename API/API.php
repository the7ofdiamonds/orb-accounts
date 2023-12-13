<?php

namespace ORB\Accounts\API;

use Dotenv\Dotenv;

use Stripe\Stripe as StripeAPI;
use Stripe\StripeClient;

use PHPMailer\PHPMailer\PHPMailer;

use ORB\Accounts\Email\EmailInvoice;
use ORB\Accounts\Email\EmailQuote;
use ORB\Accounts\Email\EmailReceipt;
use ORB\Accounts\Email\EmailOnboarding;
use ORB\Accounts\ENV\EnvironmentVariables;
use ORB\Accounts\PDF\PDF;

class API
{
    public function __construct()
    {
        $mailer = new PHPMailer();
        // PDF being used ???
        $pdf = new PDF;
        $enums = new Enums();
        $env_var = new EnvironmentVariables();

        $stripeSecretKey = $env_var->getStripeSecretKey();

        if ($stripeSecretKey !== null) {
            StripeAPI::setApiKey($stripeSecretKey);
            $stripeClient = new StripeClient($stripeSecretKey);

            $user = new Users($stripeClient);
            // $email = new Email($stripeClient, $mailer);
            // new EmailQuote($stripeClient, $mailer);
            // new EmailInvoice($stripeClient, $mailer);
            // new EmailReceipt($stripeClient, $mailer);
            // new EmailOnboarding($stripeClient, $mailer);
            $env = new ENV;
            $invoice = new Invoice($stripeClient);
            $quote = new Quote($stripeClient);
            $receipt = new Receipt($stripeClient);
            $stripe = new Stripe($stripeClient);
        } else {
            error_log('Stripe Secret Key is required.');
        }

        register_rest_route('orb/env/v1', '/stripe-secret-key', array(
            'methods' => 'GET',
            'callback' => array($env, 'get_stripe_secret_key'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/enums/v1', '/countries', array(
            'methods' => 'GET',
            'callback' => array($enums, 'get_countries'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/enums/v1', '/countries/tax-id', array(
            'methods' => 'GET',
            'callback' => array($enums, 'get_tax_id_info'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/user/v1', '/add', array(
            'methods' => 'POST',
            'callback' => array($user, 'add_user'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/users/v1', '/(?P<slug>[a-zA-Z0-9-_.%]+)', array(
            'methods' => 'GET',
            'callback' => array($user, 'get_user'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/user/v1', '/update/(?P<slug>[a-zA-Z0-9-_.%]+)', array(
            'methods' => 'PATCH',
            'callback' => array($user, 'update_user'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/user/v1', '/add/tax-id/(?P<slug>[a-zA-Z0-9-_.%]+)', array(
            'methods' => 'POST',
            'callback' => array($user, 'add_user_tax_id'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/user/v1', '/delete/tax-id/(?P<slug>[a-zA-Z0-9-_.%]+)', array(
            'methods' => 'DELETE',
            'callback' => array($user, 'delete_user_tax_id'),
            'permission_callback' => '__return_true',
        ));

        // register_rest_route('orb/email/v1', '/quote/(?P<slug>[a-zA-Z0-9-_]+)', array(
        //     'methods' => 'POST',
        //     'callback' => array($email, 'send_quote_email'),
        //     'permission_callback' => '__return_true',
        // ));

        // register_rest_route('orb/email/v1', '/invoice/(?P<slug>[a-zA-Z0-9-_]+)', array(
        //     'methods' => 'POST',
        //     'callback' => array($email, 'send_invoice_email'),
        //     'permission_callback' => '__return_true',
        // ));

        // register_rest_route('orb/email/v1', '/receipt/(?P<slug>[a-zA-Z0-9-_]+)', array(
        //     'methods' => 'POST',
        //     'callback' => array($email, 'send_receipt_email'),
        //     'permission_callback' => '__return_true',
        // ));

        // register_rest_route('orb/email/v1', '/onboarding/(?P<slug>[a-zA-Z0-9-_]+)', array(
        //     'methods' => 'POST',
        //     'callback' => array($email, 'send_onboarding_email'),
        //     'permission_callback' => '__return_true',
        // ));

        register_rest_route('orb/invoice/v1', '/save/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($invoice, 'save_invoice'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/invoice/v1', '/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($invoice, 'get_invoice'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/invoice/v1', '/id/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($invoice, 'get_invoice_by_id'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/invoice/v1', '/quoteid/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($invoice, 'get_invoice_by_quote_id'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/invoice/v1', '/finalize/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($invoice, 'finalize_invoice'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/invoice/v1', '/update/(?P<slug>[a-z0-9-]+)', array(
            'methods' => 'PATCH',
            'callback' => array($invoice, 'update_invoice'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/invoice/v1', '/update/status/(?P<slug>[a-z0-9-]+)', array(
            'methods' => 'PATCH',
            'callback' => array($invoice, 'update_invoice_status'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/invoice/v1', '/client/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($invoice, 'get_client_invoices'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/create', array(
            'methods' => 'POST',
            'callback' => array($quote, 'create_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'get_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/id/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'get_quote_by_id'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/update/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'PATCH',
            'callback' => array($quote, 'update_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/accept/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'accept_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/cancel/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'cancel_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/update/status/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'update_quote_status'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/all/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($quote, 'get_client_quotes'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/finalize/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($quote, 'finalize_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/receipt/v1', '/save', array(
            'methods' => 'POST',
            'callback' => array($receipt, 'save_receipt'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/receipt/v1', '/(?P<slug>[a-z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($receipt, 'get_receipt'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/receipt/v1', '/id/(?P<slug>[a-z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($receipt, 'get_receipt_by_id'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/receipt/v1', '/client/(?P<slug>[a-z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($receipt, 'get_client_receipts'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/customers/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'get_stripe_customer'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/invoices/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'get_stripe_invoice'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/payment_intents/create', array(
            'methods' => 'POST',
            'callback' => array($stripe, 'create_payment_intent'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/payment_intents/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'get_payment_intent'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/payment_intents/update/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'PATCH',
            'callback' => array($stripe, 'update_payment_intent'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/payment_methods/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'get_payment_method'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'get_stripe_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/update/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'POST',
            'callback' => array($stripe, 'update_stripe_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/quote/v1', '/stripe/pdf/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'pdf_quote'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'get_stripe_quotes'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('orb/v1', '/stripe/quotes/client/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array($stripe, 'get_stripe_client_quotes'),
            'permission_callback' => '__return_true',
        ));
    }

    public function allow_cors_headers()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }
}
