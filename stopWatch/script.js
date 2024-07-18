const input = document.getElementById('input');
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let interval;
let running = false;

startButton.addEventListener('click', () => {
    if (running) {
        clearInterval(interval);
    }
    let value = parseInt(input.value);
    if (isNaN(value) || value <= 0) {
        display.innerText = "Invalid input";
        return;
    }
    running = true;
    display.innerText = formatTime(value);
    interval = setInterval(() => {
        value--;
        display.innerText = formatTime(value);
        if (value <= 0) {
            clearInterval(interval);
            running = false;
        }
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    running = false;
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;

    return minutes + ":" + remainingSeconds;
}
