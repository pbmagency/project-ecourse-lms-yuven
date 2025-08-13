<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;

class DuitkuController extends Controller
{

    private $duitkuConfig;

    public function __construct()
    {
        $this->duitkuConfig = new \Duitku\Config(env('DUITKU_SERVER_KEY'), env('DUITKU_MERCHANT_CODE'));
        $this->duitkuConfig->setSandboxMode(env('DUITKU_SANDBOX_MODE', true)); // Set to false for production
    }


    public function create($merchantRef, $price, $email, $return_url)
    {
        // duitku
        $params = array(
            'paymentAmount'     => $price,
            'merchantOrderId'   => $merchantRef,
            'productDetails'    => "Editor Amplifier",
            'email'             => $email,
            'callbackUrl'       => url('api/callback/duitku'),
            'returnUrl'         => $return_url,
        );

        try {
            // createInvoice Request
            $responseDuitkuPop = \Duitku\Pop::createInvoice($params, $this->duitkuConfig);

            header('Content-Type: application/json');
            return $responseDuitkuPop;
        } catch (Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'message' => $e->getMessage()
                ]
            );
        }
    }
}
