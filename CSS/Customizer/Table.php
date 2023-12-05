<?php

namespace ORB\Accounts\CSS\Customizer;

class Table
{
    public function __construct()
    {
        add_action('customize_register', [$this, 'orb_accounts_table_section']);
        add_action('wp_head', [$this, 'load_css']);
    }

    function orb_accounts_table_section($wp_customize)
    {
        $wp_customize->add_section(
            'orb_accounts_table_settings',
            array(
                'priority'       => 9,
                'capability'     => 'edit_theme_options',
                'theme_supports' => '',
                'title'          => __('Table', 'orb-accounts'),
                'description'    =>  __('Table Settings', 'orb-accounts'),
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

    function calculate_lightness($hue, $lightness)
    {
        if ($hue == 0 && $lightness == 0) {
            return 100;
        }

        if ($hue == 0 && $lightness == 100) {
            return 0;
        }

        if ($hue >= 40 || $hue <= 180) {
            if (10 > ($lightness - 40)) {
                return 10;
            }

            return $lightness - 40;
        }

        if ($hue < 40 || $hue > 180) {
            if (90 < ($lightness + 40)) {
                return 90;
            }

            return $lightness + 40;
        }
    }

    function load_css()
    {
?>
        <style>
            :root {
                --orb-accounts-table-color: <?php
                                            $h = !empty(get_theme_mod('orb_accounts_table_color_hue')) ? get_theme_mod('orb_accounts_table_color_hue') : 0;
                                            $s = !empty(get_theme_mod('orb_accounts_table_color_saturation')) ? get_theme_mod('orb_accounts_table_color_saturation') : 0;
                                            $l = !empty(get_theme_mod('orb_accounts_table_color_lightness')) ? get_theme_mod('orb_accounts_table_color_lightness') : 0;

                                            echo "hsl({$h}, {$s}%, {$l}%)";
                                            ?>;

                --orb-accounts-table-color-text: <?php
                                                    $hue = !empty(get_theme_mod('orb_accounts_table_color_hue')) ? get_theme_mod('orb_accounts_table_color_hue') : 0;
                                                    $lightness = !empty(get_theme_mod('orb_accounts_table_color_lightness')) ? get_theme_mod('orb_accounts_table_color_lightness') : 0;

                                                    $l = $this->calculate_lightness($hue, $lightness);

                                                    echo "hsl({$h}, {$s}%, {$l}%)";
                                                    ?>;

                --orb-accounts-table-border-color: <?php
                                                    $hue = !empty(get_theme_mod('orb_accounts_table_color_hue')) ? get_theme_mod('orb_accounts_table_color_hue') : 0;
                                                    $lightness = !empty(get_theme_mod('orb_accounts_table_color_lightness')) ? get_theme_mod('orb_accounts_table_color_lightness') : 0;

                                                    $l = $this->calculate_lightness($hue, $lightness);

                                                    echo "hsl({$h}, {$s}%, {$l}%)";
                                                    ?>;

                --orb-accounts-table-body-color: <?php
                                                    $h = !empty(get_theme_mod('orb_accounts_table_body_color_hue')) ? get_theme_mod('orb_accounts_table_body_color_hue') : 0;
                                                    $s = !empty(get_theme_mod('orb_accounts_table_body_color_saturation')) ? get_theme_mod('orb_accounts_table_body_color_saturation') : 0;
                                                    $l = !empty(get_theme_mod('orb_accounts_table_body_color_lightness')) ? get_theme_mod('orb_accounts_table_body_color_lightness') : 100;

                                                    echo "hsl({$h}, {$s}%, {$l}%)";
                                                    ?>;

                --orb-accounts-table-body-color-text: <?php
                                                        $hue = !empty(get_theme_mod('orb_accounts_table_body_color_hue')) ? get_theme_mod('orb_accounts_table_body_color_hue') : 0;
                                                        $lightness = !empty(get_theme_mod('orb_accounts_table_body_color_lightness')) ? get_theme_mod('orb_accounts_table_body_color_lightness') : 100;

                                                        $l = $this->calculate_lightness($hue, $lightness);

                                                        echo "hsl({$h}, {$s}%, {$l}%)";
                                                        ?>;

                --orb-accounts-table-body-border-color: <?php
                                                        $hue = !empty(get_theme_mod('orb_accounts_table_body_color_hue')) ? get_theme_mod('orb_accounts_table_body_color_hue') : 0;
                                                        $lightness = !empty(get_theme_mod('orb_accounts_table_body_color_lightness')) ? get_theme_mod('orb_accounts_table_body_color_lightness') : 100;

                                                        $l = $this->calculate_lightness($hue, $lightness);

                                                        echo "hsl({$h}, {$s}%, {$l}%)";
                                                        ?>;
            }
        </style>
<?php
    }
}
