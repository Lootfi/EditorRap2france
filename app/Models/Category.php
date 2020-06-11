<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    	 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualite-categorie';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
     

    public function getStatusNameAttribute(){

    	if($this->status == 1){

    		return "Activé";
    	}
    	if($this->status == 2){

    		return "suspended";
    	}
    }
}
