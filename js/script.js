$(window).on("load", function () {

    $(".loader .inner").fadeOut(200, function () {
        $(".loader").fadeOut(450);
    });

    var $container = $('.items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 2000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Coder", "Trader", "Content writer", "Student"],
        typeSpeed: 200,
        loop: true,
        startDelay: 300,
        showCursor: false

    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;


        }


    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function () {
        $('#filters .current').removeClass('current');
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        var $container = $('.items');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 80 }, "slow");

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }




    }

});

