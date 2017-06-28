$(function($) {
    //$('.header_slider').owlCarousel({
   //     loop:true,
    //    items: 1,
    //    nav:false,
    //    dots:true,
   // })
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



    $('#button-wrapper').on('click', function(e) {
      e.preventDefault();
      $(this).children().toggleClass('button-transform');
      $('.menu_hidden').toggleClass('show');
    });


    var center = {lat: 45.9223505, lng: 22.7669689};
    var israel = {lat: 32.0663043, lng: 34.7836494};
    var germany = {lat: 50.1105609, lng: 8.661962};
    var ukraine = {lat: 50.4444129, lng: 30.4493488};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: center
    });
    var marker = new google.maps.Marker({
      position: israel,
      map: map
    });
    var marker = new google.maps.Marker({
      position: germany,
      map: map
    });
    var marker = new google.maps.Marker({
      position: ukraine,
      map: map
    });
});
