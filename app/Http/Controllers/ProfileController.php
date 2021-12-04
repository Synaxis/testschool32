<?php

namespace App\Http\Controllers;

use App;
use App\FriendRequest;
use App\GameHeroes;
use App\GameServerPlayerStats;
use Illuminate\Support\Facades\DB;
use App\GameStats;
use App\User;
use GuzzleHttp;
use App\UserFriend;
use App\UserSignature;
use App\UserDiscord;
use App\GameServerStats;
use Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;

class ProfileController extends Controller
{
    // User profiles
    // A users own profile
    public function lists()
    {
        $friends = Auth::user()->friends();
        foreach($friends as $friend){
          $heroes = GameHeroes::where('user_id', $friend->id)->get();
          foreach($heroes as $hero){
            if(GameServerPlayerStats::where('pid', $hero->id)->where('statsKey', 'P-time')->where('updated_at', '>', date(DATE_ATOM, strtotime('+115 minutes')))->orderBy('updated_at', 'desc')->exists()){
              $game = GameServerPlayerStats::where('pid', $hero->id)->where('statsKey', 'P-time')->orderBy('updated_at', 'desc')->first();
              $friend['gid'] = $game->gid;
              $server = GameServerStats::where('gid', $game->gid)->where('statsKey', 'NAME')->first();
              $friend['gid_name'] = preg_replace("/\([^)]+\)/","",$server->statsValue);
              $friend['ptime'] = $game->statsValue;
              break;
            }
          }
        }
        return view('profile.lists', compact('friends'));
    }

    public function addSignature()
    {
        return redirect()->back()->with('success', 'Your signature got added!');
        // if(can('user.addsignature')){
        //     $validation = Validator::make(Input::all(), [
        //         'image' => 'image|mimes:jpg,jpeg,png,gif',
        //     ]);
        //     if ($validation->fails())
        //         return redirect()->back()->with('error', 'You must only upload PNG, JPG, and GIF files!');

        //     if( ! Input::hasFile('image'))
        //         return redirect()->back()->with('error', 'You need to have a image chosen.');

        //     $file = Input::file('image');
        //     $fileName = $file->getClientOriginalName();
        //     $ext = pathinfo($fileName, PATHINFO_EXTENSION);

        //     if (!in_array($ext, ["jpg", "jpeg", "png", "gif"], true))
        //         return redirect()->back()->with('error', 'You must only upload PNG, JPG, and GIF files!');

        //     $newFileName = str_random(48) . ".$ext";
        //     $file->move(public_path() . '/images/signatures/', $newFileName);

        //     if(UserSignature::where('user_id', Auth::id())->exists())
        //         UserSignature::where('user_id', Auth::id())->first()->update([
        //             'image' => '/images/signatures/' . $newFileName,
        //         ]);
        //     else
        //         UserSignature::create([
        //             'user_id' => Auth::id(),
        //             'image' => '/images/signatures/' . $newFileName,
        //         ]);

        //     return redirect()->back()->with('success', 'Your signature got added!');
        // }else{
        //     return redirect()->back()->with('error', 'You are not allowed to add avatar.');
        // }
    }

    public function addAvatar()
    {

        return redirect()->back()->with('error', 'You are not allowed to add avatar.');
        // if(can('user.addavatar')){
        //     $validation = Validator::make(Input::all(), [
        //         'image' => 'image|mimes:jpg,jpeg,png,gif',
        //     ]);
        //     if ($validation->fails())
        //         return redirect()->back()->with('error', 'You must only upload PNG, JPG, and GIF files!');

        //     if( ! Input::hasFile('image'))
        //         return redirect()->back()->with('error', 'You need to have a image chosen.');

        //     $newFileName = str_random(48) . ".png";
        //     $file = Image::make(Input::file('image'))->resize(250, 250)->encode('png', 75);
        //     $file->save(public_path('images/avatars/'. $newFileName));

        //     Auth::user()->update(['avatar' => '/images/avatars/' . $newFileName]);

        //     return redirect()->back()->with('success', 'Your avatar got added!');
        // }else{
        //     return redirect()->back()->with('error', 'You are not allowed to add avatar.');
        // }
    }

