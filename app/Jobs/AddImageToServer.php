<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Artisan;
use File;
require_once base_path('vendor/shortpixel/shortpixel-php/lib/shortpixel-php-req.php');
class AddImageToServer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $url;
    protected $id;
    protected $fileName;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($fileName, $id,$url)
    {
        $this->fileName = $fileName;
        $this->id = $id;
        $this->url = $url;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        echo "Start handling ".$this->fileName ."Id :".$this->id;

       \ShortPixel\setKey(env('SHORT_PIXEL_API_KEY'));
        $dimensions = [['660','330'],['315','180'],['300','180'],['155','90'],['290','380'],['320','320'], ['290','150'],['145','250'],['32','32'],['240','145'],['100','60']];
        $densities = ['mdpi','xhdpi'];
        $AvatarPath = public_path('/images/admin/articles/avatars/').$this->fileName;
            foreach($dimensions as $dimension){
                foreach($densities as $density ){
                    $directory = "public/images/admin/articles/avatars/optimized/".$this->id."/".$dimension[0]."x".$dimension[1]."/".$density;
                    if(!File::exists($directory)){
                            echo $directory;
                            File::makeDirectory($directory,0777,true);

                    }

                        \ShortPixel\fromFile($AvatarPath)->optimize(2)->resize($dimension[0],$dimension[1])->toFiles($directory);
                    }
                }

        $imgtosend = str_replace(' ', 'SPACESEPARATOR', $this->fileName);
       $urltosend = "https://img.rap2france.com/public/medias/r2f_new-downloadimg-2.php?img=".$imgtosend."&id=".$this->id."&url=".$this->url;
                    $ch = curl_init($urltosend);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                    curl_setopt($ch, CURLOPT_PROXY, "113.52.144.36");
                    curl_setopt($ch, CURLOPT_PROXYPORT, "9339");
                    curl_setopt($ch, CURLOPT_PROXYUSERPWD, "allwebnet@gmail.com:dtNj0hSa");
                    curl_setopt($ch, CURLOPT_HEADER, 0);
                    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0');
                    $data = curl_exec($ch);
                    $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);      //Here we fetch the HTTP response code
    }
}
