const clock = document.querySelector("h2#clock");
let CLOCK_TEXT = null;

function getClock(){
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    let minutes = String(date.getMinutes()).padStart(2,"0");
    let seconds = String(date.getSeconds()).padStart(2,"0");
    CLOCK_TEXT = `${hours}:${minutes}:${seconds}`;
    clock.innerText = CLOCK_TEXT;
}
getClock();
setInterval(getClock, 1000);