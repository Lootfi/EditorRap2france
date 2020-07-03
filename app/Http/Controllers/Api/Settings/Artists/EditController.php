<?php

namespace App\Http\Controllers\Api\Settings\Artists;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Artist
use LaravelShortPixel;


class EditController extends Controller
{
    public function createArtist(){

    		if($artist = Artist::fetchBySlug(str_slug(request('name')))){

    			$artist->name = request('name');
    			$artist->slug = str_slug(request('name'));
    			$artist->status = 1;
    			$artist->updated_at = now();
    			if(request('avatar')){	
    			$imageData = request('avatar');
       			$fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
    			$AvatarPath =public_path('images/admin/artists/avatars/').$fileName;
    			$optimized = "/images/admin/artists/avatars/optimized";
                \Image::make(request('avatar'))->save($AvatarPath);
                $result = LaravelShortPixel::fromFiles($AvatarPath,$optimized,[$compression_level = 1, $width = 200, $height = 200, $maxDimension = true]);
    			\Image::make(request('avatar'))->save($AvatarPath);
    			$artist->image = $fileName;
    		}
    			$artist->save();

    			return $artist;
    		}

    		return "Artist not found";
    	}
}
