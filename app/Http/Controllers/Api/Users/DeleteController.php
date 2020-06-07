<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;

class DeleteController extends Controller
{
    public function deleteUser($slug){

    	if($administrator = Administrator::fetchBySlug($slug)){
    		

    		$administrator->delete();
    		$details = $administrator->Details;
    		$details->delete();
			return response()->json('Administrator deleted');
    	}

    	return response()->json('Administrator not found ! ');
    }
}
