<?php

namespace App\Http\Controllers\Api\Settings\Artists;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Artist;
use LaravelShortPixel;
use Carbon\Carbon;

class EditController extends Controller
{
    public function EditArtist($slug){

    		if($artist = Artist::fetchBySlug($slug)){

    			$artist->name = request('name');
    			$artist->slug = str_slug(request('name'));
    			$artist->status = 1;
    			$artist->updated_at = now();
    			if(request('avatar')){	
    			$imageData = request('avatar');
       			$fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
    			$AvatarPath =public_path('images/admin/artists/avatars/').$fileName;           
    			\Image::make(request('avatar'))->save($AvatarPath);
    			$artist->image = $fileName;
    		}
    			$artist->save();

    			return $artist;
    		}

    		return "Artist not found";
    	}
}
