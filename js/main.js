$(document).ready(function () {

    $('.burger-menu a, .overlay-body').on("click tap", function () {
        $('.menu-wrap nav  ul').toggleClass('active');
        $('.burger-menu a span').toggleClass('open');
        $('header').toggleClass('transparent');
        $('.overlay-body').toggleClass('active');
    });


        var didScroll;
        var lastScrollTop = 0;
        var delta = 0;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function (event) {
            didScroll = true;
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


var a = 0;
$(window).scroll(function() {

    var oTop = $('#graphAnimation').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        console.log('graph');
        $('.graph-wrap ').addClass('active');
        $('.graph-wrap .col .per').addClass('active');
    }

});


