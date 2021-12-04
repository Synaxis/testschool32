@extends('partials.layout')

@section('pageTitle', 'Download - ')

@section('content')
    
<div id="generic-error-container" class="clearfix exception">
	<div class="bfhBox bfhBox-red"><div class="wrapper"><div class="content clearfix">		<div class="generic-error">
			<ul class="error">
				<li>
					<div class="sfTMessageContainer sfTAlert">
						<div class="sfTMessageWrap">
							<h1>@lang('layout.download') Heroes4Ever</h1>
							                @if( ! Auth::check())
                    							<p>
                        							@lang('layout.downloads.login')<br />
                        							<a href="{{ route('login') }}">@lang('layout.login')</a> @lang('layout.or') <a href="{{ route('register') }}">@lang('layout.register')</a>!
                    							</p>
                							@else
                    							<p>
                        						<a href="{{ route('downloadclient', 'launcher') }}">@lang('layout.downloads.launcher')</a><br />
                        						<!--<a href="{{ route('downloadclient', 'client-archive') }}">@lang('layout.downloads.archive')</a><br />-->
                        						<!--<a href="{{ route('downloadclient', 'tutorial') }}">Download our tutorial-only client.</a><br />-->
                    							</p>
                							@endif
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div></div><div class="bg"><u class="w">&nbsp;</u><u class="e">&nbsp;</u><i class="w">&nbsp;</i><i class="e">&nbsp;</i><b class="w">&nbsp;</b><b class="e">&nbsp;</b></div></div></div>

@endsection
