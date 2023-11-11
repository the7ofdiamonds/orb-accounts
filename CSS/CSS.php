<?php

namespace ORB\Accounts\CSS;

use ORB\Accounts\Pages\Pages;
use ORB\Accounts\Post_Types\Post_Types;
use ORB\Accounts\CSS\Customizer\Customizer;

class CSS
{
    private $handle_prefix;
    private $dir;
    private $dirURL;
    private $cssFolderPath;
    private $cssFolderPathURL;
    private $cssFileName;
    private $filePath;
    private $page_titles;
    private $post_types;

    public function __construct()
    {
        add_action('wp_head', [$this, 'load_pages_css']);

        $this->handle_prefix = 'orb_accounts_';
        $this->dir = ORB_ACCOUNTS;
        $this->dirURL = ORB_ACCOUNTS_URL;
        $this->cssFileName = 'orb-accounts.css';

        $this->cssFolderPath = $this->dir . 'CSS/';
        $this->cssFolderPathURL = $this->dirURL . 'CSS/';

        $this->filePath = $this->cssFolderPath . $this->cssFileName;

        $pages = new Pages;
        $posttypes = new Post_Types;

        $this->page_titles = [
            ...$pages->pages,
            ...$pages->protected_pages
        ];
        $this->post_types = $posttypes->post_types;

        new Customizer;
    }

    function load_front_page_css()
    {
        if ($_SERVER['REQUEST_URI'] === '/') {
            if ($this->filePath) {
                wp_register_style($this->handle_prefix . 'css',  $this->cssFolderPathURL . $this->cssFileName, array(), false, 'all');
                wp_enqueue_style($this->handle_prefix . 'css');
            } else {
                error_log('CSS file is missing at :' . $this->filePath);
            }
        }
    }

    function load_pages_css()
    {
        foreach ($this->page_titles as $page) {
            $full_url = explode('/', $page);
            $full_path = explode('/', $_SERVER['REQUEST_URI']);

            $full_url = array_filter($full_url, function ($value) {
                return $value !== "";
            });

            $full_path = array_filter($full_path, function ($value) {
                return $value !== "";
            });

            $full_url = array_values($full_url);
            $full_path = array_values($full_path);

            $differences = array_diff($full_url, $full_path);

            if (empty($differences)) {
                if ($this->filePath) {
                    wp_register_style($this->handle_prefix . 'css',  $this->cssFolderPathURL . $this->cssFileName, array(), false, 'all');
                    wp_enqueue_style($this->handle_prefix . 'css');
                } else {
                    error_log('CSS file is missing at :' . $this->filePath);
                }
            }
        }
    }

    function load_post_types_css()
    {
        foreach ($this->post_types as $post_type) {
            if (is_post_type_archive($post_type['name']) || is_singular($post_type['name'])) {
                if ($this->filePath) {
                    wp_register_style($this->handle_prefix . 'css',  $this->cssFolderPathURL . $this->cssFileName, array(), false, 'all');
                    wp_enqueue_style($this->handle_prefix . 'css');
                } else {
                    error_log('CSS file is missing at :' . $this->filePath);
                }
            }
        }
    }
}
