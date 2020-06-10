<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;

class EditController extends Controller
{
    public function editUser($slug){

    	$payload = request(['full_name','username','email','password','role','status', 'mobile','country','adresse','gender']);

    	if($administrator = Administrator::fetchBySlug($slug)){
    		if(request('full_name')){
    			$administrator->full_name = $payload['full_name'];
    		}
    		if(request('username')){
	    	$administrator->username = $payload['username'];
    		
    		}
    		if(request('email')){
	    	$administrator->email = $payload['email'];
    		
    		}
    		if(request('password')){
	    	$administrator->password = Hash::make($payload['password']);

    		}
            if(request('status')){
                if(request('status')['label'] == "Activé"){
                    $administrator->status = 1;
                }
                if(request('status')['label'] == "Suspendu") {
                    $administrator->status = 2;
                }
            }

            $details = $administrator->Details;
            
            if(request('mobile')){
                $details->mobile = $payload['mobile'];
            }
            if(request('country')){
                $details->country = $payload['country'];

            }
            if(request('adresse')){
                $details->adresse = $payload['adresse'];

            }
            if(request('gender')){
                $details->gender = $payload['gender'];

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