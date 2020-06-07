<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAdminIdToR2fNewAdministratorDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('r2f_new_administrator_details', function (Blueprint $table) {
                
            $table->integer('admin_id');
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
            $table->dropColumn('admin_id');
        });
    }
}
