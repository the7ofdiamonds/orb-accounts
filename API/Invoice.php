<?php

namespace ORB\Accounts\API;

use Exception;

use ORB\Accounts\API\Stripe\StripeInvoice;
use ORB\Accounts\Database\DatabaseInvoice;

use WP_REST_Request;

class Invoice
{
    private $stripe_invoice;
    private $database_invoice;

    public function __construct($stripeClient)
    {
        $this->database_invoice = new DatabaseInvoice();
        $this->stripe_invoice = new StripeInvoice($stripeClient);
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

    public function save_invoice(WP_REST_Request $request)
    {
        try {
            $stripe_invoice_id = $request->get_param('slug');
            $quote_id = $request['quote_id'];

            $stripe_invoice = $this->stripe_invoice->getStripeInvoice($stripe_invoice_id);
            $invoice_id = $this->database_invoice->saveInvoice($stripe_invoice, $quote_id);

            return rest_ensure_response($invoice_id);
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

    public function get_invoice(WP_REST_Request $request)
    {
        try {
            $stripe_invoice_id = $request->get_param('slug');
            $stripe_customer_id = $request['stripe_customer_id'];

            $invoice = $this->database_invoice->getInvoice($stripe_invoice_id,  $stripe_customer_id);
            error_log('get_invoice');
            return rest_ensure_response($invoice);
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

    public function get_invoice_by_id(WP_REST_Request $request)
    {
        try {
            $id = $request->get_param('slug');
            $stripe_customer_id = $request['stripe_customer_id'];

            $invoice = $this->database_invoice->getInvoiceByID($id, $stripe_customer_id);

            return rest_ensure_response($invoice);
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

    public function get_invoice_by_quote_id(WP_REST_Request $request)
    {
        try {
            $quote_id = $request->get_param('slug');
            $stripe_customer_id = $request['stripe_customer_id'];

            $invoice = $this->database_invoice->getInvoiceByQuoteID($quote_id, $stripe_customer_id);

            return rest_ensure_response($invoice);
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

    function update_invoice(WP_REST_Request $request)
    {
        try {
            $stripe_invoice_id = $request->get_param('slug');

            $stripe_invoice = $this->stripe_invoice->getStripeInvoice($stripe_invoice_id);
            $update_invoice = $this->database_invoice->updateInvoice($stripe_invoice);

            return rest_ensure_response($update_invoice);
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

    function update_invoice_status(WP_REST_Request $request)
    {
        try {
            $stripe_invoice_id = $request->get_param('slug');

            $stripe_invoice = $this->stripe_invoice->getStripeInvoice($stripe_invoice_id);
            $update_invoice_status = $this->database_invoice->updateInvoiceStatus($stripe_invoice_id, $stripe_invoice->status);

            return rest_ensure_response($update_invoice_status);
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

    public function get_invoices()
    {
        try {
            $invoices = $this->database_invoice->getInvoices();

            return rest_ensure_response($invoices);
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

    public function get_client_invoices(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');

            return rest_ensure_response($this->database_invoice->getClientInvoices($stripe_customer_id));
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

    public function finalize_invoice(WP_REST_Request $request)
    {
        try {
            $stripe_invoice_id = $request->get_param('slug');
            $stripe_customer_id = $request['stripe_customer_id'];

            $quote = $this->database_invoice->getInvoice($stripe_invoice_id, $stripe_customer_id);
            $quote_id = $quote['quote_id'];

            $stripe_invoice = $this->stripe_invoice->finalizeInvoice($stripe_invoice_id);
            $invoice_id = $this->database_invoice->saveInvoice($stripe_invoice, $quote_id);

            return rest_ensure_response($invoice_id);
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
