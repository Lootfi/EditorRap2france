<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;

class ArticleController extends Controller
{
    
    public function index(){

    	$user = JWTAuth::parseToken()->authenticate();

    	return $user->articles;
    }
}
