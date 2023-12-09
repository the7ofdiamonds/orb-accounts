<?php

namespace ORB\Accounts\API\Stripe;

class StripeTaxIDs
{
    private $stripeClient;

    public function __construct($stripeClient)
    {
        $this->stripeClient = $stripeClient;
    }

    function createTaxID($stripe_customer_id, $tax_id_data)
    {
        return $this->stripeClient->customers->createTaxId(
            $stripe_customer_id,
            $tax_id_data
        );
    }

    function getTaxID($stripe_customer_id, $stripe_tax_id)
    {
        return $this->stripeClient->customers->retrieveTaxId(
            $stripe_customer_id,
            $stripe_tax_id,
            []
        );
    }

    function getTaxIDs($stripe_customer_id, $limit = 1)
    {
        return $this->stripeClient->customers->allTaxIds($stripe_customer_id, ['limit' => $limit]);
    }

    function deleteTaxID($stripe_customer_id, $stripe_tax_id)
    {
        return $this->stripeClient->customers->deleteTaxId(
            $stripe_customer_id,
            $stripe_tax_id,
            []
        );
    }
}