    public function addDescription()
    {

        return redirect()->back()->with('error', 'You are not allowed to add description.');
        // if(can('user.adddescription')){
        //     if(Input::get('description') == '')
        //         return redirect()->back()->with('error', 'The description cannot be empty!');
        //     $description = str_replace(['&lt;script&gt;'], '', Input::get('description'));
        //     $description = str_replace(['&lt;/script&gt;'], '', $description);

        //     Auth::user()->update([
        //         'description' => $description
        //     ]);

        //     return redirect()->back()->with('success', 'Your description got updated!');
        // }else{
        //     return redirect()->back()->with('error', 'You are not allowed to add description.');
        // }
    }

    public function details($username)
    {
        if( ! User::where('username', $username)->exists())
            abort(404);

        $user = User::where('username', $username)->first();
        $heroes = GameHeroes::where('user_id',Auth::user()->id)->get();
        foreach ($heroes as $hero) {
            $hero->hero_stats = json_decode($hero->hero_stats,true);
        }
        return view('profile.details')->with('heroes',$heroes)->with('user',$user);
    }

    /**
     * Returns a detailed view about a hero.
     *
     * @param Request $request
     * @param $username
     * @param $heroname
     * @return \Illuminate\View\View
     */

    public function heroDetails(Request $request, $username, $heroname)
    {
        if( ! User::where('username', $username)->exists())
            abort(404);
        if( ! GameHeroes::where('heroName', $heroname)->exists())
            abort(404);
        $hero = GameHeroes::where('heroName', $heroname)->first();
        $user = User::where('id', $hero->user_id)->first();
        //dd($user->heroes);
        $hero = GameHeroes::where('heroName', $heroname)->first();
        $user = User::where('id', $hero->user_id)->first();
        $input = $hero->getStat("c_items");
        $split = explode(';', $input);
        $mapping = array("national_gunner" => "ff_nat,ek_nat,hs_nat,ieg_nat,li_nat",
                         "royal_gunner" => "ff_roy,ek_roy,hs_roy,ieg_roy,li_roy",
                         "national_soldier" => "bs_nat,ss_nat,gs_nat,bb_nat,cm_nat",
                         "royal_soldier" => "bs_roy,ss_roy,gs_roy,bb_roy,cm_roy",
                         "national_commando" => "st_nat,tt_nat,ps_nat,el_nat,pb_nat,mt_nat",
                         "royal_commando" => "st_roy,tt_roy,ps_roy,el_roy,pb_roy,mt_roy"
                        );
        $ability = array("ff_nat" => "2060,2061,2062,2063,2064",
                       "ek_nat" => "2050,2051,2052,2053,2151",
                       "hs_nat" => "2026,2027,2028,2029,2030",
                       "ieg_nat" => "2036,2037,2038,2039,2040",
                       "li_nat" => "2091,2092,2093,2094,2095",

                       "ff_roy" => "2055,2056,2057,2058,2059",
                       "ek_roy" => "2046,2047,2048,2049,2152",
                       "hs_roy" => "2026,2027,2028,2029,2030",
                       "ieg_roy" => "2031,2032,2033,2034,2035",
                       "li_roy" => "2091,2092,2093,2094,2095",

                       "bs_nat" => "2021,2022,2023,2024,2025",
                       "ss_nat" => "2131,2132,2133,2134,2135",
                       "gs_nat" => "2070,2071,2072,2073,2074",
                       "bb_nat" => "2086,2087,2088,2089,2090",
                       "cm_nat" => "2075,2076,2077,2078,2079",

                       "bs_roy" => "2016,2017,2018,2019,2020",
                       "ss_roy" => "2126,2127,2128,2129,2130",
                       "gs_roy" => "2065,2066,2067,2068,2069",
                       "bb_roy" => "2081,2082,2083,2084,2085",
                       "cm_roy" => "2075,2076,2077,2078,2079",

                       "st_nat" => "2141,2142,2143,2144,2145",
                       "tt_nat" => "2111,2112,2113,2114,2115",
                       "ps_nat" => "2101,2102,2103,2104,2105",
                       "el_nat" => "2041,2042,2043,2044,2045",
                       "pb_nat" => "2011,2012,2013,2015,2015",
                       "mt_nat" => "2121,2122,2123,2124,2125",

                       "st_roy" => "2136,2137,2138,2139,2140",
                       "tt_roy" => "2106,2107,2108,2109,2110",
                       "ps_roy" => "2096,2097,2098,2099,2100",
                       "el_roy" => "2041,2042,2043,2044,2045",
                       "pb_roy" => "2006,2007,2008,2009,2010",
                       "mt_roy" => "2116,2117,2118,2119,2120",
                      );
        $list_ability = $mapping[$hero->getTeam() . "_" . $hero->getClass()];
        $list_ability = explode(",", $list_ability);
        foreach($list_ability as $item){
            $abilities = explode(",", $ability[$item]);
            for($i=4;$i>0;$i--){
                if(in_array($abilities[$i], $split)){
                    $hero_ap[] = array($item,$i+1);
                    break;
                }
            }
        }

        return view('profile.herotest', compact('hero', 'user', 'hero_ap', 'weapons'));
    }

