let displayWatch = document.getElementById("displayTime");
displayWatch.textContent = "00";  // Setting the initial time

let timer;
let elapsedTime = 0;
let paused = true;

let startWatch = document.getElementById("start");
startWatch.addEventListener("click", () => {
    if (paused) {
        paused = false;
        timer = setInterval(() => {
            elapsedTime++;
            displayTime();
        }, 1);
    }
});

let pauseWatch = document.getElementById("pause");
pauseWatch.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        clearInterval(timer);
    }
});

let resetWatch = document.getElementById("reset");
resetWatch.addEventListener("click", () => {
    paused = true;
    clearInterval(timer);
    elapsedTime = 0;
    displayTime();
});

function displayTime() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    let timeString = [
        hours > 0 ? String(hours).padStart(2, '0') : "00",
        (hours > 0 || minutes > 0) ? String(minutes).padStart(2, '0') : "00",
        String(seconds).padStart(2, '0')
    ].join(' : ');

    displayWatch.textContent = timeString;
}
