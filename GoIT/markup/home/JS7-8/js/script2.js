$(document).ready(function(){
  $('span').hide();
    $(".labels #text").hover(function() {
        $(this).next("span").animate({opacity: "show", top: "-55"}, "slow");
    }, function() {
        $(this).next('span').animate({opacity: "hide", top: "-85"}, "fast");
    });
    $('#button').click(function(){
      $('span').slideToggle();
    });
});