    public function heroFromNameDetails(Request $request, $heroname)
    {
        if( ! GameHeroes::where('heroName', $heroname)->exists())
            abort(404);
        $hero = GameHeroes::where('heroName', $heroname)->first();
        $user = User::where('id', $hero->user_id)->first();
        $input = $hero->getStat("c_items");
        $split = explode(';', $input);
        $mapping = array("national_gunner" => "ff_nat,ek_nat,hs_nat,ieg_nat,li_nat",
                         "royal_gunner" => "ff_roy,ek_roy,hs_roy,ieg_roy,li_roy",
                         "national_soldier" => "bs_nat,ss_nat,gs_nat,bb_nat,cm_nat",
                         "royal_soldier" => "bs_roy,ss_roy,gs_roy,bb_roy,cm_roy",
                         "national_commando" => "st_nat,tt_nat,ps_nat,el_nat,pb_nat,mt_nat",
                         "royal_commando" => "st_roy,tt_roy,ps_roy,el_roy,pb_roy,mt_roy"
                        );
        $ability = array("ff_nat" => "2060,2061,2062,2063,2064",
                       "ek_nat" => "2050,2051,2052,2053,2151",
                       "hs_nat" => "2026,2027,2028,2029,2030",
                       "ieg_nat" => "2036,2037,2038,2039,2040",
                       "li_nat" => "2091,2092,2093,2094,2095",

                       "ff_roy" => "2055,2056,2057,2058,2059",
                       "ek_roy" => "2046,2047,2048,2049,2152",
                       "hs_roy" => "2026,2027,2028,2029,2030",
                       "ieg_roy" => "2031,2032,2033,2034,2035",
                       "li_roy" => "2091,2092,2093,2094,2095",

                       "bs_nat" => "2021,2022,2023,2024,2025",
                       "ss_nat" => "2131,2132,2133,2134,2135",
                       "gs_nat" => "2070,2071,2072,2073,2074",
                       "bb_nat" => "2086,2087,2088,2089,2090",
                       "cm_nat" => "2075,2076,2077,2078,2079",

                       "bs_roy" => "2016,2017,2018,2019,2020",
                       "ss_roy" => "2126,2127,2128,2129,2130",
                       "gs_roy" => "2065,2066,2067,2068,2069",
                       "bb_roy" => "2081,2082,2083,2084,2085",
                       "cm_roy" => "2075,2076,2077,2078,2079",

                       "st_nat" => "2141,2142,2143,2144,2145",
                       "tt_nat" => "2111,2112,2113,2114,2115",
                       "ps_nat" => "2101,2102,2103,2104,2105",
                       "el_nat" => "2041,2042,2043,2044,2045",
                       "pb_nat" => "2011,2012,2013,2015,2015",
                       "mt_nat" => "2121,2122,2123,2124,2125",

                       "st_roy" => "2136,2137,2138,2139,2140",
                       "tt_roy" => "2106,2107,2108,2109,2110",
                       "ps_roy" => "2096,2097,2098,2099,2100",
                       "el_roy" => "2041,2042,2043,2044,2045",
                       "pb_roy" => "2006,2007,2008,2009,2010",
                       "mt_roy" => "2116,2117,2118,2119,2120",
                      );
        $list_ability = $mapping[$hero->getTeam() . "_" . $hero->getClass()];
        $list_ability = explode(",", $list_ability);
        foreach($list_ability as $item){
            $abilities = explode(",", $ability[$item]);
            for($i=4;$i>0;$i--){
                if(in_array($abilities[$i], $split)){
                    $hero_ap[] = array($item,$i+1);
                    break;
                }
            }
        }

        return view('profile.herotest', compact('hero', 'user', 'hero_ap', 'weapons'));
    }

