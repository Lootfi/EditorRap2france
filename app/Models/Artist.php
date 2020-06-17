<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualite-artistes';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['StatusName','Avatar'];

    
    public $timestamps = false;
     

    public function getStatusNameAttribute(){

        if($this->status == 1){

            return "Activé";
        }
        if($this->status == 2){

            return "suspended";
        }
    }
    public function getAvatarAttribute(){

        return "/images/admin/artists/avatars/" . $this->image; 
    }
    public static function fetchBySlug($slug){

        return self::where('slug',$slug)->first();
    }

     public function articles()

    {

        return $this->belongsToMany(\App\Models\Article::class, 'r2f_new_article_artist')
                    ->withPivot('id');

    }

}
