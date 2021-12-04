<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('home', function () {
    return redirect()->route('home');
});

Route::post('set-language', [
    'as' => 'setLanguage',
    'uses' => 'HomeController@setLanguage'
]);

Route::get('set-state/{state}', [
    'as' => 'setState',
    'uses' => 'HomeController@setState'
]);

Route::get('download', [
    'middleware' => 'auth',
    'as' => 'download',
    'uses' => 'HomeController@downloadClient'
]);

Route::get('logout', [
    'as' => 'doLogout',
    'uses' => 'HomeController@doLogout'
]);

Route::get('/', [
    'as' => 'home',
    'uses' => 'HomeController@home'
]);

Route::get('news', [
    'as' => 'news',
    'uses' => 'HomeController@news'
]);

Route::get('privacy', [
    'as' => 'privacy',
    'uses' => 'HomeController@privacy'
]);

Route::get('contact', [
    'as' => 'contact',
    'uses' => 'HomeController@contact'
]);

Route::get('team', [
    'as' => 'team',
    'uses' => 'HomeController@team'
]);

Route::group(['prefix' => 'profile', 'as' => 'profile.', 'middleware' => ['auth', 'acl']], function() {

    Route::get('/', [
        'as' => 'lists',
        'uses' => 'ProfileController@lists'
    ]);

    Route::get('create/hero', [
        'as' => 'createHero',
        'uses' => 'ProfileController@createHero',
    ]);

    Route::post('create/hero', [
        'as' => 'doCreateHero',
        'uses' => 'ProfileController@doCreateHero',
    ]);

    Route::post('create/hero/availability', [
        'as' => 'createHeroAvailability',
        'uses' => 'ProfileController@createHeroAvailability',
    ]);

    Route::post('change/password', [
        'as' => 'changePassword',
        'uses' => 'ProfileController@changePassword'
    ]);


    Route::get('answerFriendRequest', [
        'as' => 'answerFriendRequest',
        'uses' => 'ProfileController@answerFriendRequest'
    ]);

    Route::get('answerAll', [
        'as' => 'answerAll',
        'uses' => 'ProfileController@answerAll'
    ]);
    

    Route::get('{username}', [
        'as' => 'details',
        'uses' => 'ProfileController@details'
    ]);

    Route::get('{user_id}/add', [
        'as' => 'addFriend',
        'uses' => 'ProfileController@addFriend'
    ]);

    Route::get('{user_id}/remove', [
        'as' => 'removeFriend',
        'uses' => 'ProfileController@removeFriend'
    ]);

});

Route::group(['prefix' => 'forums', 'as' => 'forums.'], function() {

    Route::get('/', [
        'as' => 'lists',
        'uses' => 'ForumsController@forumsLists'
    ]);

    Route::get('comment/delete/{comment}', [
        'middleware' => ['auth', 'acl'],
        'as' => 'commentDelete',
        'uses' => 'ForumsController@commentDelete'
    ]);

    Route::get('topic/delete/{topic}', [
        'middleware' => ['auth', 'acl'],
        'as' => 'topicDelete',
        'uses' => 'ForumsController@topicDelete'
    ]);

    Route::get('{forum}', [
        'as' => 'details',
        'uses' => 'ForumsController@forumsDetails'
    ]);

    Route::post('{forum}/create', [
        'middleware' => ['auth', 'acl'],
        'as' => 'details.doCreate',
        'uses' => 'ForumsController@forumsDetailsDoCreate',
    ]);

    Route::get('{forum}/{topic}', [
        'as' => 'posts',
        'uses' => 'ForumsController@forumsPosts',
    ]);

    Route::post('{forum}/{topic}/create', [
        'middleware' => ['auth', 'acl'],
        'as' => 'posts.doCreate',
        'uses' => 'ForumsController@forumsPostsDoCreate',
    ]);
});

