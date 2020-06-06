<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdminLoginTest extends TestCase
{
    /** @test */
    public function loginTest()
    {
        $response = $this->post('api/auth/login', [
            'email'    => 'admin@gmail.com',
            'password' => 'adminpassword'
        ]);

        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'expires_in'
        ]);
    }

}
