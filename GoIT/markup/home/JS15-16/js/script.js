function GoogleCallback(jqueryObj, data) {

	var resultObj = data.results;
	console.log('data', resultObj);
	$('.js-result').find('li').remove();

	for (var i = 0; i < resultObj.length; i++) {
		console.log(resultObj[i]);
		var item = '<li class="item">' +
			'<a class="title" href="' + resultObj[i].url + '" target="_blank">' + resultObj[i].title + '</a>' +
			'<p class="contentBox">' + resultObj[i].content + '</p>' +
			'</li>';

		$('.js-result').append(item);
	}
}

$(function() {
	function search() {
		var inputTxt = $('.js-input').val();

		$.ajax({
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + inputTxt + '&callback=GoogleCallback&context=?',
			dataType: "jsonp",
			success: function(data) {
			}
		});
	}

	$('body').on('click', '.js-btn', function() {
		search();
	});
	$(document).keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
			search();
		}
	});
});




// SECOND HW


function Human(){
this.name = 'Vasya';
this.age = 25;
this.sex = 'men';
this.weight = 65;
this.height = 170
};

var newHuman = new Human();

console.log('Human', Human);
console.log('newHuman',newHuman)


 function Worker() {
 this.company = 'editor';
 this.salary = 500;
 this.work = function(){
 	alert('I am frontend developer and i am cool');
 }
};

Worker.prototype = newHuman;
var newWorker = new Worker();

console.log('Worker', Worker);
console.log('newWorker', newWorker)
console.log('newWorker.age', newWorker.age);

function Student() {
this.education = 'editor';
this.grant = 500;
this.watchTVseries = function(){alert('I like horor movees');
}
};

Student.prototype = newHuman;
var newStudent = new Student();

console.log('Student', Student)
console.log('newStudent', newStudent);
console.log('newStudent.sex', newStudent.sex);