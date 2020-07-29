<?php

namespace App\Http\Middleware;

use Closure;

class AdminAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if($user = JWTAuth::parseToken()->authenticate()){

            if($user->role == "Admin"){

             return $next($request);
            }

       return response()->json(['error' => 'Unauthorized'], 403);
        }
    }
}
