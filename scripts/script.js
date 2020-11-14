$(document).ready(function(){
    $('.mob_slides').slick({
        arrows: true
    });
});
$(document).ready(function(){
    $('.desktop_slides').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1500
    });
});
$(document).ready(function(){
    $('.details_slider_main').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.details_slider_small',
        swipe: false
    });
});
$(document).ready(function(){
    $('.details_slider_small').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.details_slider_main',
        focusOnSelect: true
    });
});
