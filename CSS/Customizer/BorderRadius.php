<?php

namespace ORB\Accounts\CSS\Customizer;

class BorderRadius
{
    public function __construct()
    {
        add_action('customize_register', [$this, 'orb_accounts_border_radius_section']);
        add_action('wp_head', [$this, 'load_css']);
    }

    function orb_accounts_border_radius_section($wp_customize)
    {
        $wp_customize->add_section(
            'orb_accounts_border_radius_settings',
            array(
                'priority'       => 9,
                'capability'     => 'edit_theme_options',
                'theme_supports' => '',
                'title'          => __('Border Radius', 'orb-accounts'),
                'description'    =>  __('Border Radius Settings', 'orb-accounts'),
                'panel'  => 'orb_accounts_settings',
            )
        );

        $wp_customize->add_setting('orb_accounts_border_radius', array(
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control(
            'orb_accounts_border_radius',
            array(
                'type' => 'input',
                'label' => __('Border Radius', 'orb-accounts'),
                'section' => 'orb_accounts_border_radius_settings',
            )
        );

        $wp_customize->add_setting('orb_accounts_border_radius_hover', array(
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control(
            'orb_accounts_border_radius_hover',
            array(
                'type' => 'input',
                'label' => __('Border Radius Hover', 'orb-accounts'),
                'section' => 'orb_accounts_border_radius_settings',
            )
        );
    }

    function load_css()
    {
?>
        <style>
            :root {
                --orb-accounts-border-radius: <?php
                                                        if (empty(get_theme_mod('orb_accounts_border_radius'))) {
                                                            echo esc_html('0.5em');
                                                        } else {
                                                            echo esc_html(get_theme_mod('orb_accounts_border_radius'));
                                                        } ?>;
                --orb-accounts-border-radius-hover: <?php
                                                                if (empty(get_theme_mod('orb_accounts_border_radius_hover'))) {
                                                                    echo esc_html('0.25em');
                                                                } else {
                                                                    echo esc_html(get_theme_mod('orb_accounts_border_radius_hover'));
                                                                } ?>;
            }
        </style>
<?php
    }
}
