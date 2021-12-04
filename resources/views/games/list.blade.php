@extends('partials.layout')

@section('pageTitle', 'Games - ')

@section('content')

    @include('partials.inner_slider')

    <div class="content-top"></div>

    <section id="main-content">

        <div class="row">
            <div class="small-16 columns">
                <nav>
                    <h3>
                        Active Games
                    </h3>
                </nav>
                <div class="big-sep"></div>
            </div>
        </div>

        <div class="row">


            {{--<div class="small-16 columns" style="background-color: rgba(255, 255, 255, 0.15); padding-top:1rem; padding-bottom:1rem; ">
                <form method="POST" action="/games/launcher">
                    {{ csrf_field() }}
                    <div class="small-8 columns">
                        <select name="region" style="margin: 0 0 0; margin-bottom: 0rem;">
                            <option value="AUTO" {{ ($selectedregion == '') ? 'selected' : '' }}>Automatic</option>
                            <option value="EU" {{ ($selectedregion == 'EU') ? 'selected' : '' }}>Europe</option>
                            <option value="NA" {{ ($selectedregion == 'NA') ? 'selected' : '' }}>North America</option>
                        </select>
                    </div>
                    <div class="small-8 text-center columns" style="padding-left:0rem;">
                        <button class="lime-button" type="submit">Change Preferred Region</button>
                    </div>
                </form>
            </div>--}}

            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Hostname</th>
                    <th>Players</th>
                    <th>Map</th>
                    <th>Region</th>
                </tr>
                </thead>
                <tbody>
                    @foreach($activegames as $gid => $game)
                    {{ csrf_field() }}
                        @if($selectedgid!=$game['GID']->statsValue)
                        <tr>
                        @else
                        <tr style="background-color:grey;">
                        @endif
                            <td>
                                @if($selectedgid!=$game['GID']->statsValue)
                                <a href="/api/favourite/{{ $game['GID']->statsValue}}" class="button radius">✔</a>
                                @else
                                <a href="/api/favourite/0" class="button radius">✖</a>
                                @endif
                            </td>
                            <td style="width:75%;">
                                <p style="margin-bottom: 0rem;">
                                
                                <p style="margin-bottom: 0rem;">
                                    <a href="/games/{{ $game['GID']->statsValue }}">
                                        {{ $game['NAME']->statsValue }}
                                    </a>
                                </p>
                            </td>
                            <td>
                                {{ ceil((0.01 * $game['B-U-percent_full']->statsValue) * $game['MAX-PLAYERS']->statsValue) }} / {{ $game['MAX-PLAYERS']->statsValue }}
                            </td>
                            <td>
                                {{ $game['B-U-map_name']->statsValue }}
                            </td>
                            <td>
                                <img src="/images/flags-24/{{ $game['geoip']['iso_code'] }}.png" title="{{ $game['geoip']['city'] }}, {{ $game['geoip']['state_name'] }}, {{ $game['geoip']['country']}}" style="margin-top: -2px;" />
                                {{ $game['geoip']['continent'] }}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
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

@endsection
