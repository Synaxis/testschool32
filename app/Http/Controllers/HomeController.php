<?php

namespace App\Http\Controllers;

use App\Role;
use App\Download;
use App\Jobs\NotificationQueue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;

class HomeController extends Controller
{
    public function home()
    {
        return view('home');
    }


    public function contact()
    {
        $leads = Role::where('slug', 'awokenlead')->first()->users;
        $staffs = Role::where('slug', 'staff')->first()->users;
        $devs = Role::where('slug', 'awokendev')->first()->users;
        $communitymanagers = Role::where('slug', 'communitymanager')->first()->users;
        return view('contact', compact('staffs', 'leads', 'devs', 'communitymanagers'));
    }

    public function team()
    {
        $leads = Role::where('slug', 'awokenlead')->first()->users;
        $staffs = Role::where('slug', 'staff')->first()->users;
        $staffs2 = Role::where('slug', 'staff2')->first()->users;
        $devs = Role::where('slug', 'awokendev')->first()->users;
        return view('team', compact('staffs', 'staffs2', 'leads', 'devs'));
    }

    public function doLogout()
    {
        Auth::logout();

        return redirect()->back();
    }

    public function download()
    {
        return view('download');
    }

    public function faq()
    {
        return view('faq');
    }

    public function downloadClient(string $client)
    {
        Download::create(['user_id' => Auth::id()]);
        switch($client) {
            case "laucnher":
                return redirect()->away('http://play.battlefieldheroes.online/DarkLauncher.exe');
                break;
            case "client-archive":
                return redirect()->away('https://yadi.sk/d/16dxOw013PuQBX');
                break;
            case "tutorial":
                return redirect()->away('http://play.battlefieldheroes.online/');
                break;
            default:
                return redirect()->away('http://play.battlefieldheroes.online/DarkLauncher.exe');
                break;
        }
        return redirect()->away('http://play.battlefieldheroes.online/DarkLauncher.exe');
    }

    public function setLanguage()
    {
        if (! Session::has('locale'))
        {
            Session::put('locale', Input::get('language'));
        } else {
            Session::put('locale', Input::get('language'));
        }
        return redirect()->back();
    }
}