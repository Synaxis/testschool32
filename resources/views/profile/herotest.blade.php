@extends('partials.layout')

@section('pageTitle', $hero->heroName.' - ')

@section('content')

    @include('partials.inner_slider')

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
    <section id="main-content">
        <div class="row">
            <div class="col-md-12 newtext">
                <div class="content-header" style="background: #532929; padding-left:5px;text-align: left;">
                    <div class="hero-content">
                        <div class="info-content col-md-2" style="margin-top: 8px;left:8%;">
                            <div class="col-md-1 hero-team team-{{ $hero->getTeam() }}"></div>
                            <div class="col-md-1 col-md-offset-1 hero-level level-{{ (int) $hero->getStat('level') }}"></div>
                            <div class="col-md-1 col-md-offset-1 hero-class class-{{ $hero->getClass() }}"></div>
                        </div>
                    </div>
                    <h3 style="display: inline-block;margin-top:3px">{{ $hero->heroName}}</h3><h4 style="display: inline-block;color:yellow;">   {{$level . " " . $rotation}}</h4>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
                <div class="col-md-4 newtext centered-list">
                    <div class="content-header" style="background: #532929; padding-left: 5px; text-align: center;">
                        <h3>Your hero</h3>
                    </div>
                    <div class="content callout-secondary">
                        <div id="createHero" style="padding:0px;" class="selectedFaction{{(int)$hero->getStat('c_team')}} selectedHeroClass{{(int)$hero->getStat('c_kit')}} selectedHair{{(int)$hero->getStat('c_hrs')}} selectedFacialHair{{(int)$hero->getStat('c_ft')}} selectedHairColor{{(int)$hero->getStat('c_hrc')}} selectedSkinColor{{(int)$hero->getStat('c_skc')}}">
                            <div class="preview">
                                <div class="face"><span class="icon_skin"></span><span class="icon_facialHair"></span><span class="icon_hair"></span><span class="facialFeatures"></span></div>
                                <div class="doll"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 newtext centered-list">
                        <div class="content-header" style="background: #532929; padding-left: 5px; text-align: center;">
                            <!--<h2><a href="{{route('profile.details', $user->username)}}">{{$user->username}}</a></h2>-->
                            <h3>Soldier info</h3>
                        </div>

                        <div class="content callout-secondary">
                        	<!--<h6><dt>Level: {{round($hero->getStat("level"))}}</dd></h6>-->
                        	<h6 style="margin-top: 5px;"><dt>ELO</dt><dd>{{round($hero->getStat("elo"))}}</dd></h6>
                            <h6><dt>Kills</dt><dd>{{$kills}}</dd></h6>
                            <h6><dt>Assists</dt><dd>{{$assists}}</dd></h6>
                            <h6><dt>Deaths</dt><dd>{{$deaths}}</dd></h6>
                            <h6><dt>KDA</dt><dd>{{$kd}}</dd></h6>
                            <h6><dt>Accuracy</dt><dd>{{$accuracy}}</dd></h6>
                            <h6><dt>Suicides</dt><dd>{{round($hero->getStat("su"))}}</dd></h6>
                            <h6><dt>XP</dt><dd>{{round($hero->getStat("xp"))}}</dd></h6>
                            <h6><dt>Score</dt><dd>{{round($hero->getStat("rs"))}}</dd></h6>
                            <h6><dt>Wins</dt><dd>{{$wins}}</dd></h6>
                            <h6><dt>Losses</dt><dd>{{$losses}}</dd></h6>
                            <h6><dt>Ratio</dt><dd>{{$ratio}}</dd></h6>
                            <h6><dt>Capture</dt><dd>{{round($hero->getStat("cpc"))}}</dd></h6>
                            <h6><dt>Time</dt><dd>{{round($hero->getStat("ct"))}}</dd></h6>
                        </div>
                    </div>
                    <div class="col-md-4 newtext centered-list">
                        <div class="content-header" style="background: #532929; padding-left: 5px; text-align: center;">
                            <h3>Abilities</h3>
                        </div>
                        <div class="content callout-secondary">
                            <br>
                            @if(!empty($hero_ap))
                            @foreach($hero_ap as $ap)
                                <h6><dt><img style="width:36px;" src="/images/abilities/{{$ap[0]}}.png" class="armyflag" title="{{$ap[0]}}"></dt><dd style="margin-top:2px;">{{$ap[1]}}</dd></h6>
                            @endforeach
                            @endif
                            <br>
                        </div>
                        <br>
                        <div class="content-header" style="background: #532929; padding-left: 5px; text-align: center;">
                            <!--<h2><a href="{{route('profile.details', $user->username)}}">{{$user->username}}</a></h2>-->
                            <h3>Actions</h3>
                        </div>
                        <div class="content callout-secondary">
                            @if(Auth::id()==$hero->user_id)
                            <a id="rename"><h6>Rename</h6></a>
                            <a id="refund"><h6>Refund</h6></a>
                            @endif
                            <a href="{{route('profile.details', $user->username)}}"><h6>Profile</h6></a>
                        </div>
                    </div>
                </div>
    </section>
    {{ csrf_field() }}
    <script type="text/javascript">
        $("#refund").click( function () {
            swal({
              title: 'Are you sure?',
              text: "This cost 500VP and can't be reverted!",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, reset!',
              cancelButtonText: 'No, cancel!',
              confirmButtonClass: 'btn btn-success',
              cancelButtonClass: 'btn btn-danger',
              buttonsStyling: true
            }).then((result) => {
              if (result.value) {
                $.ajax({
                  type: "POST",
                  data: {
                    '_token': $("input[name=_token]").val(),
                    'reset': 'abilities' 
                  },
                  url: '{{route('hero.refundAP', $hero->heroName)}}',
                  success: function(data){
                    swal("Info", data, "info");
                  },
                  error: function(data) {
                    swal("Cancelled", "Your abilities were not refunded.", "error");
                  }
                });
              }else if(result.dismiss === 'cancel') {
                swal(
                  'Cancelled',
                  'Your abilities were not refunded.',
                  'error'
                )
              }
            })
        });
        $("#rename").click( function () {
            swal({
              title: 'Are you sure?',
              text: "This cost 1500VP and can't be reverted!",
              input: 'text',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, rename!',
              cancelButtonText: 'No, cancel!',
              confirmButtonClass: 'btn btn-success',
              cancelButtonClass: 'btn btn-danger',
              buttonsStyling: true
            }).then((result) => {
              if (result.value) {
                $.ajax({
                  type: "POST",
                  data: {
                    'name' : result.value,
                    '_token': $("input[name=_token]").val(),
                  },
                  url: '{{route('hero.rename', $hero->heroName)}}',
                  success: function(data){
                    swal("Info", data, "info");
                  },
                  error: function(data) {
                    swal("Cancelled", "Your hero was not renamed.", "error");
                  }
                });
              }else if(result.dismiss === 'cancel') {
                swal(
                  'Cancelled',
                  'Your hero was not renamed.',
                  'error'
                )
              }
            })
        });
    </script>
@stop