    public function answerFriendRequest()
    {
        Auth::user()->friendRequestAnswer(Input::get('sender'), Input::get('answer'));

        return redirect()->back()->with('success', Input::get('answer') == 'accepted' ? 'You accepted the friend request!' : 'You declined the friend request!');
    }

    public function removeFriend($user_id)
    {
        if(UserFriend::where('user_id', $user_id)->where('friend_id', Auth::id())->exists())
        {
            UserFriend::where('user_id', $user_id)->where('friend_id', Auth::id())->first()->delete();
            return redirect()->back()->with('success', 'Your friend was removed!');
        } elseif (UserFriend::where('friend_id', $user_id)->where('user_id', Auth::id())->exists())
        {
            UserFriend::where('friend_id', $user_id)->where('user_id', Auth::id())->first()->delete();
            return redirect()->back()->with('success', 'Your friend was removed!');
        } else
            return redirect()->back()->with('error', 'This user is not your friend!');
    }

    public function addFriend($user)
    {
        // Check if a friend request already exists.
        // If it does, add friend.
        if (FriendRequest::where('receiver', Auth::id())->where('sender', $user)->exists())
        {
            Auth::user()->addFriend($user);
            return redirect()->back()->with('success', User::find($user)->username . ' was added to your friend list');
        }
        else
        // If not, send one.
        {
            Auth::user()->sendFriendRequest($user);
            return redirect()->back()->with('success', 'A friend request was sent!');
        }
    }

    public function changePassword()
    {
        if (Hash::check(Input::get('current_password'), Auth::user()->password)) {
            if(Input::get('new_password') == Input::get('new_password_confirmed'))
            {
                //Auth::user()->update(['password', Hash::make(Input::get('new_password'))]);
                $user_id = Auth::User()->id; 
                $obj_user = User::find($user_id);
                $obj_user->password = Hash::make(Input::get('new_password'));;
                $obj_user->save();
                return redirect()->back()->with('success', 'Your password was changed!');
            }
            else
                return redirect()->back()->with('error', 'The two new passwords do not match!');
        } else {
            return redirect()->back()->with('error', 'Your current password does not match your input.');
        }
    }

    public function createHero()    {

            $heroesAllowed = 16;


            return view('profile.createHero');

        
    }

