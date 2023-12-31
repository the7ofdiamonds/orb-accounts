<?php

namespace ORB\Accounts\Assets\CSS\Customizer;

class Shadow
{
    public function __construct()
    {
    }

    function orb_accounts_shadow_section($wp_customize)
    {
        $wp_customize->add_section(
            'orb_accounts_shadow_settings',
            array(
                'priority'       => 9,
                'capability'     => 'edit_theme_options',
                'theme_supports' => '',
                'title'          => __('Shadows', 'orb-accounts'),
                'description'    =>  __('Shadow Settings', 'orb-accounts'),
                'panel'  => 'orb_accounts_settings',
            )
        );

        $wp_customize->add_setting('orb_accounts_card_shadow', array(
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control(
            'orb_accounts_card_shadow',
            array(
                'type' => 'input',
                'label' => __('Card Box Shadow', 'orb-accounts'),
                'section' => 'orb_accounts_shadow_settings',
            )
        );

        $wp_customize->add_setting('orb_accounts_button_shadow', array(
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control(
            'orb_accounts_button_shadow',
            array(
                'type' => 'input',
                'label' => __('Button Box Shadow', 'orb-accounts'),
                'section' => 'orb_accounts_shadow_settings',
            )
        );
    }

    function load_css()
    {
?>
        <style>
            :root {
               --orb-accounts-card-shadow: <?php
                                                        if (empty(get_theme_mod('orb_accounts_card_shadow'))) {
                                                            echo esc_html('0 0 0.5em rgba(0, 0, 0, 0.85)');
                                                        } else {
                                                            error_log(get_theme_mod('orb_accounts_card_shadow'));
                                                            echo esc_html(get_theme_mod('orb_accounts_card_shadow'));
                                                        } ?>;
               --orb-accounts-btn-shadow: <?php
                                                    if (empty(get_theme_mod('orb_accounts_button_shadow'))) {
                                                        echo esc_html('0 0 0.5em rgba(0, 0, 0, 0.85)');
                                                    } else {
                                                        echo esc_html(get_theme_mod('orb_accounts_button_shadow'));
                                                    } ?>;
               --orb-accounts-btn-shadow-hover: <?php
                                                    if (empty(get_theme_mod('orb_accounts_button_shadow_hover'))) {
                                                        echo esc_html('unset');
                                                    } else {
                                                        echo esc_html(get_theme_mod('orb_accounts_button_shadow_hover'));
                                                    } ?>;
            }
        </style>
<?php
    }
}
