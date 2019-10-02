const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer =[0,0,0,0];

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if(time%10 == time){
        return "0"+ time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = timer[0] + " : " + timer[1] + " : " + timer[2];
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = leadingZero(Math.floor((timer[3]/100)/60));
    timer[1] = leadingZero(Math.floor((timer[3]/100) - (timer[0]*60)));
    timer[2] = leadingZero(Math.floor(timer[3] - (timer[1]*100) -(timer[0]*6000)));

}


// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    console.log(textEntered);

    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText){
        testWrapper.style.borderColor = "#429890";
    }
    else{
        if (textEntered == originTextMatch){
            testWrapper.style.borderColor = "#65CCf3";
        }else{
            testWrapper.style.borderColor = "#E95D0F"
        }
    }
}


// Start the timer:
function start(){
    let textEnteredLen = testArea.value.length;
    if (textEnteredLen === 0){
        setInterval(runTimer,10);
    }
    console.log(textEnteredLen);
}


// Reset everything:
function reset(){
    console.log("reset clicked");
}


// Event listeners for keyboard input and the reset button:

testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);
