const clock = document.querySelector("h2#clock");
let CLOCK_TEXT = null;

function getClock(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds >= 0 && seconds <= 9){
        CLOCK_TEXT = `${hour}:${minute}:0${seconds}`;
        }
    else{
        CLOCK_TEXT = `${hour}:${minute}:${seconds}`;
    }
    clock.innerText = CLOCK_TEXT;
}
getClock();
setInterval(getClock, 1000);