<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToR2fNewAdministratorDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('r2f_new_administrator_details', function (Blueprint $table) {
            $table->string('country')->null();
            $table->string('mobile')->null();
            $table->string('adresse')->null();
            $table->string('gender')->default('Male')->null();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('r2f_new_administrator_details', function (Blueprint $table) {
            //
        });
    }
}
