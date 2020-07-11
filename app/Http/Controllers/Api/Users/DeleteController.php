<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;
use File;

class DeleteController extends Controller
{
    public function deleteUser($slug){

    	if($administrator = Administrator::fetchBySlug($slug)){
            $details = $administrator->Details;
            $oldAvatar = public_path('images/admin/users/avatars/').$details->picture;
            File::delete($oldAvatar);
            $details->delete();
    		$administrator->delete();
    		return response()->json('Administrator deleted');
    	}

    	return response()->json('Administrator not found ! ');
    }
}
