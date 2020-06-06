<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;

class EditController extends Controller
{
    public function editUser(){

    	$payload = request(['full_name','username','email','password','role']);

    	if($administrator = Administrator::fetchBySlug($slug)){
	    	$administrator->full_name = $payload['full_name'];
	    	$administrator->username = $payload['username'];
	    	$administrator->email = $payload['email'];
	    	$administrator->password = Hash::make($payload['password']);	
	    	$administrator->slug = str_slug($payload['full_name']) . "-" .mt_srand(6);
	    	$administrator->role = $payload['role'];
	    	$administrator->updated_at = now();
	    	$administrator->save();
	    	return response()->json("Administrator Modified");

    	}

    		return response()->json("Administrator not found ! ");
    	
}
