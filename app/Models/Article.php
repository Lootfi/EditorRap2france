<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

	 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualite_copy';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



    public function creator(){


    	return $this->hasOne('\App\Models\Administrator','id','admin_creator_id');
    }
}
