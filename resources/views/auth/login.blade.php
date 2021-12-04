@extends('partials.layout')

@section('pageTitle', 'Login - ')

@section('content')
<div id="content" class="clearfix">
                    <form class="login new_content" action="{{ url('login') }}" method="POST">
	<div class="header"><h2>Login</h2></div>
	<div class="clearfix magmaFormElementWrapper magmaInputWrapper"><label class="magmaLabel" for="username">Username</label><span class="magmaInput size-300"><input size="300" type="text" name="username" id="mail"></span><div class="magmaAfter"></div></div>
	<div class="clearfix magmaFormElementWrapper magmaInputWrapper"><label class="magmaLabel" for="username">Password</label><span class="magmaInput size-300"><input size="300" type="text" name="password" id="password"></span><div class="magmaAfter"></div></div>
	<span class="bfhButton "><span class="first-child"><button type="submit">Login</button></span></span>            
	<ul class="login-links">
            <li><a href="{{ url('password/reset') }}">Forgot your password?</a></li>
    	</ul>
    </form>
<div class="register new_content">
	<div class="header"><h2>Sign up</h2></div>
	<a class="register" href="{{ route('register') }}"><img src="{{ asset('images/register.png') }}" alt="Join now!"></a>
</div>
                </div>

    <!--<section id="main-content">

        <div class="row newtext">
            <div class="small-16 columns">
                <h1>Login</h1>
                <div class="big-sep"></div>
            </div>
        </div>

        <div class="row">
            <div class="small-16 large-8 columns">
                <div id="note"></div>
                <form method="POST" action="{{ url('login') }}">
                    {{ csrf_field() }}
                    <label> Username
                        <input type="text" name="username">
                    </label>

                    <label> Password
                        <input type="password" name="password">
                    </label>

                    <button type="submit" class="lime-button" name="submit" style="float: right;">Login</button>
                    <a href="{{ url('password/reset') }}">Forgot password?</a>
                </form>
                @if ($errors->has('email'))
                    <div class="alert callout" data-closable style="margin-top: 50px;">
			<script>
			Swal.fire('Oops...', 'Watch out Hero! Wrong credentials.!', 'error')
			</script>
                    </div>
                @elseif($errors->has('password'))
                <div class="alert callout" data-closable style="margin-top: 50px;">
			<script>
			Swal.fire('Oops...', 'Watch out Hero! Wrong credentials.!', 'error')
			</script>
                </div>
                @endif
            </div>
            <div class="small-16 large-6 columns">
                <a href="{{ route('register') }}"><img src="{{ asset('images/register.png') }}" alt=""></a>
            </div>
        </div>

    </section>-->

@endsection
