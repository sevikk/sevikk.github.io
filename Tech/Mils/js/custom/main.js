$(document).ready(function(){
	$('.responsive').slick({
		  infinite: false,
		  dots: true,
		  variableWidth: true,
		  touchMove: false,
		  speed: 300,
		  swipe: false,
		  arrows: false,
		  prevArrow: false,
          nextArrow: false,
         
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  adaptiveHeight: true,
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

});
			
$(document).ready(function(){
    $('.slick-prev').html('.premier');
    $('.slick-next').html('.premierSecond')
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


$(document).ready(function(){
    var tabs2 = $('.description_nav2');
    $('.tabs--content2 > div', tabs2).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs2.on('click', '.nav--tabs2 a', function(e){
        e.preventDefault();
        var tabId2 = $(this).attr('href');
        $('.nav--tabs2 a',tabs2).removeClass();
        $(this).addClass('active');
        $('.tabs--content2 > div', tabs2).hide(0);
        $(tabId2).show();
    });
});