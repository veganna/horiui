$(document).ready(function(){
    $("div.mobile-menu").on("click", function(){
        $("div.mobile-menu").toggleClass("active");
        $("div.mobile-menu-wrapper").toggleClass("active");
    });
    $("div.mobile-menu-wrapper ul li a, div.desktop-menu-wrapper ul li a").on("click", function(){
        var link = $(this).attr("href");
        var position = $(link).offset().top;
        $("html, body").animate({scrollTop:position}, 1000)
    });
    $(window).scroll(function(){
        var currentPosition = $(this).scrollTop();
        var home = $("section#home").offset().top;
        var services = $("section#service").offset().top;
        var contact = $("section#contact").offset().top;    
        var portifolio = $("section#portfolio").offset().top;    
        
       
        if (currentPosition == 0){
            $("div.mobile-logo, header#desktop").removeClass("active");
        }else{
            $("div.mobile-logo, header#desktop").addClass("active");
        }

        if (currentPosition == home){
            $("a.home").addClass("active");
            $("a.service, a.contactus, a.portfolios").removeClass("active");
        }
        if (currentPosition >= services-400){
            $("a.service").addClass("active");
            $("a.home, a.contactus,a.portfolios").removeClass("active");
        }
        if (currentPosition >= portifolio-400){
            $("a.portfolios").addClass("active");
            $("a.home, a.contactus, a.service").removeClass("active");
        }
        if(currentPosition >= contact-400){
            $("a.contactus").addClass("active");
            $("a.home, a.service, a.portfolios").removeClass("active");
        }

    });

    $("div.btn").on("click", function(){
        var position = $("section#contact").offset().top;
        $("html, body").animate({scrollTop:position}, 1000);
    });
    
    $('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
})