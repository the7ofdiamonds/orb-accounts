<?php

namespace ORB\Accounts\API;

use ORB\Accounts\Enums\Enums as EnumsClass;

class Enums
{
    private $enums;

    public function __construct()
    {
        $this->enums = new EnumsClass;
    }

    public function get_countries(){
        return $this->enums->get_countries();
    }

    public function get_tax_id_info(){
        return $this->enums->get_tax_id_info();
    }
}
