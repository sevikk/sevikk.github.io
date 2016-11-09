$(function() {
	$('.portfolio-widget').slick({
		infinite: false,
		dots: true,
		variableWidth: true,
		touchMove: false,
		speed: 300,
		swipe: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		focusOnSelect: true,
		dragable: false,
		variableWidth: true,
		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        dots: false,
		        arrows: true,
		        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="images/arl.png"></button>',
       			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="images/arr.png"></button>',
		      }
		    }
		  ]
	});		
});

			


$(document).ready(function(){
    var tabs = $('.description_nav');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.nav-tabs a', function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.nav-tabs a',tabs).removeClass();
        $(this).addClass('active');
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });
});


// $(document).ready(function(){
//     var tabs2 = $('.description_nav2');
//     $('.tabs--content2 > div', tabs2).each(function(i){
//         if ( i != 0 ) $(this).hide(0);
//     });
//     tabs2.on('click', '.nav--tabs2 a', function(e){
//         e.preventDefault();
//         var tabId2 = $(this).attr('href');
//         $('.nav--tabs2 a',tabs2).removeClass();
//         $(this).addClass('active');
//         $('.tabs--content2 > div', tabs2).hide(0);
//         $(tabId2).show();
//     });
// });