    public function doCreateHero()
    {
        $heroesAllowed = 16;        

        $validation = \Validator::make(Request::all(), [
            'nameCharacterText' => 'required|regex:/^([a-zA-Z0-9-_]*)$/'
        ]);

        
        
        if ($validation->fails())
        return \Redirect::to(\URL::previous())->with('error', 'Invalid HeroName')->withInput();

        $default = '{"c_ft":"'.Request::get('facial_ui_name').'","c_team":"'.Request::get('baseMSGFactionStats').'","c_hrc":"'.Request::get('haircolor_ui_name').'","c_hrs":"'.Request::get('baseMSGAppearanceHairStyleStats').'","c_skc":"'.Request::get('baseMSGAppearanceSkinToneStats').'","c_ltp":"0.0000","c_ltm":"0.0000","c_fhrs":"","c_slm":"2.0000","cdm":"","edm":"","c_kit":"'.Request::get('baseMSGPersonaClassStats').'","c_wallet_hero":"15","c_wallet_valor":"13","games":"1.000","elo":"1000","level":"30","xp":"","ct":"","ki":"","dt":"","su":"","win":"","los":"","fi":"","hi":"","rs":"","ts":"","ss":"","cs":"","prs":"","ppt":"","c_tut":"","awybt":"","dmc":"","gsco":"","expts":"","bnspt":"","aw":{},"mid":{},"c_mid":{},"c_cmid":{},"m0c":{},"m1c":{},"m2c":{},"c_wmid":{},"startLVL":"","roundXP":"","roundBXP":"","roundVP":"","roundBVP":"","roundHP":"","roundPP":"","roundBPP":"","totalPP":"","cpc":"","cpa":"","cpd":"","rc":"","ks":"","ds":"","ft_rs":{},"ft_ki":{},"ft_dt":{},"ft_win":{},"ft_los":{},"fc_rs":{},"fc_ki":{},"fc_dt":{},"fc_win":{},"fc_los":{},"m_ct":{},"m_win":{},"m_los":{},"tv":{},"kv":{},"dfv":{},"kvr":{},"dstrv":{},"div":{},"tw":{},"twk":{},"kw":{},"dfw":{},"sw":{},"hw":{},"dww":{},"kk":{},"kkb":{},"ka":"","he":"","drka":"","c_apr":[],"c_emo":[],"c_eqp":["3184","0","0","3155","0","0","0","0","0","0"],"c_items":[],"ige":{}}';
                $game_token = Str::random(48);

        $username = DB::table('users')->where('id', Auth::user()->id);
        DB::table('users')
        ->where('id', Auth::user()->id)
        ->update(['game_token' => $game_token]);
        //$sameToken = DB::table('game_heroes')->where('id', Auth::user()->id)->value('game_token');


        $hero = GameHeroes::create([
            'user_id' => Auth::id(),
            'heroID' => 'user_id',
            'heroName' => Request::get('nameCharacterText'),
            'online' => 0,
            'ip_address' => "127.6.6.6",
            'hero_stats' => $default,
            'game_token' => $game_token,
        ]); 
        
        return redirect()->route('home')->with('Success', 'Sucess! now go to the client!');
    }

    //leave me here
    // public function bookmark()
    // {
    //     if(!Auth::check()){
    //         return redirect()->back()->with('error', 'Please login first!');
    //     }
    //     $S = DB::table('game_player_server_preferences')->where('gid', Auth::user()->gid)->first();
    //     $SelectedServer = -1;        
	// 	if ($S)
	// 	{
	// 		$SelectedServer = $S->$gid;
	// 	}        
    //     $gid = "$SelectedServer";
	// 	if (!DB::table('game_player_server_preferences')->where('userid', Auth::user()->id)->first()){            

    //     DB::table('game_player_server_preferences')->insert(
    //         [
    //             'userid' => Auth::user()->id,
    //             'gid' => $SelectedServer
    //         ]
    //     );
    // } else {
    //     DB::table('game_player_server_preferences')
    //         ->where('userid', Auth::user()->id)
    //         ->update(['gid' => $gid]);
    //     }
    //     return redirect()->back()->withSuccess("Success! , now click playnow on the Client!");
    // }
    
    
    public function createHeroAvailability()
    {
        return true;
    }

    public function answerAll()
    {
        foreach (Auth::user()->friendRequests as $request)
            Auth::user()->friendRequestAnswer($request->sender, Input::get('answer'));

        return redirect()->back()->with('success', Input::get('answer') == 'accepted' ? 'You accepted the all friend requests!' : 'You declined the all friend requests!');
    }
}
