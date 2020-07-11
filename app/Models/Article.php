<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Feed\Feedable;
use Spatie\Feed\FeedItem;
use Carbon\Carbon;

class Article extends Model implements Feedable
{

	 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'r2f_new_actualite_testing_copy';
    
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
    protected $appends = ['Creator','Category','ContenuFormat','Hashtags','Artists','Avatar','StatusName','IsFeatured','CreatedAtAgo'];

     /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['contenuJson','idcat','admin_creator_id'];
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

        if($this->status == 2){

            return "Non Publié";
        }
        if($this->status == 1){

            return "Publié";
        }
    }

    public function getIsFeaturedAttribute(){

        if($featured = \App\Models\FeaturedArticle::where('article_id',$this->id)->first()){

            return ['date_start' => $featured->date_start, 'date_end' => $featured->date_end];

        }else{

            return null;

        }
    }

    public function getCreatedAtAgoAttribute(){

        return Carbon::createFromTimeStamp(strtotime($this->created_at))->diffForHumans();
    }

   public static function published(){

        return self::where('status',2);
    }

    public static function Pending(){

        return self::where('status',1);
    }

    public function publish(){

        $this->status = 2;
        $this->updated_at = now();
        $this->save();
        return $this;

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

        if($this->type == 1){

            return "https://cd1.rap2france.com/public/medias/news/".$this->id."/660x330/mdpi/".$this->image;
        }
         
        return "/images/admin/articles/avatars/optimized/".$this->image; 
    

    }
    public function getContenuFormatAttribute(){

        if($this->type == 1 ){

            return ['type' => "raw", 'contenu' => html_entity_decode($this->contenu)  ];
       
        }else{

            return ['type' => "json" , 'contenu' => $this->contenuJSON];
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
