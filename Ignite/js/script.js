$(function($) {
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
    });

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

    $('.hide_button').click(function(){
        $('.menu_hidden').toggleClass('show')
    })
});
