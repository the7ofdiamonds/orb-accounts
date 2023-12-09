<?php

namespace ORB\Accounts\API;

use Exception;

use WP_REST_Request;

use ORB\Accounts\API\Stripe\StripeCustomers;
use ORB\Accounts\API\Stripe\StripeTaxIDs;
use ORB\Accounts\Database\DatabaseUsers;

class Users
{
    private $stripe_customers;
    private $database_users;
    private $stripe_taxids;

    public function __construct($stripeClient)
    {
        $this->stripe_customers = new StripeCustomers($stripeClient);
        $this->database_users = new DatabaseUsers();
        $this->stripe_taxids = new StripeTaxIDs($stripeClient);
    }

    public function add_user(WP_REST_Request $request)
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
            $shipping_first_name = $request['shipping_first_name'];
            $shipping_last_name = $request['shipping_last_name'];
            $shipping_phone = $request['shipping_phone'];
            $shipping_address_line_1 = $request['shipping_address_line_1'];
            $shipping_address_line_2 = $request['shipping_address_line_2'];
            $shipping_city = $request['shipping_city'];
            $shipping_state = $request['shipping_state'];
            $shipping_zipcode = $request['shipping_zipcode'];
            $shipping_country = $request['shipping_country'];
            $company_name = $request['company_name'];
            $tax_exempt = $request['tax_exempt'];
            $tax_id_type = $request['tax_id_type'];
            $tax_id = $request['tax_id'];
            // $invoice_settings = $request['invoice_settings'];
            // $preferred_locales = $request['preferred_locales'];

            $name = $first_name . ' ' . $last_name;
            $shipping_name = $shipping_first_name . ' ' . $shipping_last_name;

            $address = [
                'line1' => $address_line_1,
                'line2' => $address_line_2,
                'city' => $city,
                'state' => $state,
                'postal_code' => $zipcode,
                'country' => $country
            ];

            $shipping = [
                'address' => [
                    'line1' => $shipping_address_line_1,
                    'line2' => $shipping_address_line_2,
                    'city' => $shipping_city,
                    'state' => $shipping_state,
                    'postal_code' => $shipping_zipcode,
                    'country' => $shipping_country
                ],
                'name' => $shipping_name,
                'phone' => $shipping_phone
            ];

            $user = get_user_by('email', $email);

            if (is_wp_error($user)) {
                throw new Exception($user->get_error_message(), 400);
            }

            $user_id = $user->ID;

            if (!empty($first_name)) {
                update_user_meta($user_id, 'first_name', sanitize_text_field($first_name));
            }

            if (!empty($last_name)) {
                update_user_meta($user_id, 'last_name', sanitize_text_field($last_name));
            }

            if (!empty($first_name) && !empty($last_name)) {
                $name = $first_name . ' ' . $last_name;
            }

            $metadata = [
                'user_id' => $user_id,
                'company_name' => $company_name
            ];

            $tax_id_data = [
                'type' => $tax_id_type,
                'value' => $tax_id
            ];

            $user = $this->stripe_customers->createCustomer(
                $email,
                $phone,
                $name,
                $address,
                $shipping,
                $metadata,
                $tax_exempt,
                $tax_id_data,
                // $invoice_settings,
                // $preferred_locales
            );

            $user_id = $this->database_users->saveUser($user_id, $user->id, $email, $phone, $first_name, $last_name);

            $data = [
                'user_id' => $user_id,
                'stripe_customer_id' => $user->id
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

    public function get_user(WP_REST_Request $request)
    {
        try {
            $slug = $request->get_param('slug');
            $user_email = urldecode($slug);
            $user = get_user_by('email', $user_email);

            $databaseUser = $this->database_users->getUser($user->id);
            $stripeCustomer = $this->stripe_customers->getCustomer($databaseUser['stripe_customer_id']);

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

    public function update_user(WP_REST_Request $request)
    {
        try {
            $stripe_customer_id = $request->get_param('slug');
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
            $shipping_first_name = $request['shipping_first_name'];
            $shipping_last_name = $request['shipping_last_name'];
            $shipping_phone = $request['shipping_phone'];
            $shipping_address_line_1 = $request['shipping_address_line_1'];
            $shipping_address_line_2 = $request['shipping_address_line_2'];
            $shipping_city = $request['shipping_city'];
            $shipping_state = $request['shipping_state'];
            $shipping_zipcode = $request['shipping_zipcode'];
            $shipping_country = $request['shipping_country'];
            $company_name = $request['company_name'];
            $tax_exempt = $request['tax_exempt'];
            // $invoice_settings = $request['invoice_settings'];
            // $preferred_locales = $request['preferred_locales'];

            $name = $first_name . ' ' . $last_name;
            $shipping_name = $shipping_first_name . ' ' . $shipping_last_name;

            $address = [
                'line1' => $address_line_1,
                'line2' => $address_line_2,
                'city' => $city,
                'state' => $state,
                'postal_code' => $zipcode,
                'country' => $country
            ];

            $shipping = [
                'address' => [
                    'line1' => $shipping_address_line_1,
                    'line2' => $shipping_address_line_2,
                    'city' => $shipping_city,
                    'state' => $shipping_state,
                    'postal_code' => $shipping_zipcode,
                    'country' => $shipping_country
                ],
                'name' => $shipping_name,
                'phone' => $shipping_phone
            ];

            $user = get_user_by('email', $email);

            $updated_user = $this->database_users->updateUser($stripe_customer_id, $email, $phone, $first_name, $last_name);

            $databaseUser = $this->database_users->getUser($user->id);

            $metadata = [
                'user_id' => $databaseUser['user_id'],
                'company_name' => $company_name
            ];

            $updated_user = $this->stripe_customers->updateCustomer(
                $stripe_customer_id,
                $email,
                $phone,
                $name,
                $address,
                $shipping,
                $metadata,
                $tax_exempt,
                // $invoice_settings,
                // $preferred_locales,
            );

            return rest_ensure_response($updated_user);
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

    public function add_user_tax_id(WP_REST_Request $request){
        $stripe_customer_id = $request->get_param('slug');
        $tax_id_type = $request['tax_id_type'];
        $tax_id = $request['tax_id'];

        $tax_id_data = [
            'type' => $tax_id_type,
            'value' => $tax_id
        ];

        return $this->stripe_taxids->createTaxID($stripe_customer_id, $tax_id_data);
    }

    public function delete_user_tax_id(WP_REST_Request $request){
        $stripe_customer_id = $request->get_param('slug');
        $stripe_tax_id = $request['stripe_tax_id'];

        return $this->stripe_taxids->deleteTaxID($stripe_customer_id, $stripe_tax_id);
    }
}
