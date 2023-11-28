<?php

namespace ORB\Accounts\Pages;

class Pages
{
    public $front_page_react;
    public $custom_pages_list;
    public $protected_pages_list;
    public $pages_list;
    public $pages;
    public $page_titles;

    public function __construct()
    {
        $this->front_page_react = [];

        $this->custom_pages_list = [];

        $this->protected_pages_list = [
            [
                'regex' => '#^/billing/invoice/(?P<slug>[a-zA-Z0-9-_]+)#',
                'file_name' => 'BillingInvoice',
            ],
            [
                'regex' => '#^/billing/invoices/$#',
                'file_name' => 'BillingInvoices',
            ],
            [
                'regex' => '#^/billing/payment/(?P<slug>[a-zA-Z0-9-_]+)#',
                'file_name' => 'BillingPayment',
            ],
            [
                'regex' => '#^/billing/payment/card/(?P<slug>[a-zA-Z0-9-_]+)#',
                'file_name' => 'BillingPaymentCard',
            ],
            [
                'regex' => '#^/billing/payment/wallet/(?P<slug>[a-zA-Z0-9-_]+)#',
                'file_name' => 'BillingPaymentWallet',
            ],
            [
                'regex' => '#^/billing/quote/(?P<slug>[a-zA-Z0-9-_]+)#',
                'file_name' => 'BillingQuote',
            ],
            [
                'regex' => '#^/billing/quotes#',
                'file_name' => 'BillingQuotes',
            ],
            [
                'regex' => '#^/billing/receipt/(?P<slug>[a-zA-Z0-9-_]+)#',
                'file_name' => 'BillingReceipt',
            ],
            [
                'regex' => '#^/billing/receipts#',
                'file_name' => 'BillingReceipts',
            ],
            [
                'regex' => '#^/billing/$#',
                'file_name' => 'Billing',
            ],
            [
                'regex' => '#^/client#',
                'file_name' => 'Client',
            ],
            [
                'regex' => '#^/client/selections#',
                'file_name' => 'ClientSelections',
            ],
            [
                'regex' => '#^/client/start#',
                'file_name' => 'ClientStart',
            ]
        ];

        $this->pages_list = [];

        $this->page_titles = [
            ...$this->custom_pages_list,
            ...$this->protected_pages_list,
            ...$this->pages_list,
        ];

        $this->pages = [];
    }

    function add_pages()
    {
        global $wpdb;

        foreach ($this->pages as $page) {
            if (!empty($page['title'])) {
                $page_exists = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type = 'page'", $page['title']));

                if (!$page_exists) {
                    $page_data = array(
                        'post_title'   => $page['title'],
                        'post_type'    => 'page',
                        'post_content' => '',
                        'post_status'  => 'publish',
                    );

                    wp_insert_post($page_data);

                    error_log($page['title'] . ' page added.');
                }
            }
        }
    }

    function is_user_logged_in()
    {
        return isset($_SESSION['idToken']);
    }
}
