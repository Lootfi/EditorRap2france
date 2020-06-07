<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Hash;

class AdministratorCreateTest extends TestCase
{
    /** @test */
    public function CreateTest()
    {

        $response = $this->post('api/users/add-new-user', [
            'full_name' => 'Karam Henni',
            'username' => 'KaramHnni',
            'email'    => 'karam.tenes@gmail.com',
            'password' => 'password',
            'role' => 'Admin',
            'biography' => 'Developer',
            'picture' => NULL,
        ]);

        $response->assertJsonStructure([
            
        ]);
    }
}
