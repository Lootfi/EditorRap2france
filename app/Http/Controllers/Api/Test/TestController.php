<?php

namespace App\Http\Controllers\Api\Test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(Request $request){

    	return $request;
    }
}
