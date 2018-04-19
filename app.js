$('.scroll-about').click(function () {
    $('html,body').animate({
        scrollTop: $('#aboutMe').offset().top
    }, 'slow');
});

$('.scroll-projects').click(function () {
    $('html,body').animate({
        scrollTop: $('#projects').offset().top
    }, 'slow');
});

$('.scroll-skills').click(function () {
    $('html,body').animate({
        scrollTop: $('#skills').offset().top
    }, 'slow');
});

$('.scroll-recommendations').click(function () {
    $('html,body').animate({
        scrollTop: $('#recommendations').offset().top
    }, 'slow');
});

$('.scroll-contact').click(function () {
    $('html,body').animate({
        scrollTop: $('footer').offset().top
    }, 'slow');
});

$(document).ready(function () {
    $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 1600,
        arrows: false,
        dots: true
    });
});
