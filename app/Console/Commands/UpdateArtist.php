<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use App\Models\Artist;

class UpdateArtist extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:UpdateArtist {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
         $artist = Artist::findOrFail($this->argument('id'));
         DB::connection('R2F')->table('R2F_artistes')
                                  ->where('id', $artist->id)
                                  ->update(['id' => $artist->id,
                                            'artiste' => $artist->name,
                                            'photoprofil'=> $artist->image,
                                            'created_at' => $artist->created_at,
                                            'updated_at' => $artist->updated_at                           

                                        ]);
    }
}
