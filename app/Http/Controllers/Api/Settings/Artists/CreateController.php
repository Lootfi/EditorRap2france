<?php

namespace App\Http\Controllers\Api\Settings\Artists;

use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Models\Artist;
use Carbon\Carbon;
use ImageOptimizer;
use Artisan;
use LaravelShortPixel;
use App\Jobs\AddArtistImageToServer;

 
class CreateController extends Controller
{
    	public function createArtist(){

    		if(! Artist::fetchBySlug(str_slug(request('name')))){

                Artisan::call('command:addNewArtists');

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
                \Image::make(request('avatar'))->save($AvatarPath);
                ImageOptimizer::optimize($AvatarPath);
    			$artist->image = $fileName;
                     $artist->save();

                AddArtistImageToServer::dispatch($artist->image, $artist->id,url('/'));

    		}else{
                    $artist->save();

            }

    			return $artist;
    		}

    		return "Artist Already exists";
    	}
}
