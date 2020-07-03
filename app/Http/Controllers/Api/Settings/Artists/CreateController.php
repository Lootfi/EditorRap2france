<?php

namespace App\Http\Controllers\Api\Settings\Artists;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Artist;
use Carbon\Carbon;
use ImageOptimizer;
use LaravelShortPixel;


class CreateController extends Controller
{
    	public function createArtist(){

    		if(! Artist::fetchBySlug(str_slug(request('name')))){

    			$artist = new Artist();
    			$artist->name = request('name');
    			$artist->slug = str_slug(request('name'));
    			$artist->status = 1;
    			$artist->created_at = now();
    			$artist->updated_at = now();
    			if(request('avatar')){	
    			$imageData = request('avatar');
       			$fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
    			$AvatarPath =public_path('images/admin/artists/avatars/').$fileName;
                $optimized = "/images/admin/artists/avatars/optimized";
                \Image::make(request('avatar'))->save($AvatarPath);
                $result = LaravelShortPixel::fromFiles($AvatarPath,$optimized,[$compression_level = 1, $width = 200, $height = 200, $maxDimension = true]);
                ImageOptimizer::optimize($AvatarPath);

    			$artist->image = $fileName;
    		}
    			$artist->save();

    			return $artist;
    		}

    		return "Artist Already exists";
    	}
}
