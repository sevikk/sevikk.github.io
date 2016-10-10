"use strict";

//создаем массив объектов с набором вопросов

var obj = {

header: "Programming test",

questions:[
     {title:"Какой язык используется во FrontEnd разработке?",
      chekboxName:["one","two","three"],
      id:["1","2","3"],
      answers:["Java","PHP","JavaScript"],
      correct:3
      },
     {title:"Какие существуют CSS-препроцессоры?",
      chekboxName:["one","two","three"],
      id:["1","2","3"],
      answers:["SASS/LESS","SASS/LASS","SESS/LESS"],
      correct:1
      },
      {title:"Что такое Gulp?",
      chekboxName:["one","two","three"],
      id:["1","2","3"],
      answers:["Сборщик веб-приложений","Сборщик серверов","Сборщик данных"],
      correct:1
      }]
      };

//записываем массив объектов в localStorage 
try {
var sObj = JSON.stringify(obj);
localStorage.setItem("object", sObj);
}
catch (e) {
  alert (e)
}
try {
var retObj = JSON.parse(localStorage.getItem("object"));
}
catch (e) {
  alert (e)
}

//формируем тест с помощью шаблонизатора
var html = $('#test').html();
var content = tmpl(html,retObj);
$("body").append(content);


//выводим модальное окно
function showModal(e){
     e.preventDefault();
     var modal = $("<div class='modal'></div>");
     var result = 0;
     var answer = $('input:checked');
     var correct = [];
     for (var i=0; i<retObj.questions.length;i++){
          correct[i] = retObj.questions[i].correct;
          if($(answer[i]).attr('id')==correct[i]){
            modal.append('<p class="correct">Вы прошли тест успешно!</p>');
     } else {
          modal.append('<p class="incorrect">Тест не пройден. Пропробовать еще раз?</p>');
     }
}
modal.append('<button>Попробовать снова</button>');
$('body').append(modal);

$('button').one('click',function(e){
     e.preventDefault();
     modal.detach();
     $('input').attr('checked', false);
})
}
$('.success').on('click',showModal);
