let countDown;
const timerDisplay = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // setInterval(() => {
    //     seconds--;
    //     console.log(seconds);
    // }, 1000);

    // clear any existing timers
    clearInterval(countDown);

    const now = Date.now();
    const then = now + seconds * 1000;
    // console.log({ now, then });
    displayTimeLeft(seconds);
    displayEndTime(then);
    countDown = setInterval(() => {
        const secondsLeft = Math.round(((then - Date.now()) / 1000));
        // Check if we should stop the clock
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        // Display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    console.log({ minutes, remainderSeconds });
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    // Get timestamp
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const seconds = end.getSeconds();
    endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    console.log(seconds);
    console.log(typeof (seconds));
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    console.log(minutes);
    timer(minutes * 60);
    this.reset();
});




