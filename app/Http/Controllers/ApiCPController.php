<?php

namespace App\Http\Controllers;

use App\GameHeroes;
use Illuminate\Http\Request;

class ApiCPController extends Controller
{
    //
    public function ban(Request $request, $id)
    {
        // BAN USER IN THE DATABASE
        $User = GameHeroes::findOrFail($id);

        // BAN USER WITH RCON
    }
}
