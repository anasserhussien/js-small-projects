const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){
    
    var date = new Date();
    let hr = date.getHours(),  min = date.getMinutes(), sec = date .getSeconds();
    console.log(hr, min, sec);

    let secPosition = sec*360/60;
    let minPosition = (min*360/60) + secPosition/60 ;
    let hrPosition = (360*hr/12) + minPosition/12;


    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}


setInterval(runTheClock, 1000);
