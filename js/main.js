$(function(){
    // Slider
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: 1500,
    });

    // Burger Menu
    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    })
});