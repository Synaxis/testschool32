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
                            <h5><dt>KDA</dt><dd>{{$kd}}</dd></h5>
                            <h5><dt>Accuracy</dt><dd>{{$accuracy}}</dd></h5>
                            <h5><dt>Suicides</dt><dd>{{round($hero->getStat("su"))}}</dd></h5>
                            <h5><dt>XP</dt><dd>{{round($hero->getStat("xp"))}}</dd></h5>
                            <h5><dt>Score</dt><dd>{{round($hero->getStat("rs"))}}</dd></h5>
                            <h5><dt>Wins</dt><dd>{{$wins}}</dd></h5>
                            <h5><dt>Losses</dt><dd>{{$losses}}</dd></h5>
                            <h5><dt>Ratio</dt><dd>{{$ratio}}</dd></h5>
                            <h5><dt>Prestige</dt><dd>{{$level . " " . $rotation}}</dd></h5>
                            <h5><dt>Capture</dt><dd>{{round($hero->getStat("cpc"))}}</dd></h5>
                            <h5><dt>Time</dt><dd>{{round($hero->getStat("ct"))}}</dd></h5>
                            @if(!empty($hero_ap))
                            @foreach($hero_ap as $ap)
                                <h5><dt><img style="width:36px;" src="/images/abilities/{{$ap[0]}}.png" class="armyflag" title="{{$ap[0]}}"></dt><dd style="margin-top:2px;">{{$ap[1]}}</dd></h5>
                            @endforeach
                            @endif
                            <br>
                        </div>
                    </div>
                </div>
                
                	<div class="row">
            <div class="card small-16 large-centered columns" style="text-align: center; margin-top:1rem; vertical-align:middle;">
                <dl>
                    <dt style="text-transform: uppercase;font-size: 0.73333rem;color: #271d21;">Advertisement</dt>
                    <dd>
                        <div id="FGus239aiSAGisa32s2" style="display: none;">
                            <img src="{{ asset('images/blocked_sadface.png') }}" alt="sadface"/>
                        </div>
                        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                        <!-- CreateAHero -->
                        <ins class="adsbygoogle"
                             style="display:block"
                             data-ad-client="ca-pub-8623333216955188"
                             data-ad-slot="6146466290"
                             data-ad-format="auto"></ins>
                        <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </dd>
                </dl>
            </div>
        </div>
                
    </section>

@stop
