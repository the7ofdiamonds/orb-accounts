<?php

/**
 * @package ORB Accounts
 */
/*
Plugin Name: ORB Accounts
Plugin URI: 
Description: Accounts
Version: 1.0.0
Author: THE7OFDIAMONDS.TECH
Author URI: http://THE7OFDIAMONDS.TECH
License: 
Text Domain: seven-tech
*/

namespace ORB\Accounts;

require_once 'vendor/autoload.php';

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
define('ORB_ACCOUNTS', WP_PLUGIN_DIR . '/orb-accounts/');
define('ORB_ACCOUNTS_URL', WP_PLUGIN_URL . '/orb-accounts/');

use ORB\Accounts\Admin\Admin;
use ORB\Accounts\API\API;
use ORB\Accounts\Assets\CSS\CSS;
use ORB\Accounts\Assets\CSS\Customizer\Customizer;
use ORB\Accounts\Assets\CSS\Customizer\BorderRadius;
use ORB\Accounts\Assets\CSS\Customizer\Color;
use ORB\Accounts\Assets\CSS\Customizer\Shadow;
use ORB\Accounts\Assets\CSS\Customizer\StatusBar;
use ORB\Accounts\Assets\CSS\Customizer\Table;
use ORB\Accounts\Assets\JS\JS;
use ORB\Accounts\Database\Database;
use ORB\Accounts\Pages\Pages;
use ORB\Accounts\Post_Types\Post_Types;
use ORB\Accounts\Roles\Roles;
use ORB\Accounts\Router\Router;
use ORB\Accounts\Shortcodes\Shortcodes;
use ORB\Accounts\Taxonomies\Taxonomies;
use ORB\Accounts\Templates\Templates;

class ORB_Accounts
{
    public $pages;
    public $plugin;
    public $css;
    public $js;
    public $posttypes;
    public $router;
    public $templates;

    public function __construct()
    {
        // $this->plugin = plugin_basename(__FILE__);
        // add_filter("plugin_action_links_$this->plugin", [$this, 'settings_link']);

        add_action('admin_init', function () {
            new Admin;
        });

        add_action('rest_api_init', function () {
            new API();
            (new API())->allow_cors_headers();
        });

        $css = new CSS;
        $js = new JS;
        $this->pages = new Pages;
        $posttypes = new Post_Types;
        $taxonomies = new Taxonomies;
        $templates = new Templates(
            $css,
            $js,
        );
        $this->router = new Router(
            $this->pages,
            $posttypes,
            $taxonomies,
            $templates
        );

        add_action('init', function () use ($posttypes, $taxonomies) {
            $posttypes->custom_post_types();
            $taxonomies->custom_taxonomy();
            $this->router->load_page();
            $this->router->react_rewrite_rules();
            new Shortcodes;
        });

        // Add a logo to quotes, invoices and receipts
        // Change color scheme
        add_action('customize_register', function ($wp_customize) {
            (new Customizer)->register_customizer_panel($wp_customize);
            (new BorderRadius)->orb_accounts_border_radius_section($wp_customize);
            (new Color)->orb_accounts_color_section($wp_customize);
            (new Shadow)->orb_accounts_shadow_section($wp_customize);
            (new StatusBar)->orb_accounts_status_bar_section($wp_customize);
            (new Table)->orb_accounts_table_section($wp_customize);
        });
    }

    public function activate()
    {
        (new Database)->createTables();
        $this->pages->add_pages();
        // (new Roles)->add_roles();
        $this->router->react_rewrite_rules();
        flush_rewrite_rules();
    }

    public function settings_link($links)
    {
        $settings_link = '<a href="' . admin_url('admin.php?page=orb_services') . '">Settings</a>';
        array_push($links, $settings_link);

        return $links;
    }
}

$orb_services = new ORB_Accounts();
register_activation_hook(__FILE__, [$orb_services, 'activate']);
// register_deactivation_hook( __FILE__, [ $thfw, 'deactivate' ]);