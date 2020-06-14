<?php

namespace App\Http\Controllers\Api\Settings\Categories;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class IndexController extends Controller
{
    public function getAllCategories(){

    	return Category::all();
    }
}
