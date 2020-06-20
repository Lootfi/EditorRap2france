<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleWeekAnalytic extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualite_analytics_week';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
