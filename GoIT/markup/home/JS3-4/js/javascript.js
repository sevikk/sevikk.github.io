  var home = {
    title: "Тест по програмированию",
    questions: ["Вопрос №1", "Вопрос №2", "Вопрос №3"],
    answers: [["Вариант ответа 1", "Вариант ответа 2", "Вариант ответа 3"],
    ["Вариант ответа 1", "Вариант ответа 2", "Вариант ответа 3"],
    ["Вариант ответа 1", "Вариант ответа 2", "Вариант ответа 3"]],

  element_title : function(title) {
    var div = document.createElement('h3');
        div.innerHTML = title;
        div.style.textAlign = 'center';
        document.body.appendChild(div);
  },
  render : function(){
    var q = this.questions.length;
    var answ,ul,li,p,chk, textElem, label, button;

    for(var i=0; i<q; i++){
      p = document.createElement('p');
      p.innerHTML = this.questions[i];
      document.body.appendChild(p);

      ul = document.createElement('ul');
      p.appendChild(ul);
      p.style.fontWeight='bold';

      answ = this.answers[i].length;

      for (var j=0; j<answ; j++){

        li = document. createElement('li');
        li.style.listStyle = 'none';

        chk = document.createElement('input');
        chk.setAttribute('type','checkbox');

        label = document.createElement('label');
        textElem = document.createTextNode(this.answers[i][j]);

        ul.appendChild(li);
        li.appendChild(chk);
        li.appendChild(label);
        label.appendChild(textElem);


      }
    }
  },
  element_button: function (fbut) {
    var but = document.createElement('button');
        but.innerHTML = "Проверить мои результаты";
        but.setAttribute('type','button');
        but.setAttribute('class', 'btn btn-primary btn-lg');
        document.body.appendChild(but);

  }
}
home.element_title ('Тест по програмированию');
home.render();
home.element_button();
