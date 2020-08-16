<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\ImageArticle;

class AddArticleImagesToServer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    

    protected $blocks;
    protected $id;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($blocks,$id)
    {
        $this->blocks = $blocks;
        $this->id = $id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */ 
    public function handle()
    {
        foreach($this->blocks as $block){

                    if($block['type'] == 'image'){

                        $image = new ImageArticle();
                        $image->idnews = $this->id;
                        $image->image = $block['data']['file']['name'];
                        $image->created_at = now();
                        $image->updated_at = now();
                        $image->save(); 
                        $urltosend = "https://img.rap2france.com/public/medias/r2f_new-downloadimg-corps-dimension.php?imgUrl=".$block['data']['file']['url']."&id=".$image->id."&url=".url('/')."&name=".$image->image;
                        $ch = curl_init($urltosend);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
                        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                        curl_setopt($ch, CURLOPT_HEADER, 0);
                        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0');
                        $data = curl_exec($ch);
                        $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);      //Here we fetch the HTTP response code
                    }
                }

    }
}
