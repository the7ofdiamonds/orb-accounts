<?php

namespace ORB\Accounts\API;

use Exception;

use WP_REST_Request;

use ORB\Accounts\API\Stripe\StripeCustomers;
use ORB\Accounts\Database\DatabaseUsers;

class Clients
{
    private $stripe_customers;
    private $database_users;

    public function __construct($stripeClient)
    {
        $this->stripe_customers = new StripeCustomers($stripeClient);
        $this->database_users = new DatabaseUsers();
    }

    function add_client(WP_REST_Request $request)
    {
        try {
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
            $shipping_address_line_1 = $request['shipping_address_line_1'];
            $shipping_address_line_2 = $request['shipping_address_line_2'];
            $shipping_city = $request['shipping_city'];
            $shipping_state = $request['shipping_state'];
            $shipping_zipcode = $request['shipping_zipcode'];
            $shipping_country = $request['shipping_country'];
            $company_name = $request['company_name'];
            $tax_id_type = $request['tax_id_type'];
            $tax_id = $request['tax_id'];
            $tax_exempt = $request['tax_exempt'];
            $invoice_settings = $request['invoice_settings'];
            $preferred_locales = $request['preferred_locales'];

            $address = [
                'line1' => $address_line_1,
                'line2' => $address_line_2,
                'city' => $city,
                'state' => $state,
                'postal_code' => $zipcode,
                'country' => $country
            ];

            $shipping = [
                'line1' => $shipping_address_line_1,
                'line2' => $shipping_address_line_2,
                'city' => $shipping_city,
                'state' => $shipping_state,
                'postal_code' => $shipping_zipcode,
                'country' => $shipping_country
            ];

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

            $metadata = array(
                'user_id' => $user_id,
                'company_name' => $company_name
            );

            $customer = $this->stripe_customers->createCustomer(
                $name,
                $email,
                $phone,
                $address,
                $shipping,
                $metadata,
                $tax_id_data,
                $tax_exempt,
                $invoice_settings,
                $preferred_locales
            );

            $stripe_customer_id = $customer->id;

            $client_id = $this->database_users->saveUser($user_id, $stripe_customer_id, $email, $phone, $first_name, $last_name, $company_name);

            $data = [
                'client_id' => $client_id,
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

    public function get_client(WP_REST_Request $request)
    {
        try {
            $user_email_encoded = $request->get_param('slug');
            $user_email = urldecode($user_email_encoded);
            $user = get_user_by('email', $user_email);
            $client_id = $user->id;

            $databaseClient = $this->database_users->getUser($client_id);
            $stripeCustomer = $this->stripe_customers->getCustomer($databaseClient['stripe_customer_id']);

            return rest_ensure_response($stripeCustomer);
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

    public function update_client(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');
            $tax_id = $request['tax_id'];
            $client_id = $request['client_id'];
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
            $test_clock = $request['test_clock'];

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
            } else {
                $shipping = '';
            }

            $tax_id_data = array(
                'type' => $tax_id_type,
                'value' => $tax_id
            );

            if (!empty($company_name)) {
                $name = $first_name . ' ' . $last_name . ' - ' . $company_name;
            } else {
                $name = $first_name . ' ' . $last_name;
            }

            $updated_client = $this->database_users->updateUser($stripe_customer_id, $email, $phone, $first_name, $last_name,  $company_name,);

            $updated_client = $this->stripe_customers->updateCustomer(
                $stripe_customer_id,
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
                $test_clock,
                $metadata
            );

            return rest_ensure_response($updated_client);
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
