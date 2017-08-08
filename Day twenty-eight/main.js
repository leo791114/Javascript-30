const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');


function handleMove(e) {
    // console.log(e);
    // console.log(this);
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
    // console.log(e.pageY, this.offsetTop);
    // console.log(y);
    // console.log(height);
}

function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    console.log(video.paused);
}


speed.addEventListener('mousemove', handleMove);
video.addEventListener('click', toggleVideo);
