$(function () {
    $('.slider__inner-items').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
    });    
    
    var containerEl1 = document.querySelector('[data-ref="mix-1"]');
    var containerEl2 = document.querySelector('[data-ref="mix-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);


})