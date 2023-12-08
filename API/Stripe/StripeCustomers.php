<?php

namespace ORB\Accounts\API\Stripe;

use Exception;

use Stripe\Exception\ApiErrorException;

class StripeCustomers
{

    private $stripeClient;

    public function __construct($stripeClient)
    {
        $this->stripeClient = $stripeClient;
    }

    public function createCustomer(
        $email,
        $phone = '',
        $name,
        $address = '',
        // $shipping = '',
        // $metadata = '',
        // $tax_id_data = '',
        // $tax_exempt = '',
        // $invoice_settings = '',
        // $preferred_locales = ''
    ) {
        try {
            $customer = $this->stripeClient->customers->create([
                'email' => $email,
                'phone' => $phone,
                'name' => $name,
                'address' => $address,
                // 'shipping' => $shipping,
                // ['metadata' => $metadata],
                // 'tax_id_data' => $tax_id_data,
                // 'tax_exempt' => $tax_exempt,
                // 'invoice_settings' => $invoice_settings,
                // 'preferred_locales' => $preferred_locales
            ]);

            return $customer;
        } catch (ApiErrorException $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getHttpStatus();
            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            return $response_data;
        }
    }

    public function getCustomer($stripe_customer_id)
    {
        try {
            if (empty($stripe_customer_id)) {
                throw new Exception('A Stripe Customer ID is required.');
            }

            $customer = $this->stripeClient->customers->retrieve(
                $stripe_customer_id,
                ['expand' => ['tax_ids']]
            );

            return $customer;
        } catch (ApiErrorException $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getHttpStatus();
            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            return $response_data;
        }
    }

    public function updateCustomer(
        $stripe_customer_id,
        $email,
        $phone = '',
        $name,
        $address = '',
        // $shipping = '',
        // $tax_exempt = '',
        // $tax_id_data = '',
        // $metadata = '',
        // $invoice_settings = '',
        // $preferred_locales = '',
    ) {
        try {
            $customer = $this->stripeClient->customers->update(
                $stripe_customer_id,
                [
                    'email' => $email,
                    'phone' => $phone,
                    'name' => $name,
                    'address' => $address,
                    // 'shipping' => $shipping,
                    // 'tax_exempt' => $tax_exempt,
                    // 'tax_id_data' => $tax_id_data,
                    // ['metadata' => $metadata],
                    // 'invoice_settings' => $invoice_settings,
                    // 'preferred_locales' => $preferred_locales,
                ]
            );

            return $customer;
        } catch (ApiErrorException $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getHttpStatus();
            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            return $response_data;
        }
    }

    public function getcustomers($list_limit = 10)
    {
        try {
            $customers = $this->stripeClient->customers->all(['limit' => $list_limit]);
            
            return $customers;
        } catch (ApiErrorException $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getHttpStatus();
            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            return $response_data;
        }
    }

    public function searchCustomers($query)
    {
        try {
            $customers = $this->stripeClient->customers->search([
                'query' => $query
            ]);

            return $customers;
        } catch (ApiErrorException $e) {
            $error_message = $e->getMessage();
            $status_code = $e->getHttpStatus();
            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            return $response_data;
        }
    }
}
