@include('partials.header')

        <div class="sunset-info">
  <div class="bfhBox bfhBox-red bfhBox-has-splatter">
    <div class="wrapper">
      <h2 class="bfhBox-heading">
        Important Notice      </h2>
      <div class="content clearfix">
      <div class="infoicon"></div>
          <p>
            Battlefield Heroes will shut down on Tuesday, July 14th, 2015 and you will not be able to play the game after this date. By clicking �continue� you accept the terms of service and have read our shutdown announcement that you will find <a target="_blank" href="http://bit.ly/1dN6JIR">here.</a>          </p>
            <div class="buttons">
            <span class="continue bfhButton right">
              <span class="first-child">
                <button>Continue</button>
              </span>
            </span>
          </div>
      </div>
    </div>
    <div class="bg">
      <u class="w">&nbsp;</u><u class="e">&nbsp;</u><i class="w">&nbsp;</i><i class="e">&nbsp;</i><b class="w">&nbsp;</b><b class="e">&nbsp;</b>
    </div>
    <div class="splatter splatter-3"></div>
  </div>
  <div class="overlay"></div>
</div>        <div id="siteContainer">
@include('partials.navbar')
            <div class="mainContentArea">

@yield('content')

</div>
</div>