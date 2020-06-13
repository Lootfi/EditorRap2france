<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddContenuJsonToR2fNewActualiteCopyTestingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('r2f_new_actualite_copy_testing', function (Blueprint $table) {
            
            $table->json('contenuJson')->null();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('r2f_new_actualite_copy_testing', function (Blueprint $table) {
            //
        });
    }
}
