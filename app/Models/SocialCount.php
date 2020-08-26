<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialCount extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_social_count';

    protected $primaryKey = 'updated_at';
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
