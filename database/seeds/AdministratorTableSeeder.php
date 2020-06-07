<?php

use Illuminate\Database\Seeder;

class AdministratorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('r2f_new_adminstrators')->insert([
            'username' => 'Admin',
            'full_name' => 'Admin Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('adminpassword'),
            'slug' => 'admin-admin-4d5f8s',
            'role' => 'Admin',
        ]);
    }
}
