<?php

namespace ORB\Accounts\API;

use Exception;

use WP_REST_Request;

use PHPMailer\PHPMailer\PHPMailer;

use ORB\Accounts\API\Stripe\StripeCharges;
use ORB\Accounts\API\Stripe\StripeInvoice;
use ORB\Accounts\API\Stripe\StripePaymentIntents;
use ORB\Accounts\API\Stripe\StripePaymentMethods;
use ORB\Accounts\API\Stripe\StripePrices;
use ORB\Accounts\API\Stripe\StripeProducts;
use ORB\Accounts\API\Stripe\StripeQuote;
use ORB\Accounts\Post_Types\Products\Products as PT_Products;
use ORB\Accounts\Post_Types\Services\Services as PT_Services;

class Stripe
{
    private $stripe_invoice;
    private $stripe_payment_intents;
    private $stripe_payment_methods;
    private $stripe_quote;

    public function __construct($stripeClient)
    {
        //Use these in the backend including the admin area
        $stripe_charges = new StripeCharges($stripeClient);
        $stripe_prices = new StripePrices($stripeClient);
        $stripe_products = new StripeProducts($stripeClient);

        // new PT_Products($stripeClient);
        // new PT_Services($stripeClient);

        $this->stripe_invoice = new StripeInvoice($stripeClient);
        $this->stripe_payment_intents = new StripePaymentIntents($stripeClient);
        $this->stripe_payment_methods = new StripePaymentMethods($stripeClient);
        $this->stripe_quote = new StripeQuote($stripeClient);
    }

    public function create_stripe_invoice(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');
            $selections = $request['selections'];

            return $this->stripe_invoice->createStripeInvoice($stripe_customer_id, $selections);
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

    public function get_stripe_invoice(WP_REST_Request $request)
    {
        try {
            $stripe_invoice_id = $request->get_param('slug');

            $stripe_invoice = $this->stripe_invoice->getStripeInvoice($stripe_invoice_id);

            return rest_ensure_response($stripe_invoice);
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

    public function create_payment_intent(WP_REST_Request $request)
    {
        $email = $request['email'];
        $amount = $request['amount'];
        $automatic_payment_methods = $request['automatic_payment_methods'];
        $currency = $request['currency'];
        $invoice_id = $request['invoice_id'];

        $payment_intent = $this->stripe_payment_intents->createPaymentIntent($amount, $automatic_payment_methods, $currency, $email, $invoice_id);

        return rest_ensure_response($payment_intent);
    }

    public function get_payment_intent(WP_REST_Request $request)
    {
        $payment_intent_id = $request->get_param('slug');

        $payment_intent = $this->stripe_payment_intents->getPaymentIntent($payment_intent_id);

        return rest_ensure_response($payment_intent);
    }

    public function update_payment_intent(WP_REST_Request $request)
    {
        $stripe_payment_intent_id = $request->get_param('slug');
        $email = $request['email'];
        $invoice_id = $request['invoice_id'];

        $payment_intent = $this->stripe_payment_intents->updatePaymentIntent($stripe_payment_intent_id, $email, $invoice_id);

        return rest_ensure_response($payment_intent);
    }

    public function get_payment_method(WP_REST_Request $request)
    {
        $payment_method_id = $request->get_param('slug');

        $payment_method = $this->stripe_payment_methods->getPaymentMethod($payment_method_id);

        return rest_ensure_response($payment_method);
    }

    public function get_stripe_quote(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');

            return rest_ensure_response($this->stripe_quote->getStripeQuote($stripe_quote_id));
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

    public function update_stripe_quote(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');
            $selections = $request['selections'];

            if (empty($selections)) {
                $msg = 'Selections are required';
                $code = 404;

                throw new Exception($msg, $code);
            }

            return rest_ensure_response($this->stripe_quote->updateStripeQuote($stripe_quote_id, $selections));
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

    public function get_stripe_quotes()
    {
        try {
            return rest_ensure_response($this->stripe_quote->getStripeQuotes());
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

    public function get_stripe_client_quotes(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');

            if (empty($stripe_customer_id)) {
                $msg = 'Customer ID is required';
                $code = 404;
                throw new Exception($msg, $code);
            }

            return rest_ensure_response($this->stripe_quote->getStripeClientQuotes($stripe_customer_id));
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

}
