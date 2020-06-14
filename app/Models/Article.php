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
    protected $table = 'r2f_new_actualite_copy_testing';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
     /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['Creator','Category','ContenuFormat'];

     /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['contenutext','contenu','contenuJson','id','idcat','admin_creator_id'];
    /**
    * The attributes that should be cast.
    *
    * @var array
    */
    protected $casts = [
       'created_at' => 'datetime:Y-m-d',
       'updated_at' => 'datetime:Y-m-d',
       'dateactu' =>'datetime:Y-m-d',
       'contenuJson' => 'array'
    ];



    public function getCreatorAttribute(){


    	return \App\Models\Administrator::findOrFail($this->admin_creator_id);
    }

    public function getCategoryAttribute(){

        return \App\Models\Category::findOrFail($this->idcat);
    }
    
    public function getContenuFormatAttribute(){

        if($this->contenuJson == null ){

            return ['type' => "raw", 'contenu' => html_entity_decode($this->contenu)  ];
       
        }else{

            return ['type' => "json" , 'contenu' => $this->contenuJson];
        }
    }

    public static function fetchByTag($tag){

        return self::where('tag',$tag)->first();
    }
}