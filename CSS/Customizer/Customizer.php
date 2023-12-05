<?php

namespace ORB\Accounts\CSS\Customizer;

class Customizer
{
	public function __construct()
	{
		add_theme_support('custom-logo');
		add_theme_support("custom-background");

		add_action('customize_register', array($this, 'register_customizer_panel'));
		// Add a logo to quotes, invoices and receipts
		// Change color scheme
		new StatusBar;
		new Table;
		new BorderRadius;
		new Color;
		new Shadow;
	}

	function register_customizer_panel($wp_customize)
	{
		add_theme_support('customizer');
		$wp_customize->add_panel(
			'orb_accounts_settings',
			array(
				'title' => __('ORB Accounts Settings', 'orb-accounts'),
				'priority' => 10,
			)
		);
	}
}
