$(function(){

  $(".carousel-arrow-right").click(function(){ // при клике на правую кнопку запускаем следующую функцию:
    $(".carousel-list").animate({left: "-125px"}, 200); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
    setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
      $(".carousel-list .carousel-element").eq(0).clone().appendTo(".carousel-list"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
      $(".carousel-list .carousel-element").eq(0).remove(); // удаляем первый элемент карусели   
      $(".carousel-list").css({"left":"0px"}); // возвращаем исходное смещение набора набора элементов карусели
    }, 300);
  });
  
  $(".carousel-arrow-left").click(function(){ // при клике на левую кнопку выполняем следующую функцию:    
    $(".carousel-list .carousel-element").eq(-1).clone().prependTo(".carousel-list"); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора  
    $(".carousel-list").css({"left":"-125px"}); // устанавливаем смещение набора -222px    
    $(".carousel-list").animate({left: "0px"}, 200); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
    $(".carousel-list .carousel-element").eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
  });
  
});

$(function(){

  var html = $('#test').html();
  var articles =[
      {
      title: 'Yamaha YZF-R1',
      content: 'The Yamaha YZF-R1, or R1, is an open class sport bike, or superbike, motorcycle manufactured by Yamaha Motor Company since 1998'
      },
      {
      title: 'Kawasaki Ninja H2',
      content: 'The Kawasaki Ninja H2 is a "supercharged supersport" class motorcycle in the Ninja sportbike series, manufactured by Kawasaki Heavy Industries, featuring a variable-speed centrifugal-type supercharger'
      },
      {
      title: 'Ducatti 1299 Panigale',
      content: 'The Ducati 1299 Panigale is a 1,285 cc (78.4 cu in) Ducati sport bike unveiled at the 2014 Milan Motorcycle Show and produced since 2015 as a successor of the 1,198 cc (73.1 cu in) 1199. The motorcycle is named after the small manufacturing town of Borgo Panigale.'
      }
  ];
  var content = tmpl(html, {
    data: articles
  });

  $('body').append(content);
});
