$(function () {
    'use strict';
    var navb = $('nav');
    
    navb.css('background-color', 'rgba(0,0,0,0)');
    
    $(window).scroll(function () {
        ($(window).scrollTop() >= $('header').height() ) ?$('nav').css('background-color', 'rgba(0,0,0,1)') : $('nav').css('background-color', 'rgba(0,0,0,0)')
        
    });
    var tabb = $('.tab-switch li');
    tabb.click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        
        $('.tab-content > div').hide();
        
        $('.' + $(this).data('class')).fadeIn(1000).siblings().fadeOut(1000);
    });
});