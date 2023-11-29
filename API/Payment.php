<?php

namespace ORB\Accounts\API;

use WP_REST_Request;

class Payment
{
    private $stripe_payment_intents;
    private $stripe_payment_methods;

    public function __construct($stripe_payment_intents, $stripe_payment_methods)
    {
        $this->stripe_payment_intents = $stripe_payment_intents;
        $this->stripe_payment_methods = $stripe_payment_methods;
    }

    public function create_payment_intent(WP_REST_Request $request)
    {
        $email = $request['email'];
        $amount = $request['amount'];
        $automatic_payment_methods = $request['automatic_payment_methods'];
        $currency = $request['currency'];
        $invoice_id = $request['invoice_id'];

        $payment_intent = $this->stripe_payment_intents->createPaymentIntent($amount, $automatic_payment_methods, $currency, $email, $invoice_id);

        return rest_ensure_response($payment_intent);
    }

    public function get_payment_intent(WP_REST_Request $request)
    {
        $payment_intent_id = $request->get_param('slug');

        $payment_intent = $this->stripe_payment_intents->getPaymentIntent($payment_intent_id);

        return rest_ensure_response($payment_intent);
    }

    public function update_payment_intent(WP_REST_Request $request)
    {
        $stripe_payment_intent_id = $request->get_param('slug');
        $email = $request['email'];
        $invoice_id = $request['invoice_id'];

        $payment_intent = $this->stripe_payment_intents->updatePaymentIntent($stripe_payment_intent_id, $email, $invoice_id);

        return rest_ensure_response($payment_intent);
    }

    public function get_payment_method(WP_REST_Request $request)
    {
        $payment_method_id = $request->get_param('slug');

        $payment_method = $this->stripe_payment_methods->getPaymentMethod($payment_method_id);

        return rest_ensure_response($payment_method);
    }
}
