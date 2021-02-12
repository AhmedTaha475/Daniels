
var typed = new Typed('.typing', {
    strings: ['Larry Daniels', 'Developer', 'Designer'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

let aboutSectionOffset = $("#about").offset().top;
let counterSectionOffset = $("#counter").offset().top;
let counterindex = 0;
$(window).scroll(function () {
    let scrollTop = window.scrollY;

    if (scrollTop > 300) {
        $(".navbar").css({ "background-color": "white", "box-shadow": "0 10px 30px -8px rgba(0, 0, 0, 0.3)", "padding": "10px" });
        $(".line").css("background-color", "black");
        $(".nav-link,.navbar-brand").css("color", "black");
        if (scrollTop > aboutSectionOffset - 100) {
            $(".bar1").addClass("animation1");
            $(".bar2").addClass("animation2");
            $(".bar3").addClass("animation3");
            if (scrollTop > counterSectionOffset - 600) {
                for (counterindex; counterindex < 1; counterindex++) {
                    jQuery(function ($) {
                        "use strict";

                        var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

                        var $counters = $(".counter");

                        /* Start counting, do this on DOM ready or with Waypoints. */
                        $counters.each(function (ignore, counter) {
                            counterUp(counter, {
                                duration: 2000,
                                delay: 16
                            });
                        });

                    });
                }

            }
        }

    }

    else {
        $(".navbar").css({ "background-color": "transparent", "box-shadow": "none", "padding": "15px" });
        $(".nav-link,.navbar-brand").css("color", "white");
        $(".line").css("background-color", "white")
    }

})

$(".navbar .nav-link").click(function () {
    let currentLink = $(this).attr("href");
    let secOffset = $(currentLink).offset().top;
    $("body", "html").animate({ scrollTop: secOffset }, 1000);

})
$(document).ready(function () {
    $(".loadingScreen").fadeOut(1500);
})