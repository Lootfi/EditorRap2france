<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdministratorDetail extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_administrator_details';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['id','admin_id'];

    public function administrator(){

    	return $this->hasOne('\App\Models\Administrator','id','admin_id');
    }
}
