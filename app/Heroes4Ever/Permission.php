<?php


namespace App\Heroes4Ever;

use Auth;

class Permission {

    public function can($perm = null)
    {
        if ( ! Auth::check())
            return false;
        $user = Auth::user();
        if ($user->roles->count() == 0)
            return false;
        if ($perm)
            return true;
        return false;
    }
}