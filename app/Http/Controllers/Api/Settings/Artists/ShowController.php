<?php

namespace App\Http\Controllers\Api\Settings\Artists;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Artist;

class ShowController extends Controller
{
    
    public function showArtist($slug){

    	if($artist = Artist::fetchBySlug($slug)){

    	 $artist->setAttribute('articles',$artist->articles()->OrderBy('id','DESC')->get());
    	 
    	 return $artist;
    	}

    	return 'Artist not found';
    }
}
