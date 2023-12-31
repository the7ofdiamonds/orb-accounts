<?php
namespace ORB\Accounts\Shortcodes;

class Shortcodes
{

    public function __construct()
    {
        add_shortcode('orb-products-services-frontpage', [$this, 'orb_products_services_frontpage_shortcode']);
        add_shortcode('orb-services-hero', [$this, 'orb_services_hero_shortcode']);
        add_shortcode('orb-services', [$this, 'orb_services_shortcode']);
        add_shortcode('orb-products-hero', [$this, 'orb_products_hero_shortcode']);
        add_shortcode('orb-products', [$this, 'orb_products_shortcode']);

        // Testimonials
    }

    function orb_products_services_frontpage_shortcode()
    {
        include ORB_ACCOUNTS . 'includes/react.php';
    }

    function orb_services_hero_shortcode()
    {
        include ORB_ACCOUNTS . 'includes/services-hero.php';
    }

    function orb_services_shortcode()
    {
        include ORB_ACCOUNTS . 'includes/react.php';
    }

    function orb_products_hero_shortcode()
    {
        include ORB_ACCOUNTS . 'includes/products-hero.php';
    }

    function orb_products_shortcode()
    {
        include ORB_ACCOUNTS . 'includes/react.php';
    }
}
