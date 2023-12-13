<?php

namespace ORB\Accounts\ENV;

use Exception;

use Dotenv\Dotenv;

class EnvironmentVariables
{
    private $lines;
    public $stripeSecretKey;

    public function __construct()
    {
        $dotenv = Dotenv::createImmutable(ORB_ACCOUNTS);
        $dotenv->load(__DIR__);
        $envFilePath = ORB_ACCOUNTS . '.env';
        $envContents = file_get_contents($envFilePath);
        $this->lines = explode("\n", $envContents);
    }

    function getStripeSecretKey()
    {
        $this->stripeSecretKey = null;

        foreach ($this->lines as $line) {
            $parts = explode('=', $line, 2);
            if (count($parts) === 2 && $parts[0] === 'STRIPE_SECRET_KEY') {
                $this->stripeSecretKey = trim($parts[1]);
                break;
            }
        }

        if ($this->stripeSecretKey === null) {   
            throw new Exception('Stripe Secret Key is required.', 404);     
        }

        return $this->stripeSecretKey;
    }
}
