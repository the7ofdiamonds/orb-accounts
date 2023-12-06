<?php

namespace ORB\Accounts\Database;

use Exception;

use Stripe\Quote;

class DatabaseQuote
{
    private $wpdb;
    private $table_name;

    public function __construct()
    {
        global $wpdb;
        $this->wpdb = $wpdb;
        $this->table_name = 'orb_quote';
    }

    public function saveQuote(Quote $quote, $selections, $onboarding_links = '')
    {
        try {
            if (empty($quote) && !is_object($quote)) {
                throw new Exception('A Quote is required to save.', 400);
            }

            if (empty($selections)) {
                throw new Exception('Selections are required', 400);
            }

            if (!preg_match('/^qt_\w+$/', $quote->id)) {
                throw new Exception('Invalid Stripe Quote ID.');
            }

            $result = $this->wpdb->insert(
                $this->table_name,
                [
                    'stripe_customer_id' => $quote->customer,
                    'stripe_quote_id' => $quote->id,
                    'status' => $quote->status,
                    'expires_at' => $quote->expires_at,
                    'selections' => json_encode($selections),
                    'amount_subtotal' => $quote->amount_subtotal,
                    'amount_discount' => $quote->computed->upfront->total_details->amount_discount,
                    'amount_shipping' => $quote->computed->upfront->total_details->amount_shipping,
                    'amount_tax' => $quote->computed->upfront->total_details->amount_tax,
                    'amount_total' => $quote->amount_total,
                    'onboarding_links' => json_encode($onboarding_links)
                ]
            );

            if ($this->wpdb->last_error) {
                throw new Exception($this->wpdb->last_error, 400);
            }

            return $result;
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at saveQuote');

            return $response;
        }
    }

    public function getQuote($stripe_quote_id)
    {
        try {
            if (empty($stripe_quote_id)) {
                throw new Exception('A Stripe Quote ID is required.', 400);
            }

            if (!preg_match('/^qt_\w+$/', $stripe_quote_id)) {
                throw new Exception('Invalid Stripe Quote ID.');
            }

            $quote = $this->wpdb->get_row(
                $this->wpdb->prepare(
                    "SELECT * FROM $this->table_name WHERE stripe_quote_id = %s",
                    $stripe_quote_id
                )
            );

            if (empty($quote)) {
                throw new Exception('Stripe Quote ID ' . $stripe_quote_id . ' not found', 404);
            }

            if ($this->wpdb->last_error) {
                throw new Exception($this->wpdb->last_error, 400);
            }

            $data = [
                'id' => $quote->id,
                'created_at' => $quote->created_at,
                'status' => $quote->status,
                'stripe_customer_id' => $quote->stripe_customer_id,
                'stripe_quote_id' => $quote->stripe_quote_id,
                'expires_at' => $quote->expires_at,
                'selections' => json_decode($quote->selections),
                'amount_subtotal' => $quote->amount_subtotal,
                'amount_discount' => $quote->amount_discount,
                'amount_shipping' => $quote->amount_shipping,
                'amount_tax' => $quote->amount_tax,
                'amount_total' => $quote->amount_total,
                'onboarding_links' => json_decode($quote->onboarding_links)
            ];

            return $data;
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at getQuote');

            return $response;
        }
    }

    public function getQuoteByID($id)
    {
        try {
            if (empty($id)) {
                throw new Exception('A Quote ID is required.', 400);
            }

            $quote = $this->wpdb->get_row(
                $this->wpdb->prepare(
                    "SELECT * FROM $this->table_name WHERE id = %d",
                    $id
                )
            );

            if (empty($quote)) {
                throw new Exception('Quote with the ID' . $id . 'not found', 404);
            }

            if ($this->wpdb->last_error) {
                throw new Exception($this->wpdb->last_error, 400);
            }

            $data = [
                'id' => $quote->id,
                'created_at' => $quote->created_at,
                'status' => $quote->status,
                'stripe_customer_id' => $quote->stripe_customer_id,
                'stripe_quote_id' => $quote->stripe_quote_id,
                'selections' => json_decode($quote->selections, true),
                'amount_subtotal' => $quote->amount_subtotal,
                'amount_discount' => $quote->amount_discount,
                'amount_shipping' => $quote->amount_shipping,
                'amount_tax' => $quote->amount_tax,
                'amount_total' => $quote->amount_total,
                'onboarding_links' => json_decode($quote->onboarding_links)
            ];

            return $data;
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at getQuoteByID');

            return $response;
        }
    }

