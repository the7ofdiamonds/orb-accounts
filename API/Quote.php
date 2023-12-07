<?php

namespace ORB\Accounts\API;

use Exception;

use WP_REST_Request;
use WP_Error;

use ORB\Accounts\API\Stripe\StripeQuote;
use ORB\Accounts\Database\DatabaseQuote;

class Quote
{
    private $stripe_quote;
    private $database_quote;

    public function __construct($stripeClient)
    {
        $this->stripe_quote = new StripeQuote($stripeClient);
        $this->database_quote = new DatabaseQuote();
    }

    public function create_quote(WP_REST_Request $request)
    {
        try {
            $request_body = $request->get_body();
            $body = json_decode($request_body, true);
            $stripe_customer_id = $body['stripe_customer_id'];
            $selections = $body['selections'];
            $onboarding_links = $body['onboarding_links'];

            if (empty($stripe_customer_id)) {
                $msg = 'Stripe Customer ID is required';
                $code = 404;

                throw new Exception($msg, $code);
            }

            if (empty($selections)) {
                $msg = 'Selections are required';
                $code = 404;

                throw new Exception($msg, $code);
            }

            $stripeQuote = $this->stripe_quote->createStripeQuote($stripe_customer_id, $selections);
            $quote_id = $this->database_quote->saveQuote($stripeQuote, $selections, $onboarding_links);

            return rest_ensure_response($quote_id);
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

    public function get_quote(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');

            return rest_ensure_response($this->database_quote->getQuote($stripe_quote_id));
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

    public function get_quote_by_id(WP_REST_Request $request)
    {
        try {
            $id = $request->get_param('slug');

            return rest_ensure_response($this->database_quote->getQuoteByID($id));
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

    public function update_quote(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');
            $request_body = $request->get_body();
            $body = json_decode($request_body, true);


            $stripeQuote = $this->stripe_quote->updateStripeQuote($stripe_quote_id, $body['selections']);
            $this->database_quote->updateQuote($stripeQuote, $body['selections']);

            return rest_ensure_response($stripeQuote);
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

    public function update_quote_status(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');

            $quote = $this->stripe_quote->getStripeQuote($stripe_quote_id);

            return rest_ensure_response($this->database_quote->updateQuote($quote));
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


    public function finalize_quote(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');
            $request_body = $request->get_body();
            $body = json_decode($request_body, true);
            $selections = $body['selections'];
            $onboarding_links = $body['onboarding_links'];

            if (!preg_match('/^qt_\w+$/', $stripe_quote_id)) {
                throw new Exception('Invalid Stripe Quote ID.');
            }

            $stripeQuote = $this->stripe_quote->finalizeQuote($stripe_quote_id);

            if (empty($stripeQuote) && !is_object($stripeQuote)) {
                throw new Exception('A Quote is required to save.', 400);
            }

            if (empty($selections)) {
                throw new Exception('Selections are required', 400);
            }

            $databaseQuote = $this->database_quote->updateQuote($stripeQuote, $selections, $onboarding_links);

            if ($databaseQuote) {
                $amount_subtotal = $stripeQuote->amount_subtotal;
                $amount_discount = $stripeQuote->computed->upfront->total_details->amount_discount;
                $amount_shipping = $stripeQuote->computed->upfront->total_details->amount_shipping;
                $amount_tax = $stripeQuote->computed->upfront->total_details->amount_tax;
                $amount_total = $stripeQuote->amount_total;

                $quote_saved = [
                    'quote_id' => $databaseQuote['id'],
                    'stripe_customer_id' => $stripeQuote->customer,
                    'stripe_quote_id' => $stripeQuote->id,
                    'status' => $stripeQuote->status,
                    'expires_at' => $stripeQuote->expires_at,
                    'selections' => $selections,
                    'amount_subtotal' => $amount_subtotal,
                    'amount_discount' => $amount_discount,
                    'amount_shipping' => $amount_shipping,
                    'amount_tax' => $amount_tax,
                    'amount_total' => $amount_total
                ];

                return rest_ensure_response($quote_saved);
            }
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

    public function accept_quote(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');

            $accept_quote = $this->stripe_quote->acceptQuote($stripe_quote_id);
            $quoteUpdated = $this->database_quote->updateQuoteStatus($accept_quote->id, $accept_quote->status);

            if ($quoteUpdated === 1) {
                return rest_ensure_response($accept_quote);
            } else {
                throw new Exception('Quote could not be updated.', 404);
            }
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

    public function cancel_quote(WP_REST_Request $request)
    {
        try {
            $stripe_quote_id = $request->get_param('slug');

            $quote = $this->stripe_quote->cancelQuote($stripe_quote_id);

            return rest_ensure_response($this->database_quote->updateQuoteStatus($stripe_quote_id, $quote->status));
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

    public function get_quotes(WP_REST_Request $request)
    {
        try {
            return rest_ensure_response($this->database_quote->getQuotes());
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

    public function get_client_quotes(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');

            return rest_ensure_response($this->database_quote->getClientQuotes($stripe_customer_id));
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
