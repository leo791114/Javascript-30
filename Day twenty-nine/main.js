let countDown

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    console.log({ now, then });
    countDown = setInterval(() => {
        const secondsLeft = Math.round(((then - Date.now()) / 1000));
        // Check if we should stop the clock
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        // Display it
        console.log(secondsLeft);
    }, 1000);
}