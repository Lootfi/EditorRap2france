<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hashtag extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualité-hashtag';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function articles()

    {

        return $this->belongsToMany(\App\Models\Article::class, 'r2f_new_actualités-hashtags')
                    ->withPivot('id');

    }


}
