<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImageArticle extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_news_image';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    public function article(){

    	return $this->hasOne('\App\Models\Article','id','idnews');
    }
}
