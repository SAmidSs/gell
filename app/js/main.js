$(function () {
    $('.slider__inner-items').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
    });


    var mixer = mixitup('.products__items');
})