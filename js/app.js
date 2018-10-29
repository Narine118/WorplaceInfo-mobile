$(document).foundation();

$(function(){
    
    // sliders
    if($(".full-width-slider").length){
        $(".full-width-slider").slick({
            dots: true,
            arrows: true,
            slidesToShow: 1,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-triangle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-triangle-right"></span></button>',
//            autoplay: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }]
        });
    }
    
    // animation
    $(".animate-children").each(function(){
       $(this).children().each(function(i){
            $(this).css("transition-delay", 0.2*(i-1) + "s");
       });
    });
    var scrolled = $(window).scrollTop(),
        windowHeight = $(window).height();
    $(".animate-children").each(function(){
        $(this).children().each(function(){
            var eachImgOffsetTop = $(this).offset().top,
                eachHeight = $(this).height();
            if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                $(this).addClass("complete");
            }
        });
    });
    $(window).scroll(function(){
        scrolled = $(this).scrollTop();
        $(".animate-children").each(function(){
            $(this).children().each(function(){
                var eachImgOffsetTop = $(this).offset().top,
                    eachHeight = $(this).height();
                if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                    $(this).addClass("complete");
                }
            });
        });
    });
    
    // parallax
    $("[data-parallax=scroll]").each(function(){
        var parSrc = $(this).data("image-src");
        $(this).parallax({imageSrc: parSrc});
    });
    
    
    // mobile-menu
    $(".menu-open").click(function(e){
        e.preventDefault();
        $("body").toggleClass("open");
        $(this).children("span").toggleClass("icon-close");
        $(this).children("span").toggleClass("icon-menu");
    });
    
    // Page Scrolling
    $("a[href^='#target']").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body,html').animate({
            scrollTop: destination
        }, 600);
    });

});
