@extends('partials.layout')

@section('pageTitle', 'Register - ')

@section('content')

<style>
body {
	background: url(img/siteBg.jpg) repeat-y left top #d7c8af;
}
</style>

    <section id="main-content">

        <div class="row newtext">
            <div class="small-16 columns">
                <h1>Register</h1>
                <div class="big-sep"></div>
            </div>
        </div>

        <div class="row">
            <div class="small-16 large-8 large-offset-4 columns">
                <form method="POST" action="{{ url('register') }}">
                    {{ csrf_field() }}
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    <label> Username
                        <input type="text" name="username" value="{{ old('username') }}" required>
                    </label>

                   <!-- <label> Email
                        <input type="email" name="email" value="{{ old('email') }}" required>
                    </label>-->

                    <label> Birthday
                        <input id="date" type="text" name="birthday" value="{{ old('birthday') }}" required>
                    </label>

                    <label> Password
                        <input type="password" name="password" required>
                    </label>

                    <button type="submit" class="lime-button" name="submit" style="margin-top:2rem;width:100%;">Register</button>
                </form>
                <div id="note"></div>
                <br><br>
                <br><br>
            </div>
        </div>

    </section>

@endsection

@section('scripts')
    <script>
        $(document).ready(function(){
            $('#date').mask("99-99-9999",{placeholder:"dd-mm-yyyy"});
        });
    </script>
@stop
