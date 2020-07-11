<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use JWTAuth;
use DB;

class IndexController extends Controller
{
    
    public function getAllArticles(){

    		
    		return Article::OrderBy('created_at','DESC')->take(50)->get();

    }

}
