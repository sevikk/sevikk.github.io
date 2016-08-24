console.log("test")

$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 425;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 425;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 425;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
});

$(function(){

  var html = $('#test').html();
  var articles =[
      {
      title: 'loveMoto',
      },
      {
      title: 'Хочу учить фронтенд, потому что:',
      content: 'Не вижу причины, почему не могу'
      },
      {
      title: 'Мой контактный телефон:',
      content: '+38(095)565-15-24'
      },
      {
      title: 'Мой профиль в контакте::',
      content: 'Всеволод Кузнецов'
      }
  ];
  var content = tmpl(html, {
    data: articles
  });

  $('body').append(content);
});
