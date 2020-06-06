<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFullNameToR2fNewAdministratorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('r2f_new_adminstrators', function (Blueprint $table) {
            $table->string('Full_Name')->after('id');
            $table->string('slug')->after('password');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('r2f_new_adminstrators', function (Blueprint $table) {
            $table->DropColumn('Full_Name');
            $table->DropColumn('slug');

        });
    }
}
