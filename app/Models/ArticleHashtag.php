<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleHashtag extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualités-hashtags';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function getStatusNameController(){

    	if($this->status == 1){

    		return "Shown";
    	}
    	if($this->status == 2){

    		return "hidden";
    	}
    }
}
