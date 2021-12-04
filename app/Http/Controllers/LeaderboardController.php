<?php

namespace App\Http\Controllers;

use App\GameHeroes;
use App\GameServerStats;
use App\User;
use Illuminate\Routing\Controller as BaseController;
use App\GameServerPlayerStats;
use Ramsey\Uuid\Codec\TimestampFirstCombCodec;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

date_default_timezone_set("UTC");

class LeaderboardController extends BaseController
{
	
    public function listheroes($type)
    {
    	if(!in_array($type, ["elo", "score", "level", "vp", "time", "kills", "assists", "deaths", "capture", "kill_streak", "death_streak", "prestige"], true))	
    		$type = "score";
    	switch ($type) {
    		case "vp":
    			$type_get="c_wallet_valor";
    			break;
		    case "score":
		        $type_get="rs";
		        break;
		    case "level":
		    	$type_get="level";
		        break;
		    case "time":
		    	$type_get="ct";
		        break;
		    case "elo":
		    	$type_get="elo";
		        break;
		    case "kills":
		    	$type_get="ki";
		        break;
		    case "assists":
		    	$type_get="ka";
		        break;
		    case "deaths":
		    	$type_get="dt";
		        break;
		    case "capture":
		    	$type_get="cpc";
		        break;
		    case "kill_streak":
		    	$type_get="ks";
		        break;
		    case "death_streak":
		    	$type_get="ds";
		        break;
		    case "prestige":
		    	$type_get="prs";
		    	break;
		    default:
		   		$type_get=$type;
		        break;
		}
		$lb = DB::select('SELECT b.heroName, a.`statsValue` FROM `game_stats` a LEFT JOIN game_heroes b ON b.`id` = a.`heroID` WHERE a.`statsKey`="' . $type_get .'" ORDER BY length(a.`statsValue`) DESC, a.`statsValue` DESC LIMIT 100');
		if($type_get=="prs"){
			function rome($num)  
			{ 
			     $n = intval($num); 
			     $result = ''; 
			     $lookup = array('M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 
			     'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 
			     'X' => 10, 'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1); 
			     foreach ($lookup as $roman => $value)  
			     { 
			         $matches = intval($n / $value); 
			         $result .= str_repeat($roman, $matches); 
			         $n = $n % $value; 
			     } 
			     return $result; 
			} 

			foreach($lb as $hero){
				$rotation = ($hero->statsValue & 0xFF00)>>8;
				$level = $hero->statsValue & 0x00FF;
		        $rotation = rome($rotation);
		        switch($level){
		        	case 1:
		        		$level="Private";
		        		break;
		        	case 2:
						$level="Specialist";
		        		break;
					case 3:
						$level="Corporal";
		        		break;
					case 4: 
						$level="Sergeant";
		        		break;
					case 5: 
						$level="Lieutenant";
		        		break;
					case 6: 
						$level="Captain";
		        		break;
					case 7: 
						$level="Major";
		        		break;
					case 8: 
						$level="LT.Colonel";
		        		break;
					case 9: 
						$level="Colonel";
		        		break;
					case 10: 
						$level="Brigadier General";
		        		break;
					case 11:
						$level="Major General";
		        		break;
					case 12;
						$level="LT.General";
		        		break;
					case 13:
						$level="General";
		        		break;
		        }
		        $hero->statsValue = $level . " " . $rotation;
			}
		}
		if(Auth::check() && GameHeroes::where('user_id', Auth::id())){
			$heroes=GameHeroes::where('user_id', Auth::id())->get();
			foreach($heroes as $hero){
				$heronames[] = $hero->heroName;
			}
		}


	        return view('leaderboard', compact('lb', 'type', 'heronames'));
	    }


}
