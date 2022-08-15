// I used hourCycle of 23h,
// because the timer starts at the midnight time,
// and h23 makes midnight start at 00:00
// instead of 12:00 by default 24h.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle

// Elements
const time = document.querySelector("time");
const resume = document.querySelector("#resume");
const restart = document.querySelector("#restart");

// Date (it's being used as a timer)
const date = new Date();

// Variable to store interval state
// so it can be deleted via clearInterval
let interval;

// Increment time by 1 second and update UI correspondingly
function incrementTime() {
        date.setSeconds(date.getSeconds() + 1);
        time.innerText = date.toLocaleTimeString('en-US', {hourCycle: 'h23'});
}

// Resume timer
function play() {

        interval = setInterval(incrementTime, 1000);

        // Switch icon to pause
        const icon = resume.children[0];
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
}

// Pause timer
function pause() {

        clearInterval(interval);

        // Switch icon to play
        const icon = resume.children[0];
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
}

// Reset time to 00:00:00
function resetTime() {
        date.setHours(0, 0, 0, 0);
        time.innerText = date.toLocaleTimeString('en-US', {hourCycle: 'h23'});
}

// Initializing initial timer with 00:00:00
resetTime();

resume.addEventListener(
    "click",

    () => {

        const icon = resume.children[0];

        if (icon.classList.contains("fa-play")) {
                play();
        }

        else if (icon.classList.contains("fa-pause")) {
                pause();
        }
    }
);

restart.addEventListener(
    "click",
    () => {
            resetTime();
            pause();
    }
);