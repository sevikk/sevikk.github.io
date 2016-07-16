
var a = prompt('Set a base', '');
var b = prompt('Set an exponent', '');

function pow(a,b){
  var result = Math.pow(a,b);
  return result;
}
  if ( isNaN (a) || isNaN (b)){
    alert('sorry try again');
  } else if ( a == "" || b == ""){
    alert('field is empty. try again')
  } else if ( a == null || b == null){
    alert ('Enter cancelled');
  } else {
    console.log('result is ', pow(a,b));
  }
