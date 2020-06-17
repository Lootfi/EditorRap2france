<?php

namespace App\Http\Controllers\Api\Settings\Artists;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Artist;


class IndexController extends Controller
{
    public function getAllArtists(){

    	return Artist::all();
    }
}
