$(document).ready(function () {

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
                $('header').removeClass('nav-down pd48').addClass('nav-up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('header').addClass('nav-down darkBlackBG').removeClass('nav-up');
                }
            }
            lastScrollTop = st;

            if (st == 0 && st <= 10) {
                $('header').removeClass('darkBlackBG').addClass('transparent pd48');
            } else {
                $('header').removeClass('transparent pd48', 1000).addClass('darkBlackBG');
            }

        }




    });




