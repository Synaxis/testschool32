(function($){})(window.jQuery);$(document).ready(function(){'use strict';var currentYear=(new Date).getFullYear();$('span.date').text(currentYear);$(function(){var pgurl=window.location.href.substr(window.location.href.lastIndexOf("/")+1);$("#main-nav ul li a").each(function(){if($(this).attr("href")==pgurl||$(this).attr("href")=='')$(this).addClass("active");});});$('#main-nav ul').slicknav({prependTo:'.mobile-menu',label:'<img src="https://Heroes4Ever.com/images/icons/burger_.svg"/>',closeOnClick:true});$('#home-slider, .inner-slider').slick({infinite:true,slidesToShow:1,slidesToScroll:1,dots:false,arrows:false,fade:true,autoplay:true,autoplaySpeed:5000});$('.game-gallery').liteBox({revealSpeed:400,background:'rgba(0,0,0,.8)',overlayClose:true,escKey:true,navKey:true,errorMessage:'Error loading content.'});});