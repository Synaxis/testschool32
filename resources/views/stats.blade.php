@extends('partials.layout')

@section('pageTitle', 'Stats - ')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">
        <div class="row">
                <div class="col-md-6 col-md-offset-3 newtext centered-list">
                        <div class="content-header" style="background: #532929; padding-left: 5px; text-align: center;">
                            <h2>Lifetime stats</h2>
                        </div>

                        <div class="content callout-secondary">
                            @foreach($stats as $stat)
                            <h5><dt>{{$stat->stat}}</dt><dd>{{round($stat->value)}}</dd></h5>
                            @endforeach
                            <br>
                        </div>
                    </div>
                </div>
    </section>

@stop
