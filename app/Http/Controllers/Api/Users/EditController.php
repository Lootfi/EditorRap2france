<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;

class EditController extends Controller
{
    public function editUser($slug){

    	$payload = request(['full_name','username','email','password','role']);

    	if($administrator = Administrator::fetchBySlug($slug)){
    		if($payload{'full_name'}){
    			$administrator->full_name = $payload['full_name'];
    			$administrator->slug = str_slug($payload['full_name']) . "-" .mt_srand(6);
    		}
    		if($payload{'username'}){
	    	$administrator->username = $payload['username'];
    		
    		}
    		if($payload{'email'}){
	    	$administrator->email = $payload['email'];
    		
    		}
    		if(request('password')){
	    	$administrator->password = Hash::make($payload['password']);

    		}
	    	$administrator->updated_at = now();
	    	$administrator->save();
	    	return response()->json([

	    		'user' => $administrator,
	    	]);
    	}

    		return response()->json("Administrator not found ! ");
    	
}
}