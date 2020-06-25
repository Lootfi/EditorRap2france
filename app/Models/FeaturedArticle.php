<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeaturedArticle extends Model
{
    
	 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_article_featured';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
