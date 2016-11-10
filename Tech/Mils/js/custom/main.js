$(function() {
	$('.portfolio').slick({
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

		

$(function(){

	$(".tab").on("click", function(){
		var tabs = $(".tab"),
			cont = $(".tab-cont");	
		tabs.removeClass("active");
		cont.removeClass("active");
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");
	});
});	

$(function(){

	$(".second-tab").on("click", function(){
		var tabs = $(".second-tab"),
			cont = $(".cont2");	
		tabs.removeClass("active");
		cont.removeClass("active");
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");
	});
});	

$(function(){

	$(".third-tab").on("click", function(){
		var tabs = $(".third-tab"),
			cont = $(".cont3");	
		tabs.removeClass("active");
		cont.removeClass("active");
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");
	});
});	

$(function(){

	$(".fourth-tab").on("click", function(){
		var tabs = $(".fourth-tab"),
			cont = $(".cont4");	
		tabs.removeClass("active");
		cont.removeClass("active");
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");
	});
});	

$(function(){

	$(".fifth-tab").on("click", function(){
		var tabs = $(".fifth-tab"),
			cont = $(".cont5");	
		tabs.removeClass("active");
		cont.removeClass("active");
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");
	});
});	
