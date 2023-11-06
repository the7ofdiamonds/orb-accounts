<?php

namespace ORB\Accounts\Pages;

class Pages
{
    public $front_page_react;
    public $pages;
    public $protected_pages;
    public $page_titles;

    public function __construct()
    {
        $this->front_page_react = [
        ];

        $this->pages = [
        ];

        $this->protected_pages = [
            'billing',
            'billing/invoice',
            'billing/invoices',
            'billing/payment',
            'billing/payment/card',
            'billing/payment/wallet',
            'billing/quote',
            'billing/quotes',
            'billing/receipt',
            'billing/receipts',
            'client',
            'client/selections',
            'client/start'
        ];

        $this->page_titles = [
            ...$this->pages,
            ...$this->protected_pages
        ];

        add_action('init', [$this, 'react_rewrite_rules']);

        add_filter('query_vars', [$this, 'add_query_vars']);
    }

    function react_rewrite_rules()
    {
        if (is_array($this->page_titles) && count($this->page_titles) > 0) {

            foreach ($this->page_titles as $page_title) {
                $url = explode('/', $page_title);
                $segment = count($url) - 1;

                if (isset($url[$segment])) {
                    add_rewrite_rule('^' . $page_title, 'index.php?' . $segment . '=$1', 'top');
                }
            }
        }
    }

    function add_query_vars($query_vars)
    {
        if (is_array($this->page_titles) && count($this->page_titles) > 0) {

            foreach ($this->page_titles as $page_title) {
                $url = explode('/', $page_title);
                $segment = count($url) - 1;

                $query_vars[] = $url[$segment];
            }

            return $query_vars;
        }
    }

    function is_user_logged_in()
    {
        return isset($_SESSION['idToken']);
    }
}
