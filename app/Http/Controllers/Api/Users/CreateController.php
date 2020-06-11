<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;
use App\Models\AdministratorDetail;
use Carbon\Carbon;
use Hash;
class CreateController extends Controller
{
    public function createUser(){

    	$payload = request(['full_name','username','email','password','role','biography','picture','mobile','adresse','gender','country','status','avatar']);

    	if(!Administrator::where('email',$payload['email'])->first()){
	    	$administrator = new Administrator();
	    	$administrator->full_name = $payload['full_name'];
	    	$administrator->username = $payload['username'];
	    	$administrator->email = $payload['email'];
	    	$administrator->password = Hash::make($payload['password']);	
	    	$administrator->slug = str_slug($payload['full_name']) . "-" .substr(md5(mt_rand()), 0, 6);
	    	$administrator->role = $payload['role']['value'];
             if(request('status')['label'] == "Activé"){
                    $administrator->status = 1;
                }
             if(request('status')['label'] == "Suspendu") {
                    $administrator->status = 2;
                }
	    	$administrator->created_at = now();
	    	$administrator->updated_at = now();
	    	$administrator->save();
	    	$details = new AdministratorDetail();
	    	$details->biography = $payload['biography'];
	    	$details->picture = $payload['avatar'];
	    	$details->admin_id = $administrator->id;
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
            if(request('avatar')){	
    			$imageData = request('avatar');
       			$fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
    			$AvatarPath =public_path('images/admin/users/avatars/').$fileName;
    			\Image::make(request('avatar'))->save($AvatarPath);
    			$details->picture = $fileName;
    		}
	    	$details->created_at = now();
	    	$details->updated_at = now();
	    	$details->save(); 

	    	  return response()->json("Administrator Created");

    	}else{

    		return response()->json("Administrator exists");
    	}
    	


    }
}
