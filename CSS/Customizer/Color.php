<?php

namespace ORB\Accounts\CSS\Customizer;

class Color
{
	public function __construct()
	{
		add_action('customize_register', [$this, 'orb_accounts_color_section']);
	}

	function orb_accounts_color_section($wp_customize)
	{
		$wp_customize->add_section(
			'orb_accounts_color_settings',
			array(
				'priority'       => 9,
				'capability'     => 'edit_theme_options',
				'theme_supports' => '',
				'title'          => __('Colors', 'orb-accounts'),
				'description'    =>  __('Color Settings', 'orb-accounts'),
				'panel'  => 'orb_accounts_settings',
			)
		);

		$wp_customize->add_setting('orb_accounts_primary_color', array(
			'sanitize_callback' => 'sanitize_text_field',
		));

		$wp_customize->add_control(
			'orb_accounts_primary_color',
			array(
				'type' => 'input',
				'label' => __('Primary Color', 'orb-accounts'),
				'section' => 'orb_accounts_color_settings',
			)
		);

		$wp_customize->add_setting('orb_accounts_secondary_color', array(
			'sanitize_callback' => 'sanitize_text_field',
		));

		$wp_customize->add_control(
			'orb_accounts_secondary_color',
			array(
				'type' => 'input',
				'label' => __('Secondary Color', 'orb-accounts'),
				'section' => 'orb_accounts_color_settings',
			)
		);

		$wp_customize->add_setting('orb_accounts_tertiary_color', array(
			'sanitize_callback' => 'sanitize_text_field',
		));

		$wp_customize->add_control(
			'orb_accounts_tertiary_color',
			array(
				'type' => 'input',
				'label' => __('Tertiary Color', 'orb-accounts'),
				'section' => 'orb_accounts_color_settings',
			)
		);

		$wp_customize->add_setting('orb_accounts_quaternary_color', array(
			'sanitize_callback' => 'sanitize_text_field',
		));

		$wp_customize->add_control(
			'orb_accounts_quaternary_color',
			array(
				'type' => 'input',
				'label' => __('Quaternary Color', 'orb-accounts'),
				'section' => 'orb_accounts_color_settings',
			)
		);

		$wp_customize->add_setting('orb_accounts_btn_color', array(
			'sanitize_callback' => 'sanitize_text_field',
		));

		$wp_customize->add_control(
			'orb_accounts_btn_color',
			array(
				'type' => 'input',
				'label' => __('Button Color', 'orb-accounts'),
				'section' => 'orb_accounts_color_settings',
			)
		);

		$wp_customize->add_setting('orb_accounts_btn_font_color', array(
			'sanitize_callback' => 'sanitize_text_field',
		));

		$wp_customize->add_control(
			'orb_accounts_btn_font_color',
			array(
				'type' => 'input',
				'label' => __('Button Text Color', 'orb-accounts'),
				'section' => 'orb_accounts_color_settings',
			)
		);
	}

	function load_css()
	{
?>
		<style>
			:root {
				--orb-accounts-color-primary: <?php
												$h = !empty(get_theme_mod('orb_accounts_primary_color_hue')) ? get_theme_mod('orb_accounts_primary_color_hue') : 0;
												$s = !empty(get_theme_mod('orb_accounts_primary_color_saturation')) ? get_theme_mod('orb_accounts_primary_color_saturation') : 0;
												$l = !empty(get_theme_mod('orb_accounts_primary_color_lightness')) ? get_theme_mod('orb_accounts_primary_color_lightness') : 100;

												echo "hsl({$h}, {$s}%, {$l}%)";
												?>;

				--orb-accounts-color-secondary: <?php
												$h = !empty(get_theme_mod('orb_accounts_secondary_color_hue')) ? get_theme_mod('orb_accounts_secondary_color_hue') : 0;
												$s = !empty(get_theme_mod('orb_accounts_secondary_color_saturation')) ? get_theme_mod('orb_accounts_secondary_color_saturation') : 0;
												$l = !empty(get_theme_mod('orb_accounts_secondary_color_lightness')) ? get_theme_mod('orb_accounts_secondary_color_lightness') : 0;

												echo "hsl({$h}, {$s}%, {$l}%)";
												?>;

				--orb-accounts-color-tertiary: <?php
												$h = !empty(get_theme_mod('orb_accounts_tertiary_color_hue')) ? get_theme_mod('orb_accounts_tertiary_color_hue') : 0;
												$s = !empty(get_theme_mod('orb_accounts_tertiary_color_saturation')) ? get_theme_mod('orb_accounts_tertiary_color_saturation') : 100;
												$l = !empty(get_theme_mod('orb_accounts_tertiary_color_lightness')) ? get_theme_mod('orb_accounts_tertiary_color_lightness') : 50;

												echo "hsl({$h}, {$s}%, {$l}%)";
												?>;

				--orb-accounts-color-quaternary: <?php
													$h = !empty(get_theme_mod('orb_accounts_quaternary_color_hue')) ? get_theme_mod('orb_accounts_quaternary_color_hue') : 120;
													$s = !empty(get_theme_mod('orb_accounts_quaternary_color_saturation')) ? get_theme_mod('orb_accounts_quaternary_color_saturation') : 100;
													$l = !empty(get_theme_mod('orb_accounts_quaternary_color_lightness')) ? get_theme_mod('orb_accounts_quaternary_color_lightness') : 30;

													echo "hsl({$h}, {$s}%, {$l}%)";
													?>;

				--orb-accounts-btn-color: <?php
											$h = !empty(get_theme_mod('orb_accounts_btn_color_hue')) ? get_theme_mod('orb_accounts_btn_color_hue') : 0;
											$s = !empty(get_theme_mod('orb_accounts_btn_color_saturation')) ? get_theme_mod('orb_accounts_btn_color_saturation') : 0;
											$l = !empty(get_theme_mod('orb_accounts_btn_color_lightness')) ? get_theme_mod('orb_accounts_btn_color_lightness') : 0;

											echo "hsl({$h}, {$s}%, {$l}%)";
											?>;

				--orb-accounts-btn-font-color: <?php
												$h = !empty(get_theme_mod('orb_accounts_btn_color_hue')) ? get_theme_mod('orb_accounts_btn_color_hue') : 0;
												$s = !empty(get_theme_mod('orb_accounts_btn_color_saturation')) ? get_theme_mod('orb_accounts_btn_color_saturation') : 0;
												$l = !empty(get_theme_mod('orb_accounts_btn_color_lightness')) ? get_theme_mod('orb_accounts_btn_color_lightness') : 100;

												echo "hsl({$h}, {$s}%, {$l}%)";
												?>;
			}
		</style>
<?php
	}
}
