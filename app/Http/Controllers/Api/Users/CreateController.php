<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;
use App\Models\AdministratorDetail;
use Carbon\Carbon;
use Hash;
use ImageOptimizer;
use App\Jobs\AddAdminImageToServer;
class CreateController extends Controller
{
    public function createUser(){

    	$payload = request(['full_name','email','password','role','biography','picture','status','avatar']);

    	if(!Administrator::where('email',$payload['email'])->first()){
	    	$administrator = new Administrator();
	    	$administrator->full_name = $payload['full_name'];
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
            if(request('avatar')){	
    			$imageData = request('avatar');
       			$fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
    			$AvatarPath =public_path('images/admin/users/avatars/').$fileName;
    			\Image::make(request('avatar'))->save($AvatarPath);
                ImageOptimizer::optimize($AvatarPath);

    			$details->picture = $fileName;

                AddAdminImageToServer::dispatch($details->picture, $administrator->id,url('/'));

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
