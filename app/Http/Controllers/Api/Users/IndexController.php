<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;

class IndexController extends Controller
{
    	
    	public function getAllUsers(){

    		$users = Administrator::all();
    		return $users;
    	}
}
