<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use App\Models\Administrator;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AvatarController extends Controller
{
    public function uploadAvatar(Request $request,$slug){

    	if($administrator = Administrator::fetchBySlug($slug)){
    		if($request->get('avatar')){	
    			$imageData = $request->get('avatar');
       			$fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
    			$AvatarPath =public_path('images/admin/users/avatars/').$fileName;
    			\Image::make($request->get('avatar'))->save($AvatarPath);
    			$details = $administrator->Details;
    			$details->picture = $fileName;
    			$details->updated_at = now();
    			$details->save();

    			return response()->json([

	    		'user' => $administrator,
	    	]);
    	}
   			}
   			    	return "User does not exist";

    	}



}
