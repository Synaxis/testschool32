<?php

namespace App\Http\Middleware;

use Closure;

class apiControlPanel
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
        $whitelisted = [
            "127.0.0.1"
        ];

        if (in_array($request->ip(), $whitelisted, true)) {
            return $next($request);
        } else {
            abort(403);
        }
    }
}
