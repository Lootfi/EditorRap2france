<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;

class ShowController extends Controller
{
    public function showUser($slug){

    	if($user = Administrator::fetchBySlug($slug)){

    		return $user;
    	}

    	return response()->json("User not found");
    }
}
