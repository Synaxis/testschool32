<!DOCTYPE html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('pageTitle')Heroes4Ever.net</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Bitter:700|Open+Sans:400,600,600italic">
    <link href="{{ asset('/css/app.css') }}?v1" rel="stylesheet"/>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}?v56">
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
    
    @yield('styles')

    <meta property="og:title" content="Heroes4Ever.net" />
    <meta property="og:description" content="Let's go back into the battlefield." />
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="en_UK" />
    <meta property="og:type" content="video.game" />
    <meta property="og:url" content="https://heroes4ever.net" />
    <meta property="og:image" content="http://localhost/icon.png" />

    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    <meta name='theme-color' content='#80a662'>

    <script type="text/javascript" src="{{ asset('js/js-3.js') }}?v4"></script>
    <script type="text/javascript" src="{{ asset('js/js-2.js') }}?v4"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/custom.css') }}?v6" />

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

    <script type="text/javascript" src="{{ asset('en/static/20150507170941/all/cdn_subdomain/js.js') }}?v56"></script>
    <script type="text/javascript" src="{{ asset('en/static/20150507170941/frontpage/cdn_subdomain/js.js') }}?v56"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="{{ asset('en/static/20150507170941/all/cdn_subdomain/css.css') }}?v56"/>
    <link rel="stylesheet" type="text/css" media="screen" href="{{ asset('en/static/20150507170941/frontpage/cdn_subdomain/css.css') }}?v56"/>

        <style>
                            @font-face {
                    font-family: 'HeaderFont';
                    src: url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/SofiaProSemiBold.eot') }}?v56");
                    src: url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/SofiaProSemiBold.eot#iefix') }}?v56") format('embedded-opentype'),
                    url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/SofiaProSemiBold.woff') }}?v56") format('woff'),
                    url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/SofiaProSemiBold.ttf') }}?v56") format('truetype');
                }
                        @font-face {
                font-family: 'ComicFont';
                src: url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/CaptainComicProBoldItalic.eot') }}?v56");
                src: url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/CaptainComicProBoldItalic.eot#iefix') }}?v56") format('embedded-opentype'),
                url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/CaptainComicProBoldItalic.woff') }}?v56") format('woff'),
                url("{{ asset('static/20150507170941/fonts/web/cdn_subdomain/CaptainComicProBoldItalic.ttf') }}?v56") format('truetype');
            }
        </style>

    <!-- THIS MUST BE LOADED HERE! DO NOT REMOVE -->
    <script src="//cdn.ckeditor.com/4.7.1/standard/ckeditor.js"></script>
    <!-- THIS MUST BE LOADED HERE! DO NOT REMOVE -->

</script>

<body>
<body class="index frontpage lang-en" style="background-image: url({{ asset('static/20150507170941/images/backgrounds/cdn_subdomain/default_2.jpg') }}?v56); background-color:#fff" id="frontpage"> <!--<![endif]-->

</head>
<body>
