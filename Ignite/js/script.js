$(function() {
    $('.header_slider').owlCarousel({
        loop:true,
        items: 1,
        nav:false,
        dots:true,
    })
    $('.stories_slider').owlCarousel({
        items: 1,
        nav:true,
        dots:true,
        nav: true,
        navText: ["<img src='img/back.svg'>","<img src='img/next.svg'>"]
    })
});
