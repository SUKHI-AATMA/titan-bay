$(document).ready(function () {

    if ($(window).width() <= 480) {
        $('.burger-menu .menuBar, .overlay-body').on("click tap", function () {
            $('.menu-wrap nav  ul').toggleClass('active');
            $('.burger-menu .menuBar span').toggleClass('open');
            $('header').toggleClass('transparent');
            $('.overlay-body').toggleClass('active');
            $('body').toggleClass('bodyOverflowHidden');
        });
    }

    if($('.home-page').length){
        var owlTeam = $('.owl-carousel');
        owlTeam.owlCarousel({
            dots: false,
            nav: false,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    margin:0,
                    center: true,
                    items: 1,
                    mouseDrag: true,
                    touchDrag: true,
                    dots: false,
                    nav: true,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn'
                },
                769: {
                    items: 3
                }
            }
        });
    }



    var didScroll;
    var lastScrollTop = 0;
    var delta = 0;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
        hasScrolled();
    });

    setInterval(function () {
        if (didScroll) {
            //if ($(window).width() > 991) {
                hasScrolled();
            //}
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down pd70').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').addClass('nav-down darkBlackBG').removeClass('nav-up');
            }
        }
        lastScrollTop = st;

        if (st == 0 && st <= 10) {
            $('header').removeClass('darkBlackBG').addClass('transparent pd70');
        } else {
            $('header').removeClass('transparent pd70', 1000).addClass('darkBlackBG');
        }

    }

    
    

});


if($('.home-page').length){

    var a = 0;
    $(window).scroll(function() {

        var oTop1 = $('.graph1').offset().top - window.innerHeight + 50;
        //console.log(oTop1)
        if (a == 0 && $(window).scrollTop() > oTop1) {
            //console.log('graph11');
            setTimeout(function(){
                $('.graph-wrap.graph1').delay(5).addClass('active');
                $('.graph-wrap.graph1 .col .per').addClass('active');
            }, 500);
            
        }

        var oTop2 = $('.graph2').offset().top - window.innerHeight  + 50;
        if (a == 0 && $(window).scrollTop() > oTop2) {
            //console.log('graph222');
            setTimeout(function(){
                $('.graph-wrap.graph2').addClass('active');
                $('.graph-wrap.graph2 .col .per').addClass('active');
            }, 600);
        }

        var oTop3 = $('.graph3').offset().top - window.innerHeight  + 50;
        if (a == 0 && $(window).scrollTop() > oTop3) {
            //console.log('graph3333');
            setTimeout(function(){
                $('.graph-wrap.graph3').addClass('active');
                $('.graph-wrap.graph3 .col .per').addClass('active');
            }, 700);
        }

    });

    


}


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


var acc = document.getElementsByClassName("sec-desc");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            //console.log('hi');
            
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        
    });
}