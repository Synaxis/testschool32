@extends('partials.layout')

@section('pageTitle', 'Games - ')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">

        <div class="row newtext">
            <div class="small-16 columns">
                <nav>
                    <h3>
                        @lang('layout.activegames')
                    </h3>
                    <h4>
                        @lang('layout.masterserver') @lang("layout.$msstatus")
                    </h4>
                </nav>
                <div class="big-sep"></div>
            </div>
        </div>

        <div class="row">

            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>@lang('layout.hostname')</th>
                    <th>@lang('layout.players')</th>
                    <th>@lang('layout.map')</th>
                    <th style="width:10%;">@lang('layout.region')</th>
                </tr>
                </thead>
                <tbody>
                    @foreach($activegames as $gid => $game)
                        @if(!empty($game['GID']))
                        {{ csrf_field() }}
                            @if($selectedgid!=$game['GID']->statsValue)
                            <tr>
                            @else
                            <tr style="background-color:grey;">
                            @endif
                                <td>
                                    @if($selectedgid!=$game['GID']->statsValue)
                                    <a href="{{ route('api.favourite', $game['GID']->statsValue)}}" class="button radius"><i class="fa fa-star-o"></i></a>
                                    @else
                                    <a href="{{ route('api.favourite', 0)}}" class="button radius"><i class="fa fa-star"></i></a>
                                    @endif
                                </td>
                                <td style="width:75%;">
                                    <p style="margin-bottom: 0rem;">
                                    
                                    <p style="margin-bottom: 0rem;">
                                        <a href="/games/{{ $game['GID']->statsValue }}">
                                            {{ str_replace("[iad]", "", $game['NAME']->statsValue) }}
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
                        @endif
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
                        <ins class="adsbygoogle"
                             style="display:block"
                             data-ad-format="auto"
                             data-ad-client="ca-pub-8623333216955188"
                             data-ad-slot="6146466290"></ins>
                        <script>
                             (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </dd>
                </dl>
            </div>
        </div>

    </section>

@endsection
