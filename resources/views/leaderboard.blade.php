@extends('partials.layout')

@section('pageTitle', 'Leaderboard - ')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">
		        <div class="row">
	            <div class="small-16 columns">
                <nav>
				
                    <h3 class="newtext">
                        Rising Heroes @lang('layout.leaderboard')
                    </h3>
					 <h5 class="newtext">
                        Top 100 <?= $type?>
                    </h5>
                </nav>
                <div class="clearfix"></div>
                <div class="big-sep"></div>
        <div class="row">
            <div class="small-16 columns">
                <h6><a href="{{route('leaderboard', 'elo')}}" class="newtext">ELO</a>
                    <a href="{{route('leaderboard', 'score')}}" class="newtext">Score</a>
                    <a href="{{route('leaderboard', 'level')}}" class="newtext">Level</a>
                    <a href="{{route('leaderboard', 'vp')}}" class="newtext">VP</a>
                    <a href="{{route('leaderboard', 'time')}}" class="newtext">Time</a>
                    <a href="{{route('leaderboard', 'kills')}}" class="newtext">Kills</a>
                    <a href="{{route('leaderboard', 'assists')}}" class="newtext">Assists</a>
                    <a href="{{route('leaderboard', 'deaths')}}" class="newtext">Deaths</a>
                    <a href="{{route('leaderboard', 'capture')}}" class="newtext">Capture</a>
                    <a href="{{route('leaderboard', 'kill_streak')}}" class="newtext">Kill Streak</a>
                    <a href="{{route('leaderboard', 'death_streak')}}" class="newtext">Death Streak</a>
                    <a href="{{route('leaderboard', 'prestige')}}" class="newtext">Prestige</a>
                </h6>
            </div>
		@if(\App\can('game.createhero'))
            <table>
                <thead>
                <tr>
					<th>@lang('layout.rank')</th>
                    <th>@lang('layout.heroname')</th>
                    <th>@lang('layout.score')</th>
                </tr>
                </thead>
                <tbody>
                <?php $i=1?>
				@foreach($lb as $hero)
				<tr>
							<td>
							<?php
							echo $i++;
							?>
                            </td>
							<td>
                                @if(in_array($hero->heroName, $heronames, true))
                                    <a style="color:#000;font-weight: bold;" href="{{ route('hero.detailsFromName', $hero->heroName) }}">{{ $hero->heroName }}</a>
                                @else
                                    <a style="color:#000;" href="{{ route('hero.detailsFromName', $hero->heroName) }}">{{ $hero->heroName }}</a>
                                @endif    
                            </td>
                            <td>
                                @if($type!="prestige")
                                    {{round($hero->statsValue)}}
                                @else
                                    {{$hero->statsValue}}
                                @endif
                            </td>

                </tr>
				@endforeach						
                </tbody>
            </table>
        @else
            <h4 class="newtext">
                   You are not logged in.
            </h4>
		@endif
			
				</div>
				</div>
    </section>

@stop
