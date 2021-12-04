<div id="siteHeader">
<a class="logoArea" href="/"><img src="{{ asset('en/static/20150507170941/images/header/cdn_subdomain/logo.png') }}?v56" alt="Battlefield Heroes" class="logo"/></a>
<ul class="menu">
        <li class="menuItem" id="mainMenu0">
        <a class="menuLink" href="#">
                        <img src="{{ asset('en/static/20150507170941/images/header/cdn_subdomain/mainMenu0.png') }}?v56" alt="Game"/>
        </a>
                    <ul class="subMenu">
                                    <li class="subMenuItem" id="mainMenu0s1">
                        <a class="subMenuLink" href="leaderboards/">
                                                        Leaderboards                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu0s2">
                        <a class="subMenuLink" href="media/">
                                                        Media                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu0s3">
                        <a class="subMenuLink" href="hardware/">
                                                        Hardware Requirements                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu0s4">
                        <a class="subMenuLink" href="help/">
                                                        Help                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu0s5">
                        <a class="subMenuLink" href="credits/">
                                                        Credits                        </a>
                    </li>
                            </ul>
            </li>
        <li class="menuItem" id="mainMenu2">
        <a class="menuLink" href="#">
                        <img src="{{ asset('en/static/20150507170941/images/header/cdn_subdomain/mainMenu2.png') }}?v56" alt="Community"/>
        </a>
                    <ul class="subMenu">
                                    <li class="subMenuItem" id="mainMenu2s0">
                        <a class="subMenuLink" href="https://discord.gg/JzsJ8jV">
                                                        Discord server                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu2s1">
                        <a class="subMenuLink" href="search/">
                                                        Player Search                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu2s2">
                        <a class="subMenuLink" href="groups/">
                                                        Groups                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu2s3">
                        <a class="subMenuLink" href="#">
                                                        Fan sites                        </a>
                    </li>
                            </ul>
            </li>
        <li class="menuItem" id="mainMenu3">
        <a class="menuLink" href="#">
                        <img src="{{ asset('en/static/20150507170941/images/header/cdn_subdomain/mainMenu3.png') }}?v56" alt="Store"/>
        </a>
                    <ul class="subMenu">
                                    <li class="subMenuItem" id="mainMenu3s0">
                        <a class="subMenuLink" href="en/store/hot-deals/">
                                                        Hot Deals                        </a>
                    </li>
                                    <li class="subMenuItem" id="mainMenu3s1">
                        <a class="subMenuLink" href="en/store/qa/">
                                                        Funds Q&A;                        </a>
                    </li>
                            </ul>
            </li>
        <li class="menuItem" id="mainMenu3">
        <a class="menuLink" href="#">
                        <img src="{{ asset('en/static/20150507170941/images/header/cdn_subdomain/mainMenu4.png') }}?v56" alt="Store"/>
        </a>
                    <ul class="subMenu">                    
                                    <li class="subMenuItem" id="mainMenu3s1">
                        <a class="subMenuLink" href="/profile/create/hero">
                                                        Create Hero                       </a>
                    </li>
                            </ul>
            </li>
    </ul>
<!-- <a class="playNow" href="launchgame/">
    <span class="playNow">Play Now!</span>
</a> -->
<script>
  (function (root) {
    'use strict';
    var Backbone = root.Backbone;
    root.AccountData = Backbone.Model.extend();
  }(this));
</script>
<script>
  (function (root) {
    'use strict'; 
    var BFH = root.BFH = root.BFH || {};
    BFH.accountData = new root.AccountData({
      'loggedIn': false
    });
  }(this));
</script>
@if( ! Auth::check())
<form class="loginForm" method="POST" action="{{ url('login') }}">
{{ csrf_field() }}
@csrf
    <input type="text" name="username" maxlength="100" tabindex="1" placeholder="Username:"/>
    <input type="password" name="password" maxlength="100" tabindex="2" placeholder="Password:"/>
    <button type="submit" style="background: #ffffff00;"><span class="submit" tabindex="3">Login<span class="decoration"></span></span></button>
    <div class="loading">&nbsp;</div>
    <span class="message">Logging you in, please wait...</span>
</form>
                @if (isset($errors))
                    @if ($errors->has('username'))
			<script>
			Swal.fire('Oops...', 'Watch out Hero! Wrong credentials.!', 'error')
			</script>
                    @elseif($errors->has('password'))
			<script>
			Swal.fire('Oops...', 'Watch out Hero! Wrong credentials.!', 'error')
			</script>
                    @endif
                @endif
            @else
<h6 class="newtext" style="
    position: absolute;
    z-index: 1000;
    margin-top: 60px;
    margin-left: 320px;
">Logged as <a href="https://localhost/profile" style="color: #ef3f3f;">{{Auth::user()->username}}</a></span> | <a href="https://localhost/logout">Log out</a></h1>
            @endif
            </div>
</header>