// Games listing
Route::group(['prefix' => 'games', 'as' => 'games.', 'namespace' => 'Games'], function() {
    Route::get('/', [
        'as'    => 'games',
        'uses' => 'GamesController@list',
    ]);

    Route::post('/', [
        'as'    => 'games',
        'middleware' => ['auth', 'acl'],
        'uses' => 'GamesController@list',
    ]);

    Route::get('launcher', [
        'as'    => 'game.launcher',
        'uses' => 'GamesController@listLauncher',
    ]);

    Route::post('launcher', [
        'as'    => 'game.launcher',
        'middleware' => ['auth', 'acl'],
        'uses' => 'GamesController@listLauncher',
    ]);

    Route::get('{gameid}', [
        'as' => 'game.details',
        'uses' => 'GamesController@details',
    ]);
});

// Admin interface
Route::group(['prefix' => 'admin', 'as' => 'admin.', 'namespace' => 'Admin', 'middleware' => ['auth', 'acl']], function () {

    Route::group(['prefix' => 'users'], function ()
    {
        Route::group(['prefix' => 'manage'], function ()
        {
            Route::get('/', [
                'as'   => 'user.manage',
                'uses' => 'UserController@manage',
            ]);

            Route::get('{user}', [
                'as'   => 'user.details',
                'uses' => 'UserController@details',
            ]);

            Route::post('{user}/assign/role/{role}', [
                'as'   => 'assign.role',
                'uses' => 'UserController@assignRole',
            ]);

            Route::get('{user}/remove/{role}', [
                'as'   => 'remove.role',
                'uses' => 'UserController@removeRole',
            ]);

            Route::get('{user}/punish/{type}/{expiration}',[
                'as'   => 'ban.user',
                'uses' => 'UserController@banUser',
            ]);
        });

        Route::group(['prefix' => 'roles'], function ()
        {
            Route::get('/', [
                'as'   => 'user.roles',
                'uses' => 'UserController@roles',
            ]);

            Route::get('add', [
                'as'   => 'user.roles.add',
                'uses' => 'UserController@addRole',
            ]);

            Route::post('add', [
                'as'   => 'user.roles.doAdd',
                'uses' => 'UserController@doAddRole',
            ]);

            Route::get('{role}', [
                'as'   => 'role.details',
                'uses' => 'RoleController@details',
            ]);

            Route::post('{role}/update', [
                'as'   => 'role.update',
                'uses' => 'RoleController@update',
            ]);

            Route::get('{role}/delete', [
                'as'   => 'role.delete',
                'uses' => 'RoleController@delete',
            ]);
        });
    });
    Route::group(['prefix' => 'news'], function ()
    {
        Route::get('/', [
            'as' => 'news.lists',
            'uses' => 'NewsController@lists',
        ]);

        Route::get('create', [
            'as' => 'news.create',
            'uses' => 'NewsController@create',
        ]);

        Route::post('create', [
            'as' => 'news.doCreate',
            'uses' => 'NewsController@doCreate',
        ]);

        Route::get('{news}/delete', [
            'as' => 'news.delete',
            'uses' => 'NewsController@delete',
        ]);

        Route::get('{news}/edit', [
            'as' => 'news.edit',
            'uses' => 'NewsController@edit',
        ]);

        Route::post('{news}/edit', [
            'as' => 'news.doEdit',
            'uses' => 'NewsController@doEdit',
        ]);
    });

    Route::group(['prefix' => 'audit'], function ()
    {
        Route::get('/', [
            'as' => 'audit.lists',
            'uses' => 'AuditController@lists',
        ]);
    });

});

// API
Route::group(['prefix' => 'api', 'as' => 'api.', 'namespace' => 'Api', 'middleware' => 'api'], function ()
{
    Route::get('token', [
        'uses' => 'ApiController@token'
    ]);

    Route::get('check', [
        'uses' => 'ApiController@check'
    ]);

    Route::get('user', [
        'uses' => 'ApiController@user'
    ]);

    Route::get('cheat/{heron}', [
            'uses' => 'ApiController@cheat'
    ]);

    Route::get('favourite/{gid}', [
            'uses' => 'ApiController@favourite'
    ]);

    Route::group(['prefix' => 'mm'], function ()
    {
        Route::get('findgame/{shardid}/{heroid}/{ipint}', [
            'uses' => 'MatchmakingController@findgame'
        ]);
    });
});
