@extends('partials.layout')

@section('pageTitle', 'Contact - ')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">

        <div class="row">
            <div class="small-16 columns">
                <h1>@lang('contact.get_in_touch')</h1>
                <div class="big-sep"></div>
            </div>
        </div>

        <div class="row">
            <div class="small-16 large-8 columns">
                <h4>@lang('contact.how_to')</h4>
                <p>@lang('contact.how_to_description')</p>
                <!--<p>You can contact us via <a href="mailto:support@Heroes4Ever.com">support@Heroes4Ever.com</a>. In case secure communication is preffered, <a href="{{ asset('images/support.pgp.txt') }}">a PGP Public Key is available</a></p>-->
            </div>
            <div class="small-16 large-7 columns">
                <div class="row small-up-1 medium-up-2">
                    <h4>@lang('contact.to_contact')</h4>
                    <!--address-->
                    <div class="column">
                        <h5>AwokenLead</h5>
                        <address>
                            <p>
                            @foreach($leads as $user)
                                <!--team-member-->
                                <a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a><br>
                                <!--//team-member-->
                            @endforeach
                            </p>
                        </address>
                    </div>
                    <!--//address-->
                    <!--address-->
                    <div class="column">
                        <h5>Staff</h5>
                        <address>
                            <p>
                            @foreach($staffs as $user)
                                <!--team-member-->
                                <a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a><br>
                                <!--//team-member-->
                            @endforeach
                            </p>
                        </address>
                    </div>
                    <!--//address-->
                    <!--address-->
                    <div class="column">
                        <h5>AwokenDevs</h5>
                        <address>
                            <p>
                            @foreach($devs as $user)
                                <!--team-member-->
                                <a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a><br>
                                <!--//team-member-->
                            @endforeach
                            </p>
                        </address>
                    </div>
                    <!--//address-->
                     <!--address-->
                    <div class="column">
                        <h5>Community Managers</h5>
                        <address>
                            <p>
                            @foreach($communitymanagers as $user)
                                <!--team-member-->
                                <a href="{{ route('profile.details', $user->username) }}">{{ $user->username }}</a><br>
                                <!--//team-member-->
                            @endforeach
                            </p>
                        </address>
                    </div>
                    <!--//address-->
                </div>
            </div>
        </div>
    </section>

@endsection
