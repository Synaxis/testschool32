@extends('partials.layout')

@section('pageTitle', 'Team - ')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">

        <div class="row newtext">
            <div class="small-16 columns">
                <h1>@lang('layout.team')</h1>
                <div class="big-sep"></div>
            </div>
        </div>

        <div class="row team">
            <h2>Rising Lead</h2>
            <div class="small-16 columns">
                <div class="row small-up-2 medium-up-4 large-up-5">
                    @foreach($leads as $user)
                    <!--team-member-->
                        <div class="column team-member">
                            <div class="photo">
                                <a href="{{ route('profile.details', $user->username) }}">
                                    <img src="{{ $user->avatar ? $user->avatar : asset('images/placeholders/about.png')  }}" class="" alt="">
                                </a>
                            </div>
                            <h5><a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a></h5>
                        </div>
                        <!--//team-member-->
                    @endforeach
                </div>
            </div>
        </div>

        <div class="row team">
            <h2>Staff</h2>
            <div class="small-16 columns">
                <div class="row small-up-2 medium-up-4 large-up-5">
                    @foreach($staffs as $user)
                        @if($leads->where('id', $user->id)->first() == null)
                        <!--team-member-->
                            <div class="column team-member">
                                <div class="photo">
                                    <a href="{{ route('profile.details', $user->username) }}">
                                        <img src="{{ $user->avatar ? $user->avatar : asset('images/placeholders/about.png')  }}" class="" alt="">
                                    </a>
                                </div>
                                <h5><a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a></h5>
                            </div>
                            <!--//team-member-->
                        @endif
                    @endforeach
                    @foreach($staffs2 as $user)
                        @if($leads->where('id', $user->id)->first() == null)
                        <!--team-member-->
                            <div class="column team-member">
                                <div class="photo">
                                    <a href="{{ route('profile.details', $user->username) }}">
                                        <img src="{{ $user->avatar ? $user->avatar : asset('images/placeholders/about.png')  }}" class="" alt="">
                                    </a>
                                </div>
                                <h5><a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a></h5>
                            </div>
                            <!--//team-member-->
                        @endif
                    @endforeach
                </div>
            </div>
        </div>

        <div class="row team">
            <h2>Rising Dev</h2>
            <div class="small-16 columns">
                <div class="row small-up-2 medium-up-4 large-up-5">
                @foreach($devs as $user)
                    <!--team-member-->
                        <div class="column team-member">
                            <div class="photo">
                                <a href="{{ route('profile.details', $user->username) }}">
                                    <img src="{{ $user->avatar ? $user->avatar : asset('images/placeholders/about.png')  }}" class="" alt="">
                                </a>
                            </div>
                            <h5><a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a></h5>
                        </div>
                        <!--//team-member-->
                    @endforeach
                </div>
            </div>
        </div>
    </section>

@endsection