$(function () {
  'use strict';
  var input = document.querySelector('#enter');
  var btn = document.querySelector('#searchPartners');
  
  
  // masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: 10
  });
  $grid.imagesLoaded().progress(function () {
  $('.grid-item').imagefill();
  $grid.masonry();
  });
  

  // request img
  function imgRequest() {
    var URL = "https://pixabay.com/api/?key=2776428-54b0217d61731233122edec15&q="+input.value+"&image_type=photo&callback=?";
    $.ajax({
        url: URL,
        dataType: "jsonp",
        success: function (data) {
      var $img = $('.grid-img');
      var $title = $('.title');
      for (var i = 0; i < 7; i++) {
        $img[i].src = data.hits[i].webformatURL;
        $title[i].innerHTML = data.hits[i].tags;
      }
    }
        
    });
    input.value = '';
  }
  
  imgRequest();
  
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    imgRequest();
  });
  
  input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      imgRequest();
  }
  });
  
  
  //slider
  $('.jcarousel').jcarousel({
    wrap: 'circular'
  })
    .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: false
    });

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
});



