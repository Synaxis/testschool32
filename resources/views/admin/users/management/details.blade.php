@extends('partials.layout')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">

        <div class="row">
            <div class="small-16 columns newtext">
                <h1><i class="fa fa-user newtext"></i> {{ $user->username }}</h1>
                <div class="big-sep"></div>
            </div>
        </div>

        <div class="row team">
            <div class="large-16 columns">
                <div class="large-10 columns">
                    <div>
                        <h4>User Information</h4>
                        <img src="{{ $user->avatar ? $user->avatar : 'https://via.placeholder.com/250x250' }}" alt="">
                        <ul class="no-bullet">
                            <li>Username: <strong><a href="{{route('profile.details', $user->username)}}">{{ $user->username }}</a></strong></li>
                            <li>Email: <strong>{{ $user->email }}</strong></li>
                            <li>Birthday: <strong>{{ $user->birthday}}</strong></li>
                            <li>IP Address: <strong><a href="{{route('admin.user.manage', 'q=ip:' . $user->ip_address)}}">{{ $user->ip_address}}</a></strong></li>
                            <li>HWID: <strong><a href="{{route('admin.user.manage', 'q=hwid:' . $user->hwid)}}">{{ $user->hwid}}</a></strong></li>
                            <li>Discord: <strong>@if(!empty($discord)){{$discord->discord_name . "#" . $discord->discord_discriminator}}@else{{'not linked'}}@endif</strong></li>
                            <li>Created at: <strong>{{ $user->created_at }}</strong></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Roles</h4>
                        <ul style="list-style: none;">
                            @foreach($roles as $role => $roleId)
                            <div class="row">
                            <div class="large-6 columns">
                                <li>{{ $role }} @if(\App\can('user.roles')) - @endif</li>
                            </div>
                            <div class="large-10 columns">
                                <a class="tiny button alert" href="{{ route('admin.remove.role', [$user->id, $roleId]) }}">Remove</a>
                            </div>
                        </div>
                                
                            @endforeach
                        </ul>
                        @if(\App\can('user.roles'))
                        <div class="row">
                        <div class="large-10 columns">
                            <form method="POST" action="{{ route('admin.assign.role', [$user->id, 'role']) }}">
                                {{ csrf_field() }}
                                <select name="role" style="background-color: #FFF;color: #000">
                                    @foreach($applicableRoles as $roleId => $role)
                                        <option value="{{ $roleId }}">{{ $role }}</option>
                                    @endforeach
                                </select>
                                <button type="submit" class="button radius" style="margin-bottom:0px;margin-top:10px;">Add</button>
                            </form>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="large-10 columns">
                            <form method="POST" action="{{ route('admin.ban.hwid', [$user->id, 'heroid', 'reason', 'time']) }}">
                            <input type="text" name="heroid" placeholder="Hero id" style="background-color: #FFF;color: #000">
                            <input type="number" name="time" placeholder="Time (hours)" style="background-color: #FFF;color: #000">
                            <input type="text" name="reason" placeholder="Reason" style="background-color: #FFF;color: #000">
                                {{ csrf_field() }}
                                <button type="submit" class="button radius" style="margin-bottom:0px;margin-top:10px;">Ban HWID</button>
                            </form>
                        </div>
                    </div>
                        @endif

                    </div>
                </div>
                <div class="large-6 columns">
                    @if($user->heroes()->count() == 0)
                            <div class="no-hero" style="position: relative; height: 200px;">
                                <h5 class="text-center" style="line-height: 200px;">I have no heroes!</h5>
                                <img src="{{ asset('images/herocreator/error-icon.png') }}" style="position: absolute; bottom: 0;" />
                            </div>
                            @else
                                @foreach($heroes as $hero)
                                    <div class="col-lg-12 hero">
                                        <div class="hero-image image-{{ $hero->getTeam() }}">
                                        <span class="image-{{ $hero->getClass() }}"
                                              style="background-image: url({{ asset('/images/herocreator/icon_'.$hero->getTeam().'_classes.png') }});">
                                        </span>
                                        </div>
                                        <div class="hero-content">
                                            <span class="name"><a href="{{ route('admin.hero.manage', $hero->id) }}">{{"$hero->heroName id $hero->id"}}</a></span>
                                            <div class="info">
                                                <div class="info-content col-lg-11">
                                                    <div class="col-lg-4 col-xs-4 hero-team team-{{ $hero->getTeam() }}"><span></span></div>
                                                    <div class="col-lg-4 col-xs-4 hero-class class-{{ $hero->getClass() }}"><span></span></div>
                                                    <div class="col-lg-4 col-xs-4 hero-level level-{{ (int) $hero->getStat('level') }}"><span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                </div>

                <!--<div class="large-9 columns">
                    <div class="callout radius">
                        <h5>All comments written by the user</h5>
                            <table class="large-16">
                                <thead>
                                <tr>
                                    <th>Thread</th>
                                    <th>Date</th>
                                    <th>Comment(50 char)</th>
                                    <th>Options</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($user->comments as $comment)
                                    <tr>
                                        <td>{{ $comment->post->name }}</td>
                                        <td>{{ $comment->created_at->format('m/d/Y') }}</td>
                                        <td>{{ substr($comment->comment, 0, 50) }}</td>
                                        <td><a style="cursor: pointer;" class="label radius success" href="{{ route('forums.posts', [$comment->post->forum_id, $comment->topic_id]) }}#{{ $comment->id }}"><i class="fa fa-info"></i> Details</a></td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                    </div>
                </div>-->

            </div>
        </div>

    </section>

@stop

@section('scripts')
    <script type="text/javascript">{{ asset('js/foundation.tooltip.js') }}</script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.15/vue.min.js"></script>
    <script type="text/javascript">{{ asset('js/user.js') }}</script>
@stop