<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use App;
use App\FriendRequest;
use App\GameHeroes;
use App\GameServerPlayerStats;
use App\GameStats;
use App\User;
use GuzzleHttp;
use App\UserFriend;
use App\UserSignature;
use App\GameServerStats;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use function App\logAction;

class HeroController extends Controller
{
  public function refundAP(Request $request, $heroname)
    {
        if(!GameHeroes::where('heroName', $heroname)->exists())
            abort(404);
        $hero = GameHeroes::where('heroName', $heroname)->first();
        $user = User::where('id', $hero->user_id)->first();
        $valor = $hero->getStat('c_wallet_valor');
        if($hero->user_id==Auth::id()){
          if($valor>=500){
            Auth::user()->update(['game_token' => null]);
            GameStats::where('heroID', $hero->id)->where('statsKey', 'c_items')->update(['statsValue' => '']);
            GameStats::where('heroID', $hero->id)->where('statsKey', 'c_wallet_hero')->update(['statsValue' => (int)($hero->getStat('level')/2) . '.0000']);
            GameStats::where('heroID', $hero->id)->where('statsKey', 'c_wallet_valor')->update(['statsValue' => $valor-500 . '.0000']);
            echo "Your abilities were refunded!";
          }else{
            echo "Not enough VP.";
          }
        }else{
          echo "It's not your hero, hackerman!";
        }
    }

    public function rename(Request $request, $heroname)
    {
        $validation = \Validator::make(Request::all(), [
            'name' => 'required|regex:/^([a-zA-Z0-9-_]*)$/'
        ]);
        if ($validation->fails()){
            echo "Hero name can contain only - and _ as special characters!";
            return;
        }
        $name = Input::get('name');
        if(empty($name)){
          echo "Name can't be empty!";
          return;
        } 
        if(!GameHeroes::where('heroName', $heroname)->exists())
            abort(404);
        if(GameHeroes::where('heroName', $name)->exists()){
          echo "This hero name is taken!";
          return;
        }
        $hero = GameHeroes::where('heroName', $heroname)->first();
        $user = User::where('id', $hero->user_id)->first();
        $valor = $hero->getStat('c_wallet_valor');
        if($hero->user_id==Auth::id()){
          if($valor>=1500){
            GameHeroes::where('heroName', $heroname)->update(['heroName' => $name]);
            GameStats::where('heroID', $hero->id)->where('statsKey', 'c_wallet_valor')->update(['statsValue' => $valor-1500 . '.0000']);
            echo "Your hero was renamed!";
            logAction('rename', "Hero $heroname was renamed to $name.", request()->route()->action);
          }else{
            echo "Not enough VP.";
          }
        }else{
          echo "It's not your hero, hackerman!";
        }
    }
}