    public function getQuotes()
    {
        try {
            $quotes = $this->wpdb->get_results(
                $this->wpdb->prepare(
                    "SELECT * FROM $this->table_name"
                )
            );

            if (empty($quotes)) {
                throw new Exception('There are no quotes to display.', 400);
            }

            if ($this->wpdb->last_error) {
                throw new Exception($this->wpdb->last_error, 400);
            }

            return $quotes;
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at getQuotes');

            return $response;
        }
    }

    public function getClientQuotes($stripe_customer_id)
    {
        try {
            if (empty($stripe_customer_id)) {
                throw new Exception('A Stripe Customer ID is required.', 400);
            }

            if (!preg_match('/^cus_\w+$/', $stripe_customer_id)) {
                throw new Exception('Invalid Stripe Customer ID.');
            }

            $quotes = $this->wpdb->get_results(
                $this->wpdb->prepare(
                    "SELECT * FROM $this->table_name WHERE stripe_customer_id = %s",
                    $stripe_customer_id
                )
            );

            if (empty($quotes)) {
                throw new Exception('There are no quotes to display.', 400);
            }

            if ($this->wpdb->last_error) {
                throw new Exception($this->wpdb->last_error, 400);
            }

            return $quotes;
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at getClientQuotes');

            return $response;
        }
    }

    public function updateQuote(Quote $quote, $selections = '')
    {
        try {
            $data = array();

            if (empty($quote) || !is_object($quote)) {
                throw new Exception('A Quote is required to update.');
            }

            $amount_subtotal = !empty($quote->amount_subtotal) ? $quote->amount_subtotal : null;
            $amount_discount = !empty($quote->computed->upfront->total_details->amount_discount) ? $quote->computed->upfront->total_details->amount_discount : null;
            $amount_shipping = !empty($quote->computed->upfront->total_details->amount_shipping) ? $quote->computed->upfront->total_details->amount_shipping : null;
            $amount_tax = !empty($quote->computed->upfront->total_details->amount_tax) ? $quote->computed->upfront->total_details->amount_tax : null;
            $amount_total = !empty($quote->amount_total) ? $quote->amount_total : null;

            if (!empty($amount_subtotal)) {
                $data['amount_subtotal'] = $amount_subtotal;
            }
            if (!empty($amount_discount)) {
                $data['amount_discount'] = $amount_discount;
            }
            if (!empty($amount_shipping)) {
                $data['amount_shipping'] = $amount_shipping;
            }
            if (!empty($amount_tax)) {
                $data['amount_tax'] = $amount_tax;
            }
            if (!empty($amount_total)) {
                $data['amount_total'] = $amount_total;
            }
            if (!empty($selections)) {
                $data['selections'] = $selections;
            }
            if (!preg_match('/^qt_\w+$/', $quote->id)) {
                throw new Exception('Invalid Stripe quote ID.');
            }

            $where = array(
                'stripe_quote_id' => $quote->id,
            );

            $updated = $this->wpdb->update($this->table_name, $data, $where);

            if ($this->wpdb->last_error) {
                throw new Exception($this->wpdb->last_error, 400);
            }

            return $updated;
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at updateQuote');

            return $response;
        }
    }

    public function updateQuoteStatus($stripe_quote_id, $status)
    {
        try {
            if (empty($stripe_quote_id)) {
                throw new Exception('A Stripe Quote ID is required.', 400);
            }

            if (!preg_match('/^qt_\w+$/', $stripe_quote_id)) {
                throw new Exception('Invalid Stripe quote ID.');
            }

            if (empty($status)) {
                throw new Exception('A status is required.', 400);
            }

            $data = array(
                'status' => $status,
            );

            $where = array(
                'stripe_quote_id' => $stripe_quote_id,
            );

            $updated = $this->wpdb->update($this->table_name, $data, $where);

            if ($this->wpdb->last_error) {
                throw new Exception($this->wpdb->last_error, 400);
            }

            return $updated;
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at updateQuoteStatus');

            return $response;
        }
    }
}
