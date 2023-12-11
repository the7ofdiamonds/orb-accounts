<?php

namespace ORB\Accounts\Enums;

class Enums
{

    public function __construct()
    {
    }

    public function get_countries()
    {
        $filePath = ORB_ACCOUNTS . 'Enums/Countries.json';
        $jsonContent = file_get_contents($filePath);
        $countries = json_decode($jsonContent, true);

        return $countries;
    }

    public function get_tax_id_info()
    {
        $filePath = ORB_ACCOUNTS . 'Enums/TaxIDInfo.json';
        $jsonContent = file_get_contents($filePath);
        $tax_id_info = json_decode($jsonContent, true);

        return $tax_id_info;
    }
}
