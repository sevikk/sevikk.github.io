$(function() {
	$('.main_choose').click(function() {
	        $('.active').fadeIn("fast");
	    });

	$('.img_right, .img_left').click(function() {
	        $('.active').fadeOut("fast");
	    });
});