<?php

namespace App\Http\Controllers\Api;


use App\AuthenticationToken;
use function App\me;
use App\User;
use App\GameHeroes;
use Carbon\Carbon;
use Exception;
use Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Validator;

class ApiController extends Controller
{
    public function token()
    {
        $validation = \Validator::make(Request::all(), [
            'username' => ['required'],
            'password' => ['required']
        ]);
		
        if ($validation->fails())
            return ['error'=>$validation->errors()->first()];
		
		if (Auth::attempt(['username' => Request::get('username'), 'password' => Request::get('password')])) {
			//$token = Str::random(48);

            //will return 1 at least 
            $token = DB::table('game_heroes')->where('user_id', Auth::user()->id)->value('game_token');

            $UserId = Auth::id();
			while(AuthenticationToken::whereToken($token)->exists())

				if ( ! is_null($authToken = AuthenticationToken::whereUserId($UserId)->first()))
					$authToken->delete();
				$authToken = AuthenticationToken::create([
					'token' =>  $token,
					'user_id' => $UserId,
					'additional' => Request::get('additional', []),
					'expire_at' => date('Y-m-d H:i:s', strtotime('+3 month'))
                    
				]);

                DB::table('users')
                ->where('id', Auth::user()->id)
                ->update(['game_token' => $token]);
                //Auth::user()->update(['game_token' => $token]);

                // //update the same game_token on both tables because i did not fix fesl atm
                // DB::table('game_heroes')
                // ->where('id', Auth::user()->id)
                // ->update(['game_token' => $token]);

        //$username = DB::table('users')->where('id', Auth::user()->id);
        // DB::table('game_heroes')
        // ->where('id', Auth::user()->id)
        // ->update(['game_token' => $game_token]);
        // $sameToken = DB::table('game_heroes')->where('id', Auth::user()->id)->value('game_token');

        
				return ['token'=>$authToken->token];
		} else {
			return ['error'=>'Incorrect login'];
        }    
    }

    public function user()
    {
        $array = me();
        if(empty($array)){
            $array['response']='403';
            $array['error']='Wrong token';
            return $array;
        }
        $array['response']='200';
        return $array;
    }

    public function favourite($gid){
        if(!Auth::check()){
            return redirect()->back()->with('error', 'You have to login first!');
        }
        DB::delete('DELETE FROM game_player_server_preferences WHERE userid=?', [Auth::id()]);
        if($gid>0){
            DB::statement('INSERT INTO game_player_server_preferences (userid, gid)
                    VALUES (?, ?) ON DUPLICATE KEY UPDATE gid=?', [Auth::id(), $gid, $gid]);
            return redirect()->back()->with('success', 'Your favourite server have been changed!');
        }else{
            return redirect()->back()->with('success', 'Your favourite server have been reseted!');
        }
    }
}
