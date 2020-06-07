<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;
use App\Models\AdministratorDetail;
use Hash;
class CreateController extends Controller
{
    public function createUser(){

    	$payload = request(['full_name','username','email','password','role','biography','picture']);

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
	    	$details = new AdministratorDetail();
	    	$details->biography = $payload['biography'];
	    	$details->picture = $payload['picture'];
	    	$details->admin_id = $administrator->id;
	    	$details->created_at = now();
	    	$details->updated_at = now();
	    	$details->save(); 

	    	  return response()->json("Administrator Created");

    	}else{

    		return response()->json("Administrator exists");
    	}
    	


    }
}
