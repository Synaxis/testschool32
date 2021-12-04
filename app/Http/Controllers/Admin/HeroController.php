<?php namespace App\Http\Controllers\Admin;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use function App\logAction;
use Illuminate\Http\Request;
use App\Permission;
use App\Role;
use App\GameHeroes;
use App\User;
use App\GameStats;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;

class HeroController extends Controller {

    
    public function heroManage($heroid)
    {
        $hero = GameHeroes::where('id', $heroid)->first();
        $user = User::where('id', $hero->user_id)->first();
        return view('admin.hero.managment', compact('hero', 'user'));
    }

    public function heroChangeStat($heroid, $key, $value){
        $hero = GameHeroes::where('id', $heroid)->first();
        $user = User::where('id', $hero->user_id)->first();
        $key = Input::get('key');
        $value = Input::get('value');
        if(GameStats::where('heroID', $heroid)->where('statsKey', $key)->exists()){
            $id = GameStats::where('heroID', $heroid)->where('statsKey', $key)->first();
            $id = $id->id;
            GameStats::where('heroID', $heroid)->where('statsKey', $key)->update(['statsValue' => $value]);
        }else{
            $id = DB::table('game_stats')->insertGetId(['user_id' => $user->id, 'heroID' => $heroid, 'statsKey' => $key, 'statsValue' => $value]);
        }
        logAction(request()->route()->action['can'], "Stats value $key with id $id was setted to $value.", request()->route()->action);
        return redirect()->back()->with('success', 'Stats value with id ' . $id . ' was updated.');
    } 
}