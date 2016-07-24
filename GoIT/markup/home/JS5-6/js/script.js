for_count.innerHTML="00:00:00:00";
start.addEventListener("click", start_click);
stp.addEventListener("click", stp_click);


var count = 0, timerId, go = 0;

function start_click() {
  start.removeAttribute('value');
  start.setAttribute('value', 'Pause');
  if (go==0){
  timerId=setInterval(function() {
    count++;
    var msec = count%100;
    var sec = Math.floor(count/100)%60;
    if (  sec<10) {sec = "0" + sec;};
    var min = Math.floor(count/6000)%60;
    if (  min<10) {min = "0" + min;};
    var hours = Math.floor(count/36000)%24;
    if (  hours<10) {hours = "0" + hours;};
    var str = hours + ":" + min + ":" + sec + ":" + msec;
    for_count.innerHTML = str;
  }, 1)
    go=1;
  } else {
  clearInterval(timerId);
  go=0;
  start.removeAttribute('value');
  start.setAttribute('value', 'Continue');
}
}


function stp_click(){
  clearInterval(timerId);
  go=0;
  count=00;
  for_count.innerHTML= "00:00:00:00";
}
