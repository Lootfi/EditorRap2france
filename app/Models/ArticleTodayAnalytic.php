<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleTodayAnalytic extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualite_analytics_today';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
