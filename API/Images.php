<?php

namespace ORB\Accounts\API;

use Exception;

use ORB\Accounts\Assets\Images\Images as ImagesClass;

use WP_REST_Request;

class Images
{
    private $images;

    public function __construct()
    {
        $this->images = new ImagesClass;
    }

    function get_company_logo()
    {
        try {
            return rest_ensure_response($this->images->getCompanyLogo());
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }

    function get_image(WP_REST_Request $request)
    {
        try {
            $filename = $request->get_param('filename');

            return rest_ensure_response($this->images->getImage($filename));
        } catch (Exception $e) {

            $error_message = $e->getMessage();
            $status_code = $e->getCode();

            $response_data = [
                'message' => $error_message,
                'status' => $status_code
            ];

            $response = rest_ensure_response($response_data);
            $response->set_status($status_code);

            return $response;
        }
    }
}
