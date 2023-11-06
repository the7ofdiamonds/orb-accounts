<?php

namespace ORB\Accounts\API\Stripe;

use ORB\Accounts\API\Stripe\StripeQuote;
use ORB\Accounts\API\Stripe\StripeInvoice;
use ORB\Accounts\API\Stripe\StripePaymentIntents;
use ORB\Accounts\API\Stripe\StripeCharges;
use ORB\Accounts\API\Stripe\StripePaymentMethods;
use ORB\Accounts\API\Stripe\StripeProducts;
use ORB\Accounts\API\Stripe\StripePrices;
use ORB\Accounts\API\Stripe\StripeCustomers;


use ORB\Accounts\API\Service;
use ORB\Accounts\API\Services;
use ORB\Accounts\API\Product;
use ORB\Accounts\API\Products;
use ORB\Accounts\API\Clients;
use ORB\Accounts\API\Customers;
use ORB\Accounts\API\Quote;
use ORB\Accounts\API\Invoice;
use ORB\Accounts\API\Payment;
use ORB\Accounts\API\Receipt;

use ORB\Accounts\Post_Types\Products\Products as PT_Products;
use ORB\Accounts\Post_Types\Services\Services as PT_Services;

use PHPMailer\PHPMailer\PHPMailer;

class Stripe
{
    public function __construct($stripeClient)
    {
        // new PT_Products($stripeClient);
        // new PT_Services($stripeClient);

        $stripe_payment_intent = new StripePaymentIntents($stripeClient);
        $stripe_charges = new StripeCharges($stripeClient);
        $stripe_payment_methods = new StripePaymentMethods($stripeClient);
        $stripe_products = new StripeProducts($stripeClient);
        $stripe_prices = new StripePrices($stripeClient);

        new Payment($stripe_payment_intent, $stripe_payment_methods);

        // new Service($stripe_products, $stripe_prices);
        // new Services($stripe_products, $stripe_prices);
        // new Product($stripe_products, $stripe_prices);
        // new Products($stripe_products, $stripe_prices);
    }
}
