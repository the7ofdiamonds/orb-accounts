<?php

namespace ORB\Accounts\Assets\CSS;

use Exception;

use ORB\Accounts\Assets\CSS\Customizer\BorderRadius;
use ORB\Accounts\Assets\CSS\Customizer\Color;
use ORB\Accounts\Assets\CSS\Customizer\Shadow;
use ORB\Accounts\Assets\CSS\Customizer\StatusBar;
use ORB\Accounts\Assets\CSS\Customizer\Table;

class CSS
{
    private $handle_prefix;
    private $dir;
    private $dirURL;
    private $cssFolderPath;
    private $cssFolderPathURL;
    private $cssFileName;
    private $filePath;

    public function __construct()
    {
        $this->handle_prefix = 'orb_accounts_';
        $this->dir = ORB_ACCOUNTS;
        $this->dirURL = ORB_ACCOUNTS_URL;
        $this->cssFileName = 'orb-accounts.css';

        $this->cssFolderPath = $this->dir . 'Assets/CSS/';
        $this->cssFolderPathURL = $this->dirURL . 'Assets/CSS/';

        $this->filePath = $this->cssFolderPath . $this->cssFileName;
    }

    function load_customization_css()
    {
        (new BorderRadius)->load_css();
        (new Color)->load_css();
        (new Shadow)->load_css();
        (new StatusBar)->load_css();
        (new Table)->load_css();
    }

    function load_front_page_css($section)
    {
        try {
            if (!empty($section)) {
                $this->load_customization_css();

                if ($this->filePath) {
                    wp_register_style($this->handle_prefix . 'css',  $this->cssFolderPathURL . $this->cssFileName, array(), false, 'all');
                    wp_enqueue_style($this->handle_prefix . 'css');
                } else {
                    throw new Exception('CSS file is missing at :' . $this->filePath, 404);
                }
            }
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at load_front_page_css');

            return $response;
        }
    }

    function load_pages_css($page)
    {
        try {
            if (!empty($page)) {
                $this->load_customization_css();

                if ($this->filePath) {
                    wp_register_style($this->handle_prefix . 'css',  $this->cssFolderPathURL . $this->cssFileName, array(), false, 'all');
                    wp_enqueue_style($this->handle_prefix . 'css');
                } else {
                    throw new Exception('CSS file is missing at :' . $this->filePath, 404);
                }
            }
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at load_pages_css');

            return $response;
        }
    }

    function load_taxonomies_css($taxonomy)
    {
        try {
            if (!empty($taxonomy['name']) && is_tax($taxonomy['name'])) {
                $this->load_customization_css();

                if ($this->filePath) {
                    wp_register_style($this->handle_prefix . 'css',  $this->cssFolderPathURL . $this->cssFileName, array(), false, 'all');
                    wp_enqueue_style($this->handle_prefix . 'css');
                } else {
                    throw new Exception('CSS file is missing at :' . $this->filePath, 404);
                }
            }
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at load_taxonomies_css');

            return $response;
        }
    }

    function load_post_types_css($post_type)
    {
        try {
            if (!empty($post_type) && (is_array($post_type) || is_object($post_type)) && (is_post_type_archive($post_type) || is_singular($post_type))) {
                $this->load_customization_css();

                if ($this->filePath) {
                    wp_register_style($this->handle_prefix . 'css',  $this->cssFolderPathURL . $this->cssFileName, array(), false, 'all');
                    wp_enqueue_style($this->handle_prefix . 'css');
                } else {
                    throw new Exception('CSS file is missing at :' . $this->filePath, 404);
                }
            }
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            $errorCode = $e->getCode();
            $response = $errorMessage . ' ' . $errorCode;

            error_log($response . ' at load_post_types_css');

            return $response;
        }
    }
}
