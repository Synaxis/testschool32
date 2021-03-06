@extends('partials.layout')

@section('content')

    @include('partials.inner_slider')

    <section id="main-content">
        <div class="row newtext">
            <div class="small-16 columns newtext">
                <h1>Dashboard</h1>
                <div class="big-sep"></div>
            </div>
        </div>
        <div class="row">
            <div class="small-2 columns">
                <ul id="admin-actions-tab" class="tabs vertical">
                    <li class="tabs-title is-active" role="presentation" >
                        <a id="groups-panel-label" href="#groups-panel" role="tab" aria-controls="groups-panel" aria-selected="true">Groups</a>
                    </li>
                    <li class="tabs-title" role="presentation" >
                        <a id="users-panel-label" href="#users-panel" role="tab" aria-controls="users-panel" aria-selected="false">Users</a>
                    </li>
                    <li class="tabs-title" role="presentation" >
                        <a id="news-panel-label" href="#news-panel" role="tab" aria-controls="news-panel" aria-selected="false">News</a>
                    </li>
                    <li class="tabs-title" role="presentation" >
                        <a id="forums-panel-label" href="#forums-panel" role="tab" aria-controls="forums-panel" aria-selected="false">Forums</a>
                    </li>
                </ul>
            </div>
            <div class="small-14 columns">
                <div class="tabs-content vertical" data-tabs-content="admin-actions-tab">
                    <div id="groups-panel" class="tabs-panel is-active" role="tabpanel" aria-hidden="false" aria-labelledby="groups-panel-label">
                        <h2 class="title">Manage Groups</h2>
                        <hr>
                        <div class="row">
                            <div class="small-offset-1 small-6 columns">
                                <h4>Create Group</h4>
                                <form method="post" action="">
                                    {{ csrf_field() }}
                                    <label>Name : </label>
                                    <input id="group_name" name="group_name" type="text" required>
                                    <label>Display name : </label>
                                    <input id="group_display_name" name="group_display_name" type="text" required>
                                    <label>Description : </label>
                                    <textarea id="group_description" name="group_description" cols="40" rows="8"></textarea>
                                    <button class="lime-button" type="submit">Create</button>
                                </form>
                            </div>

                            <div class="small-pull-1 small-6 columns">
                                <h4>Delete Group</h4>
                                <form method="post" action="">
                                    {{ csrf_field() }}
                                    <label>Group to delete : </label>
                                    <select id="group_id" name="group_id">
                                    </select>
                                    <button class="lime-button" type="submit">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="users-panel" class="tabs-panel" role="tabpanel" aria-hidden="true" aria-labelledby="users-panel-label">
                        <h2 class="title">Manage Users</h2>
                        <hr>
                        <div class="row">
                            <div class="small-offset-1 small-15 columns">
                                <h4>Search Users</h4>
                                <form action="{{ route('admin.dashboard') }}#users-panel">
                                    <div class="small-12 columns" style="padding-left:0rem;">
                                        <input value="{{ \Illuminate\Support\Facades\Input::get('user_search') }}" id="user_search" name="user_search" type="text" placeholder="Name" required>
                                    </div>
                                    <div class="small-4 text-center columns">
                                        <button class="lime-button" type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        @if(isset($searchResults))
                            <div class="row" style="margin-top: 10px;">
                                <div class="large-16 columns">
                                    <table class="large-16">
                                        <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>State</th>
                                            <th>Options</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($searchResults as $user)
                                            <tr>
                                                <td>{{ $user->username }}</td>
                                                <td>{{ $user->email }}</td>
                                                <td>{!! App\User::find($user->id)->isOnline() ? "<i class='label success'>ONLINE</i>" : "<i class='label alert'>OFFLINE</i>" !!}</td>
                                                <td><a style="cursor: pointer;" class="label radius success" href="{{ route('admin.user.details', [$user->id]) }}"><i class="fa fa-info"></i> Details</a></td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        @endif
                    </div>
                    <div id="news-panel" class="tabs-panel" role="tabpanel" aria-hidden="true" aria-labelledby="news-panel-label">
                        <h2 class="title">Manage News</h2>
                    </div>
                    <div id="forums-panel" class="tabs-panel" role="tabpanel" aria-hidden="true" aria-labelledby="forums-panel-label">
                        <h2 class="title">Manage Forums</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script src="{{ asset('js/admin.js') }}"></script>
@endsection