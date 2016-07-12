
var a = prompt('Set a base', '');
var b = prompt('Set an exponent', '');

function pow(){
if (a >= 1){
  console.log('base is ' + a);
} else if ( a == ""){
  console.log ('Enter cancelled');
} else {
  console.log (' cancelled');
}

if (b>=1){
  console.log('exponent is ' + b);
} else if (b == ""){
  console.log ('Enter cancelled');
} else {
  console.log('cancelled')
}
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
   alert(enterName + ', you are login');
 }
  else if (enterName == arr[1]) {
     alert(enterName + ', you are login');
   }
    else if (enterName == arr[2]) {
       alert(enterName + ', you are login');
     }
      else if (enterName == arr[3]) {
         alert(enterName + ', you are login');
       }
        else if (enterName == arr[4]) {
           alert(enterName + ', you are login');
 }
 else if (enterName == ""){
   alert(enterName + 'no name');
 }
 else {
   alert(' try again');
 }
