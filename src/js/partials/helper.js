
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };



    $('select').styler();
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animationName='flipInY';

    $('.animate .item').bind('mouseenter',function(){
        $(this).find("img").animate({
            width:'110%',
            marginLeft:'-5%',
            marginTop:'-10%',
            marginBottom:'-10%'
        },300);
        $(this).find(".hovers").animate({
            opacity: 1
        },300);
        $(this).find('.plai-big').addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });

    });
    $('.animate .item').bind('mouseleave',function(){
        $(this).find("img").animate({
            width:'100%',
            marginLeft:'0',
            marginTop:'0',
            marginBottom:'0'
        },300);

        $(this).find(".hovers").animate({
            opacity: 0
        },300);
    });


    /*******************************
     *   ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
     *******************************/
    $('a[href^="#link"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top},2000,"easeInOutExpo");
        return false;
    });


    /*******************************
     *          WAYPOINTS
     *******************************/

    $('.podcast .item')
        .animate({'opacity':'0'})
        .waypoint(function(dire){
            if (dire === 'down') {
                $(this.element).animate({'opacity':'1'}).addClass('animated fadeInLeft').one(animationEnd, function() {
                    $(this.element).removeClass('animated fadeInLeft');
                });
            }

        }, {
            offset: '90%'
        });


    /************************
     *       preloader
     ************************/
    $(window).on('load', function () {
        var $preloader = $('#loading'),
            $spinner   = $preloader.find('#loading-center');
        $spinner.fadeOut();
        $preloader.fadeOut('slow');
    });

    /************************
     *       /preloader/
     ************************/


});
