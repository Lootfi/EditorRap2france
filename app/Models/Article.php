<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Feed\Feedable;
use Spatie\Feed\FeedItem;

class Article extends Model implements Feedable
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
    protected $appends = ['Creator','Category','ContenuFormat','Hashtags','Artists','Avatar','StatusName'];

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

    public function getStatusNameAttribute(){

        if($this->status == 1){

            return "Pending";
        }
        if($this->status == 2){

            return "published";
        }
    }

    public function toFeedItem()
    {
        return FeedItem::create()
            ->id($this->id)
            ->title($this->titre)
            ->summary($this->contenu)
            ->updated($this->updated_at)
            ->link('/articles/'.$this->tag)
            ->author($this->Creator->Full_Name);
    }

    public static function getFeedItems()
            {
               return static::all();
            }

    public function getLinkAttribute()
{
    return route('events.show', $this);
}

    public function getArtistsAttribute(){

        return $this->artists()->orderBy('rank')->get();
    }


    public function getCreatorAttribute(){


    	return \App\Models\Administrator::findOrFail($this->admin_creator_id);
    }

    public function getCategoryAttribute(){

        return \App\Models\Category::findOrFail($this->idcat);
    }
    
    public function getAvatarAttribute(){

         
        return "/images/admin/articles/avatars/" . $this->image; 
    

    }
    public function getContenuFormatAttribute(){

        if($this->contenuJson == null ){

            return ['type' => "raw", 'contenu' => html_entity_decode($this->contenu)  ];
       
        }else{

            return ['type' => "json" , 'contenu' => $this->contenuJson];
        }
    }

    public function getHashtagsAttribute(){

        return $this->hashtags()->get();

    }

    public static function fetchByTag($tag){

        return self::where('tag',$tag)->first();
    }


    public function artists()

    {

        return $this->belongsToMany(\App\Models\Artist::class, 'r2f_new_article_artist')
                    ->withPivot('rank');

    }

    public function hashtags()

    {

        return $this->belongsToMany(\App\Models\Hashtag::class, 'r2f_new_actualités_hashtags');

    }
}
