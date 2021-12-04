@extends('partials.layout')

@section('pageTitle', $hero->heroName.' - ')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">
        <div class="row">
                <div class="col-md-6 col-md-offset-3 newtext centered-list">
                        <div class="content-header" style="background: #532929; padding-left: 5px; text-align: center;">
                            <h2><a href="{{route('profile.details', $user->username)}}">{{$user->username}}</a></h2>
                            <h3>{{ $hero->heroName}}'s stats</h3>
                        </div>

                        <div class="content callout-secondary">
                            <div class="row">
                                <div class="hero-content">
                                        <div class="info-content col-md-5" style="margin-top: 5px;">
                                            <div class="col-lg-4 col-xs-4 hero-team team-{{ $hero->getTeam() }}"></div>
                                            <div class="col-lg-4 col-xs-4 hero-level level-{{ (int) $hero->getStat('level') }}"></div>
                                            <div class="col-lg-4 col-xs-4 hero-class class-{{ $hero->getClass() }}"></div>
                                        </div>
                                </div>
                            </div>
                        	<!--<h5><dt>Level: {{round($hero->getStat("level"))}}</dd></h5>-->
                            <?php
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
                                $prs = round($hero->getStat("prs"));
                                if($prs>0){
                                    $rotation = ($prs & 0xFF00)>>8;
                                    $level = $prs & 0x00FF;
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
                                }else{
                                    $level="No";
                                    $rotation="prestige";
                                }
                                $kills = round($hero->getStat("ki"));
                                $assists = round($hero->getStat("ka"));
                                $deaths = round($hero->getStat("dt"));
                                $bulfired = round($hero->getStat("fi"));
                                $hits = round($hero->getStat("hi"));
                                $wins = round($hero->getStat("win"));
                                $losses = round($hero->getStat("los"));
                                if($deaths!=0){
                                    $kd = round(($kills+$assists)/$deaths, 2);
                                }else{
                                    $kd = "inf.";
                                }
                                if($bulfired!=0){
                                    $accuracy = round($hits/$bulfired, 2);
                                }else{
                                    $accuracy = 0;
                                }
                                if($losses!=0){
                                    $ratio = round($wins/$losses, 2);
                                }else{
                                    if($wins>0){
                                        $ratio = "inf.";
                                    }else{
                                        $ratio = 0;
                                    }
                                }
                            ?>
                        	<h5 style="margin-top: 5px;"><dt>ELO</dt><dd>{{round($hero->getStat("elo"))}}</dd></h5>
                            <h5><dt>Kills</dt><dd>{{$kills}}</dd></h5>
                            <h5><dt>Assists</dt><dd>{{$assists}}</dd></h5>
                            <h5><dt>Deaths</dt><dd>{{$deaths}}</dd></h5>
                            <h5><dt>Accuracy</dt><dd>{{$accuracy}}</dd></h5>
                            <h5><dt>XP</dt><dd>{{round($hero->getStat("xp"))}}</dd></h5>
                            <h5><dt>Score</dt><dd>{{round($hero->getStat("rs"))}}</dd></h5>
                            <h5><dt>Wins</dt><dd>{{$wins}}</dd></h5>
                            <h5><dt>Losses</dt><dd>{{$losses}}</dd></h5>
                            <h5><dt>Capture</dt><dd>{{round($hero->getStat("cpc"))}}</dd></h5>
                            <h5><dt>AP</dt><dd>{{round($hero->getStat("c_wallet_hero"))}}</dd></h5>
                            <h5><dt>VP</dt><dd>{{round($hero->getStat("c_wallet_valor"))}}</dd></h5>
                            <h5><dt>RS</dt><dd>{{round($hero->getStat("rs"))}}</dd></h5>
                            <br>
                        </div>
                        <form method="POST" action="{{ route('admin.hero.updatestat', [$hero->id, 'key', 'value']) }}">
                                {{ csrf_field() }}
                                <input type="text" name="value" style="background-color: #FFF;color: #000">
                                <select name="key" style="background-color: #FFF;color: #000">
                                        <option value="c_wallet_hero">AP</option>
                                        <option value="c_wallet_valor">VP</option>
                                        <option value="rs">RS</option>
                                </select>
                                <button type="submit" class="button radius" style="margin-bottom:0px;margin-top:10px;">Set</button>
                            </form>
                    </div>
                </div>
    </section>

@stop
