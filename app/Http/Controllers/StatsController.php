<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Permission;
use App\Role;
use App\GameHeroes;
use App\GameStats;
use Illuminate\Support\Facades\DB;

class StatsController extends Controller {

    
    public function showStats()
    {
        $stats = \DB::select('SELECT stat, value FROM lifetime_stats WHERE 1 ORDER BY stat ASC');
        return view('stats', compact('stats'));
    }

    public function gatherStats(){
        $checks = array('Kills' => 'ki',
                        'Shots' => 'fi',
                        'Hits' => 'hi',
                        'Time' => 'ct',
                        'Suicides' => 'su',
                        'Score' => 'rs');

        foreach($checks as $key => $check){
            $stat = GameStats::where('statsKey', $check)->sum('statsValue');
            DB::table('lifetime_stats')
                ->where('stat', $key)
                ->update(['value' => $stat]);
        }

        $heroes1 = GameStats::where('statsKey', 'c_team')->where('statsValue', '1')->count();
        DB::table('lifetime_stats')
            ->where('stat', 'Nationals')
            ->update(['value' => $heroes1]);

        $heroes2 = GameStats::where('statsKey', 'c_team')->where('statsValue', '2')->count();
        DB::table('lifetime_stats')
            ->where('stat', 'Royals')
            ->update(['value' => $heroes2]);

        $heroes = $heroes1 + $heroes2;
        DB::table('lifetime_stats')
            ->where('stat', 'Heroes')
            ->update(['value' => $heroes]);

    } 
}