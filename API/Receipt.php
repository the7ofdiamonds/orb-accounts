<?php

namespace ORB\Accounts\API;

use Exception;

use WP_REST_Request;

use ORB\Accounts\API\Stripe\StripeInvoice;
use ORB\Accounts\API\Stripe\StripeCharges;
use ORB\Accounts\API\Stripe\StripePaymentIntents;
use ORB\Accounts\API\Stripe\StripePaymentMethods;
use ORB\Accounts\Database\DatabaseInvoice;
use ORB\Accounts\Database\DatabaseReceipt;

use Stripe\Exception\ApiErrorException;

class Receipt
{
    private $database_invoice;
    private $stripe_invoice;
    private $stripe_payment_methods;
    private $stripe_payment_intent;
    private $stripe_charges;
    private $database_receipt;
    private $email;

    public function __construct($stripeClient)
    {
        $this->database_invoice = new DatabaseInvoice();
        $this->stripe_invoice = new StripeInvoice($stripeClient);
        $this->stripe_payment_methods = new StripePaymentMethods($stripeClient);
        $this->stripe_payment_intent = new StripePaymentIntents($stripeClient);
        $this->stripe_charges = new StripeCharges($stripeClient);
        $this->database_receipt = new DatabaseReceipt($stripeClient);
    }

    public function save_receipt(WP_REST_Request $request)
    {
        try {
            $invoice_id = $request['invoice_id'];
            $stripe_customer_id = $request['stripe_customer_id'];

            if (empty($invoice_id)) {
                throw new Exception('Invoice ID is required.', 400);
            }

            $invoice = $this->database_invoice->getInvoiceByID($invoice_id, $stripe_customer_id);

            $stripe_invoice_id = $invoice['stripe_invoice_id'];

            if (empty($stripe_invoice_id)) {
                throw new Exception('Stripe Invoice ID is required.', 400);
            }

            $stripe_invoice = $this->stripe_invoice->getStripeInvoice(
                $stripe_invoice_id,
            );

            $payment_intent_id = $stripe_invoice->payment_intent;

            $payment_intent = $this->stripe_payment_intent->getPaymentIntent($payment_intent_id);

            $payment_method_id = $payment_intent->payment_method;

            if (empty($payment_method_id)) {
                throw new Exception('Payment Method ID is required.', 400);
            }

            $paymentMethod = $this->stripe_payment_methods->getPaymentMethod($payment_method_id);

            $type = $paymentMethod->type;

            if($type === 'card'){
                $country = $paymentMethod->card->country;
                $brand = $paymentMethod->card->brand;
                $last4 = $paymentMethod->card->last4;
                $payment_method = $country . '  ' . $brand . '  ' . $last4;
            } else {
                $payment_method = $type;
            }

            $onboarding_links = $invoice['onboarding_links'];

            $receipt_id = $this->database_receipt->saveReceipt($invoice_id, $stripe_invoice, $payment_method_id, $payment_method, $onboarding_links);

            return rest_ensure_response($receipt_id);
        } catch (ApiErrorException $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getHttpStatus();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

    function get_receipt(WP_REST_Request $request)
    {
        try {
            $stripe_invoice_id = $request->get_param('slug');
            $stripe_customer_id = $request['stripe_customer_id'];

            if (empty($stripe_customer_id)) {
                $msg = 'Stripe Customer ID is required.';
                $message = array(
                    'message' => $msg,
                );
                $response = rest_ensure_response($message);
                $response->set_status(404);

                return $response;
            }

            $receipt = $this->database_receipt->getReceipt($stripe_invoice_id, $stripe_customer_id);

            return rest_ensure_response($receipt);
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

    function get_receipt_by_id(WP_REST_Request $request)
    {
        try {
            $id = $request->get_param('slug');
            $stripe_customer_id = $request['stripe_customer_id'];

            if (empty($stripe_customer_id)) {
                $msg = 'Stripe Customer ID is required.';
                $message = array(
                    'message' => $msg,
                );
                $response = rest_ensure_response($message);
                $response->set_status(404);

                return $response;
            }

            $receipt = $this->database_receipt->getReceiptByID($id, $stripe_customer_id);

            return rest_ensure_response($receipt);
        } catch (Exception $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);
            error_log(print_r($response, true));

            return $response;
        }
    }

    function get_receipts(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');

            return rest_ensure_response($this->database_receipt->getClientReceipts($stripe_customer_id));
        } catch (Exception $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);
            error_log(print_r($response, true));

            return $response;
        }
    }

    public function get_client_receipts(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');

            return rest_ensure_response($this->database_receipt->getClientReceipts($stripe_customer_id));
        } catch (Exception $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);
            error_log(print_r($response, true));
            return $response;
        }
    }

}
