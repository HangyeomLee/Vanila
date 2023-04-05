const clock = document.querySelector("h2#clock");
let CLOCK_TEXT = null;

function getClock(){
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    let pmam = true;
    if(hours > 12){
        hours = hours - 12;
        pmam = false
    }
    let minutes = String(date.getMinutes()).padStart(2,"0");
    let seconds = String(date.getSeconds()).padStart(2,"0");
    if(pmam === false){
        seconds = seconds +" PM";
    }
    else{
        seconds = seconds +" AM";
    }
    CLOCK_TEXT = `${hours}:${minutes}:${seconds}`;
    clock.innerText = CLOCK_TEXT;
}
getClock();
setInterval(getClock, 1000);