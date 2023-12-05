<?php

namespace ORB\Accounts\API;

use Exception;

use WP_REST_Request;

use ORB\Accounts\API\Stripe\StripeCustomers;
use ORB\Accounts\Database\DatabaseCustomer;

class Customers
{
    private $stripe_customers;
    private $database_customer;

    public function __construct($stripeClient)
    {
        $this->stripe_customers = new StripeCustomers($stripeClient);
        $this->database_customer = new DatabaseCustomer();
    }

    public function add_customer(WP_REST_Request $request)
    {
        try {
            $company_name = $request['company_name'];
            $tax_id = $request['tax_id'];
            $first_name = $request['first_name'];
            $last_name = $request['last_name'];
            $email = $request['user_email'];
            $phone = $request['phone'];
            $address_line_1 = $request['address_line_1'];
            $address_line_2 = $request['address_line_2'];
            $city = $request['city'];
            $state = $request['state'];
            $zipcode = $request['zipcode'];
            $country = $request['country'];
            $metadata = $request['metadata'];
            $payment_method_id = $request['payment_method_id'];
            $description = $request['description'];
            $balance = $request['balance'];
            $cash_balance = $request['cash_balance'];
            $invoice_prefix = $request['invoice_prefix'];
            $invoice_settings = $request['invoice_settings'];
            $next_invoice_sequence = $request['next_invoice_sequence'];
            $preferred_locales = $request['preferred_locales'];
            $promotion_code = $request['promotion_code'];
            $source = $request['source'];
            $tax = $request['tax'];
            $tax_id_type = $request['tax_id_type'];
            $tax_exempt = $request['tax_exempt'];

            $address = [
                'line1' => $address_line_1,
                'line2' => $address_line_2,
                'city' => $city,
                'state' => $state,
                'postal_code' => $zipcode,
                'country' => $country
            ];

            if (!isset($shipping)) {
                $shipping = [
                    'line1' => $address_line_1,
                    'line2' => $address_line_2,
                    'city' => $city,
                    'state' => $state,
                    'postal_code' => $zipcode,
                    'country' => $country
                ];
            }

            $tax_id_data = array(
                'type' => $tax_id_type,
                'value' => $tax_id
            );

            $user = get_user_by('email', $email);

            if (is_wp_error($user)) {
                $error_message = $user->get_error_message();
                return rest_ensure_response(array('error' => $error_message));
            }

            $user_id = $user->ID;

            if (isset($first_name)) {
                update_user_meta($user_id, 'first_name', sanitize_text_field($first_name));
            }

            if (isset($last_name)) {
                update_user_meta($user_id, 'last_name', sanitize_text_field($last_name));
            }

            if (isset($first_name) && isset($last_name)) {
                $name = $first_name . ' ' . $last_name;
            }

            if (isset($company_name)) {
                $name = $company_name;
            }

            $metadata = array(
                'user_id' => $user_id,
                'client_name' => $first_name . ' ' . $last_name
            );

            $customer = $this->stripe_customers->createCustomer(
                $name,
                $email,
                $address,
                $shipping,
                $phone,
                $payment_method_id,
                $description,
                $balance,
                $cash_balance,
                $invoice_prefix,
                $invoice_settings,
                $next_invoice_sequence,
                $preferred_locales,
                $promotion_code,
                $source,
                $tax,
                $tax_exempt,
                $tax_id_data,
                $metadata
            );

            $stripe_customer_id = $customer->id;

            $customer_id = $this->database_customer->saveCustomer($user_id, $stripe_customer_id, $first_name, $last_name);

            $data = [
                'customer_id' => $customer_id,
                'stripe_customer_id' => $stripe_customer_id
            ];

            return rest_ensure_response($data);
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

    public function get_customer(WP_REST_Request $request)
    {
        try {
            $user_email_encoded = $request->get_param('slug');
            $user_email = urldecode($user_email_encoded);
            $user = get_user_by('email', $user_email);
            $customer_id = $user->id;

            $customer = $this->database_customer->getCustomer($customer_id);

            $customer = $this->stripe_customers->getCustomer($customer['stripe_customer_id']);

            return rest_ensure_response($customer);
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

    public function update_customer(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');
            $tax_id = $request['tax_id'];
            $customer_id = $request['customer_id'];
            $company_name = $request['company_name'];
            $first_name = $request['first_name'];
            $last_name = $request['last_name'];
            $email = $request['user_email'];
            $phone = $request['phone'];
            $address_line_1 = $request['address_line_1'];
            $address_line_2 = $request['address_line_2'];
            $city = $request['city'];
            $state = $request['state'];
            $zipcode = $request['zipcode'];
            $country = $request['country'];
            $metadata = $request['metadata'];
            $description = $request['description'];
            $balance = $request['balance'];
            $cash_balance = $request['cash_balance'];
            $coupon = $request['coupon'];
            $invoice_prefix = $request['invoice_prefix'];
            $invoice_settings = $request['invoice_settings'];
            $next_invoice_sequence = $request['next_invoice_sequence'];
            $preferred_locales = $request['preferred_locales'];
            $promotion_code = $request['promotion_code'];
            $source = $request['source'];
            // $tax = $request['tax'];
            // $tax_id_type = $request['tax_id_type'];
            // $tax_exempt = $request['tax_exempt'];

            $address = [
                'line1' => $address_line_1,
                'line2' => $address_line_2,
                'city' => $city,
                'state' => $state,
                'postal_code' => $zipcode,
                'country' => $country
            ];

            if (!empty($shipping)) {
                $shipping = [
                    'line1' => $address_line_1,
                    'line2' => $address_line_2,
                    'city' => $city,
                    'state' => $state,
                    'postal_code' => $zipcode,
                    'country' => $country
                ];
            }

            // $tax_id_data = array(
            //     'type' => $tax_id_type,
            //     'value' => $tax_id
            // );

            if (!empty($company_name)) {
                $name = $first_name . ' ' . $last_name . ' - ' . $company_name;
            } else {
                $name = $first_name . ' ' . $last_name;
            }

            $updated_customer = $this->database_customer->updateCustomer($stripe_customer_id, $company_name, $first_name, $last_name);

            $updated_customer = $this->stripe_customers->updateCustomer(
                $stripe_customer_id,
                $name,
                $email,
                $address,
                $shipping,
                $phone,
                $description,
                $balance,
                $cash_balance,
                $coupon,
                $invoice_prefix,
                $invoice_settings,
                $next_invoice_sequence,
                $preferred_locales,
                $promotion_code,
                $source,
                // $tax,
                // $tax_exempt,
                // $tax_id_data,
                $metadata
            );

            return rest_ensure_response($updated_customer);
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
