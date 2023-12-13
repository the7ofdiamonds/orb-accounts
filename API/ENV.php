<?php

namespace ORB\Accounts\API;

use Exception;

use ORB\Accounts\ENV\EnvironmentVariables;

class ENV
{
    private $env_var;

    public function __construct()
    {
        $this->env_var = new EnvironmentVariables;
    }

    public function get_stripe_secret_key()
    {
        try {
            return rest_ensure_response($this->env_var->getStripeSecretKey());
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
