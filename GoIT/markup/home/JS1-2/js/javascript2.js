var names = [];

for (var i = 0; i < 5; i++) {
    names.push(prompt('Enter your name:'));
}

console.log(names);

var log = prompt('Enter your name:');
console.log(names.indexOf(log));

if(names.indexOf(log) > 0){
   alert(log + '  you are login');
}
else if (log == null || names == null) {
	alert('Enter cancelled');
}
else if (log == '' || names == '') {
alert('Fullfill all fields');
}
else {
	alert ('Enter not allowed');
}
