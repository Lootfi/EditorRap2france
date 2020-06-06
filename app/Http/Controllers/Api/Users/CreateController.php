<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;
use Hash;

class CreateController extends Controller
{
    public function createUser(){

    	$payload = request(['full_name','username','email','password','role']);

    	if(!Administrator::where('email',$payload['email'])->first()){
	    	$administrator = new Administrator();
	    	$administrator->full_name = $payload['full_name'];
	    	$administrator->username = $payload['username'];
	    	$administrator->email = $payload['email'];
	    	$administrator->password = Hash::make($payload['password']);	
	    	$administrator->slug = str_slug($payload['full_name']) . "-" .substr(md5(mt_rand()), 0, 6);
	    	$administrator->role = $payload['role'];
	    	$administrator->created_at = now();
	    	$administrator->updated_at = now();
	    	$administrator->save();
	    	  return response()->json("Administrator Created");
    	}else{

    		return response()->json("Administrator exists");
    	}
    	


    }
}
