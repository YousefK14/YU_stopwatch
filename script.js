let tens = 0;
let seconds = 0;
let minutes = 0;
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
let interval;
let running = false;

const loadInitialState = () => {
    const btnStart = document.getElementById("button-start");
    const btnReset = document.getElementById("button-reset");

    btnStart.addEventListener("click", function () {
        clearInterval(interval);
        if (!running) {
            running = true;
            interval = setInterval(startTimer, 10);
            btnStart.textContent = "Pause";
        } else {
            running = false;
            clearInterval(interval);
            btnStart.textContent = "Start";
        }
    });

    btnReset.addEventListener("click", function () {
        clearInterval(interval);
        resetTimer();
    });
};

const resetTimer = () => {
    running = false;
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.textContent = "00";
    appendSeconds.textContent = "00";
    appendMinutes.textContent = "00";
    btnStart.textContent = "Start";
};

const startTimer = () => {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }

    appendTens.textContent = tens < 10 ? "0" + tens : tens;
    appendSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    appendMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
};

window.onload = function () {
    loadInitialState();
};
