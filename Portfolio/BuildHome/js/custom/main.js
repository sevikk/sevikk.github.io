$(function(){
	$('.your-class').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        dots: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
        focusOnSelect: false,
    });


  $(".accordion h4").click(function(){

        $(this).next("p").stop().slideToggle("slow").siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h4").removeClass("active");
    });

 });