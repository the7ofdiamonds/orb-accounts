<?php

namespace ORB\Accounts\Database;

use Exception;

class DatabaseUsers
{
    private $wpdb;
    private $table_name;

    public function __construct()
    {
        global $wpdb;
        $this->wpdb = $wpdb;
        $this->table_name = 'orb_users';
    }

    public function saveUser($user_id, $stripe_customer_id, $email, $phone, $first_name, $last_name)
    {
        $result = $this->wpdb->insert(
            $this->table_name,
            [
                'user_id' => $user_id,
                'stripe_customer_id' => $stripe_customer_id,
                'email' => $email,
                'phone' => $phone,
                'first_name' => $first_name,
                'last_name' => $last_name,
            ]
        );

        if (!$result || $this->wpdb->last_error) {
            throw new Exception($this->wpdb->last_error, 400);
        }

        return $this->wpdb->insert_id;
    }

    public function getUser($user_id)
    {
        $user = $this->wpdb->get_row(
            $this->wpdb->prepare(
                "SELECT * FROM {$this->table_name} WHERE user_id = %d",
                $user_id
            )
        );

        if (empty($user)) {
            throw new Exception('Client not found', 404);
        }

        $user_data = [
            'id' => $user->id,
            'user_id' => $user->user_id,
            'stripe_customer_id' => $user->stripe_customer_id,
            'email' => $user->email,
            'phone' => $user->phone,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name
        ];

        return $user_data;
    }

    public function updateUser($stripe_customer_id, $email, $phone, $first_name, $last_name)
    {

        $data = array(
            'email' => $email,
            'phone' => $phone,
            'first_name' => $first_name,
            'last_name' => $last_name
        );

        $where = array(
            'stripe_customer_id' => $stripe_customer_id,
        );

        if (!empty($data)) {
            $updated = $this->wpdb->update($this->table_name, $data, $where);
        }

        if ($this->wpdb->last_error) {
            throw new Exception($this->wpdb->last_error, 400);
        }

        return $updated;
    }
}
