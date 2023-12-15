<?php

namespace ORB\Accounts\Assets\Images;

class Images
{
    function getCompanyLogo()
    {
        $custom_logo_id = get_theme_mod('custom_logo');
        $company_logo = wp_get_attachment_image_src($custom_logo_id, 'full');

        if (has_custom_logo()) {
            return $company_logo[0];
        } else {
            return plugins_url('logo.png', __FILE__);
        }
    }

    function getImage($filename)
    {
        return plugins_url($filename, __FILE__);
    }
}
