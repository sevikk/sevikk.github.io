function pow(){

var a = prompt('Set an base', '');
var b = prompt('Set an exponent', '');
console.log (Math.pow(a ,b));
}

pow();


var arr = [];

arr[0] = prompt('Enter first name', '');
arr[1] = prompt('Enter second name', '');
arr[2] = prompt('Enter third name', '');
arr[3] = prompt('Enter forth name', '');
arr[4] = prompt('Enter fifth name', '');


var enterName = prompt('Enter name', '');

if (enterName == arr[0]) {
  var name = enterName;
   alert(name + ', you are login');
 }
  else if (enterName == arr[1]) {
     var name = enterName
     alert(name + ', you are login');
   }
    else if (enterName == arr[2]) {
       var name = enterName
       alert(name + ', you are login');
     }
      else if (enterName == arr[3]) {
         var name = enterName
         alert(name + ', you are login');
       }
        else if (enterName == arr[4]) {
           var name = enterName
           alert(name + ', you are login');
 } else {
   var name = enterName
   alert(name + ' not found');
 }
