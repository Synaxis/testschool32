<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\GameHeroes;
use Illuminate\Support\Facades\Auth;

class MatchmakingController extends Controller
{
    public function findgame($shard, $heroid, $ipint)
    {
        $ip = long2ip(intval($ipint));
        $geo = geoip($ip);

        $cont = $geo['continent'];

        // I know this isn't the best yet

        $hero = GameHeroes::where('id', $heroid)->first();
        $team = 'B-U-avail_slots_' . $hero->getTeam();

        $gid = \DB::select('SELECT gid FROM game_player_server_preferences WHERE userid = ?', [$hero->user_id]);
        $selectedgid = '';
        $results = [];

		$region = \DB::select('SELECT region FROM game_player_regions WHERE userid = ?', [$hero->user_id]);
		if (count($region) > 0)
		{
			$cont = $region[0]->region;
		}

		$games = \DB::select("SELECT a.gid, b.statsValue as `percent_full`, c.statsValue as `available_slots`
			FROM games a
			LEFT JOIN game_server_regions ON a.game_ip = game_server_regions.game_ip
			LEFt JOIN game_server_stats b ON b.gid = a.gid
			LEFT JOIN game_server_stats c ON c.gid = a.gid
			WHERE a.shard = ?
				AND (region = ? OR region IS NULL)
				AND (b.statsKey = 'B-U-percent_full' AND b.statsValue != '100')
				AND (c.statsKey = ? AND c.statsValue = 'yes')
			ORDER BY region DESC, percent_full DESC
			", [$shard, $cont, $team]);

		foreach ($games as $game)
		{
			$results[] = $game->gid;
		}
		if (count($gid) > 0)
        {
            $selectedgid = $gid[0]->gid;
			if(in_array($selectedgid, $results)){
				echo $selectedgid;
			}else{
				echo join(',', $results);
			}
		}else{
			echo join(',', $results);
		}    
    }
}
