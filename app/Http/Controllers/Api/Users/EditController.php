<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;
use Hash;

class EditController extends Controller
{
    public function editUser($slug){

    	$payload = request(['full_name','email','password','role','status','biography','facebook','twitter','instagram']);

    	if($administrator = Administrator::fetchBySlug($slug)){
    		if(request('full_name')){
    			$administrator->full_name = $payload['full_name'];
    		}
    		if(request('email')){
	    	$administrator->email = $payload['email'];
    		}
    		if(request('password')){
	    	$administrator->password = Hash::make($payload['password']);

    		}
            if(request('status')){
                if(request('status') == "Activé"){
                    $administrator->status = 1;
                }
                if(request('status') == "Suspendu") {
                    $administrator->status = 2;
                }
            }

            if(request('role')){
                $administrator->role = request('role')['value'];
            }

            $details = $administrator->Details;
            
            if(request('biography')){
                $details->biography = $payload['biography'];

            }
            if(request('twitter')){

                $details->twitter = $payload['twitter'];
            }
            if(request('facebook')){

                $details->facebook = $payload['facebook'];

            }
            if(request('instagram')){

                $details->instagram = $payload['instagram'];

            }

            $details->updated_at = now();
            $details->save();
	    	$administrator->updated_at = now();
	    	$administrator->save();
	    	return response()->json([

	    		'user' => $administrator,
	    	]);
    	}

    		return response()->json("Administrator not found ! ");
    	
}
}