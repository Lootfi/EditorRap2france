<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Hash;
class PasswordReset extends Controller
{
    public function reset(Request $request){


    	$administrator = JWTAuth::parseToken()->authenticate();
    	$administrator->makeVisible('password')->toArray();

    	if (!(Hash::check($request->old_password, $administrator->password))) {

            return response()->JSON(['message' => 'Password Dont match']);
        }

        	$administrator->password = Hash::make($request->password);
        	$administrator->updated_at = now();
        	$administrator->save();
        	$administrator->makeHidden('password')->toArray();

        	return response()->JSON(['message' => "Password Updated", 'user' => $administrator]);
	}

}
