<?php

namespace App\Http\Controllers\Api\Settings\Hashtags;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Hashtag;

class IndexController extends Controller
{
    public function getAllHashtags(){

    	return Hashtag::all();
    }
}
