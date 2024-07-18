const btn = document.getElementById('stop-btn');

function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById('time').innerText = time;
}
showTime();

//setTimeout - accepts time as milisecond i.e. 5000 - result will display after 5 seconds
//setInterval - displays result after each 5 seconds

let interval = setInterval(showTime, 1000);

btn.addEventListener('click', () => {
    clearInterval(interval);
})