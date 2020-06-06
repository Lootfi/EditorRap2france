<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdministratorCreateTest extends TestCase
{
    /** @test */
    public function CreateTest()
    {

        $response = $this->post('api/users/add-new-user', [
            'full_name' => 'Mister Editor',
            'username' => 'editor2',
            'email'    => 'editor2@gmail.com',
            'password' => 'editor2password',
            'role' => 'Editor',
        ]);

        $response->assertJsonStructure([
        
        ]);
    }
}
