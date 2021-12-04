@extends('partials.layout')

@section('content')

<div id="generic-error-container" class="clearfix exception">
	<div class="bfhBox bfhBox-red"><div class="wrapper"><div class="content clearfix">		<div class="generic-error">
			<ul class="error">
				<li>
					<div class="sfTMessageContainer sfTAlert">
						<div class="sfTMessageWrap">
							<h1>Oops! Page Not Found</h1>
							<h5>The server returned a 404 response.</h5>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div></div><div class="bg"><u class="w">&nbsp;</u><u class="e">&nbsp;</u><i class="w">&nbsp;</i><i class="e">&nbsp;</i><b class="w">&nbsp;</b><b class="e">&nbsp;</b></div></div></div>

@endsection
