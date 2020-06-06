<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdministratorEditTest extends TestCase
{
    /** @test */
    public function CreateTest()
    {

        $response = $this->post('api/users/mister-editor-7f5cf2/edit',[
            'full_name' => 'Mister Editor2',
            'username' => 'editor22',
            'email'    => 'editor22@gmail.com',
            'password' => 'editor22password',
            'role' => 'Editor',
        ]);

       
 }   }
