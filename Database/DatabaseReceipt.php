<?php

namespace ORB\Accounts\Database;

use Exception;

class DatabaseReceipt
{
    private $wpdb;
    private $table_name;

    public function __construct()
    {
        global $wpdb;
        $this->wpdb = $wpdb;
        $this->table_name = 'orb_receipt';
    }

    public function saveReceipt($invoice_id, $stripe_invoice, $payment_method, $onboarding_link)
    {
        $result = $this->wpdb->insert(
            $this->table_name,
            [
                'invoice_id' => $invoice_id,
                'stripe_invoice_id' => $stripe_invoice->id,
                'payment_intent_id' => $stripe_invoice->payment_intent->id,
                'payment_method_id' => $stripe_invoice->payment_intent->payment_method->id,
                'payment_date' => $stripe_invoice->status_transitions['paid_at'],
                'currency' => $stripe_invoice->currency,
                'amount_paid' => $stripe_invoice->amount_paid,
                'balance' => $stripe_invoice->amount_remaining,
                'payment_method' => $payment_method,
                'stripe_customer_id' => $stripe_invoice->customer->id,
                'name' => $stripe_invoice->customer->name,
                'receipt_pdf_url' => $stripe_invoice->hosted_invoice_url,
                'onboarding_link' => $onboarding_link
            ]
        );

        if ($result) {
            $receipt_id = $this->wpdb->insert_id;

            return $receipt_id;
        } else {
            $error_message = $this->wpdb->last_error;
            throw new Exception($error_message, 500);
        }
    }

    public function getReceipt($stripe_invoice_id, $stripe_customer_id)
    {
        if (empty($stripe_invoice_id)) {
            throw new Exception('No Stripe Invoice ID was provided.', 400);
        }

        if (empty($stripe_customer_id)) {
            throw new Exception('No Stripe Customer ID was provided.', 400);
        }

        $receipt = $this->wpdb->get_row(
            $this->wpdb->prepare(
                "SELECT * FROM {$this->table_name} WHERE stripe_invoice_id = %s AND stripe_customer_id = %s",
                $stripe_invoice_id,
                $stripe_customer_id
            )
        );

        if ($receipt) {
            $data = [
                'id' => $receipt->id,
                'created_at' => $receipt->created_at,
                'invoice_id' => $receipt->invoice_id,
                'stripe_invoice_id' => $receipt->stripe_invoice_id,
                'payment_intent_id' => $receipt->payment_intent_id,
                'payment_method_id' => $receipt->payment_method_id,
                'payment_date' => $receipt->payment_date,
                'currency' => $receipt->currency,
                'amount_paid' => $receipt->amount_paid,
                'balance' => $receipt->balance,
                'payment_method' => $receipt->payment_method,
                'stripe_customer_id' => $receipt->stripe_customer_id,
                'name' => $receipt->name,
                'receipt_pdf_url' => $receipt->receipt_pdf_url,
                'onboarding_link' => $receipt->onboarding_link
            ];

            return $data;
        } else {
            throw new Exception('Receipt not found', 404);
        }
    }

    public function getReceiptByID($id, $stripe_customer_id)
    {
        $receipt = $this->wpdb->get_row(
            $this->wpdb->prepare(
                "SELECT * FROM {$this->table_name} WHERE id = %d AND stripe_customer_id = %s",
                $id,
                $stripe_customer_id
            )
        );

        if ($receipt) {
            $receipt_data = [
                'id' => $receipt->id,
                'created_at' => $receipt->created_at,
                'invoice_id' => $receipt->invoice_id,
                'stripe_invoice_id' => $receipt->stripe_invoice_id,
                'payment_intent_id' => $receipt->payment_intent_id,
                'payment_method_id' => $receipt->payment_method_id,
                'payment_date' => $receipt->payment_date,
                'currency' => $receipt->currency,
                'amount_paid' => $receipt->amount_paid,
                'balance' => $receipt->balance,
                'payment_method' => $receipt->payment_method,
                'stripe_customer_id' => $receipt->stripe_customer_id,
                'name' => $receipt->name,
                'receipt_pdf_url' => $receipt->receipt_pdf_url,
                'onboarding_link' => $receipt->onboarding_link
            ];

            return $receipt_data;
        } else {
            throw new Exception('Receipt with the ID ' . $id . 'was not found');
        }
    }

    public function getClientReceipts($stripe_customer_id)
    {
        $receipts = $this->wpdb->get_results(
            $this->wpdb->prepare(
                "SELECT * FROM {$this->table_name} WHERE stripe_customer_id = %s",
                $stripe_customer_id
            )
        );

        if (!$receipts) {
            return 'There are no receipts';
        }

        return $receipts;
    }

    public function getReceipts()
    {
        $receipts = $this->wpdb->get_results(
            $this->wpdb->prepare("SELECT * FROM . $this->table_name")
        );

        if (!$receipts) {
            return 'There are no receipts';
        }

        return $receipts;
    }
}
