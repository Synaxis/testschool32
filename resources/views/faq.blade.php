@extends('partials.layout')

@section('pageTitle', 'FuckYou - ')

@section('content')

    <script>
  $( function() {
    $( "#accordion" ).accordion();
  } );
  </script>
    <section id="main-content new">
    	<div class="row">
            <div class="small-16 columns">
				<div id="accordion">
				  <h3 class="newtext faq-entry">Discord linking <i class="fa fa-user newtext"></i></h3>
				  <div class="newtext1">
				    1. Open link <a href="http://risinghub.net/profile/link/discord">CLICK HERE</a><br>
				    2. Press authorize<br>
				    3. If bot answers "You did not link your discord on the homepage yet." try !rh refresh in #bot channel<br>
				    4. If it doesn't help write to someone from team<br>
				  </div>
				  <h3 class="newtext faq-entry">Client download <i class="fa fa-arrow-circle-o-down newtext"></i></h3>
				  <div class="newtext1">
				  	1. Go to http://risinghub.net/download and download the launcher<br>
					2. When downloaded, make a folder for BFH in the desired location and place DarkLauncher.exe in that folder<br>
					3. Run the launcher, select the dir folder you placed DarkLauncher.exe in and update<br>
					4. To get into a server, login on our webpage and go to http://risinghub.net/games to select a server<br>
					      • Note if you dont select a server, you'll MAY get stuck in an infinite loop of matchmaking<br>
				  </div>
				  <h3 class="newtext faq-entry">Starting the game <i class="fa fa-gamepad newtext"></i></h3>
				  <div class="newtext1">
				  	1. Log in to your account at the site<br>
				  	2. Hover mouse cursor over the field "the game"and click "servers" in drop-down menu list - you will see a server-picker table<br>
				  	3. Choose one of the servers by clicking a greentick-button to the left, we strongly recommend you to choose the closest one to your location. See next entry.<br>
				  	4. Start the launcher, wait until game download/check.<br>
				  	5. Input your login/password and press "Play now".<br>
				  	6. Choose your hero, get your preferences done and click Play Now!-button<br>
				  </div>
				  <h3 class="newtext faq-entry">Best servers for your location <i class="fa fa-globe newtext"></i></h3>
				  <div class="newtext1">
				  	1. If you live in Poland, you'd have a good ping in RU, NL or GER-servers.<br>
					2. If you are american, north or south, you should check US, BR or ARG-server.<br>
					3. Also you can acquire server players info by clicking right on the server name of it, it will help you choose the faction to join.<br>
					4. WARNING: if you haven't selected a server and clicked Play Now!, you may not get into the battle at all!<br>
				  </div>
				  <h3 class="newtext faq-entry">Launcher errors <i class="fa fa-globe newtext"></i></h3>
				  <div class="newtext1">
				  	
				  </div>
				  <h3 class="newtext faq-entry">Game errors <i class="fa fa-globe newtext"></i></h3>
				  <div class="newtext1">
				  	
				  </div>
				  <h3 class="newtext faq-entry">Test entry <i class="fa fa-globe newtext"></i></h3>
				  <div class="newtext1">
				  	
				  </div>
				</div>
			</div>
		</div>
    </section>

@endsection
