<?php namespace App\Http\Middleware;

use App\AuthenticationToken;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class PermissionChecker {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $access = $this->userHasAccessTo($request);
        if ($access && is_bool($access))
            return $next($request);
        else if ($access == 'redir')
            return redirect()->guest('login');
        return redirect()->route('home');
    }

    public function userHasAccessTo($request)
    {
        return true;
    }


    public function requiredPermission($request)
    {
        $action = $request->route()->getAction();
        return isset($action['can']) ? explode('|', $action['can']) : null;
    }

    public function forbiddenRoute($request)
    {
        $action = $request->route()->getAction();
        if (isset($action['except']))
            return $action['except'] == $request->user()->roles->role_slug;
        return false;
    }
}