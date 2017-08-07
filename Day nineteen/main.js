const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(localMediaStream => {
        console.log(localMediaStream);
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
    }).catch(err => {
        console.error('OH NO!!!', err);
    });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // mess with them
        console.log(pixels);
        pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        // ctx.globalAlpha = 0.1;
        // put them back
        // pixels = greenScreen(pixels);
        ctx.putImageData(pixels, 0, 0);
        debugger;
    }, 16);
}

function takePhoto() {
    // Play the audio sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    // toDataURL method returns the data URI containing a representation of the image in the format specified by the type parameter
    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'Leo');
    // link.textContent = 'Download photo';
    link.innerHTML = `<img src=${data} alt="Leo's photo">`;
    strip.insertBefore(link, strip.firstChild);

}

function redEffect(pixels) {
    for (i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] = pixels.data[i] + 100; //red channel
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // green channel
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue channel
        pixels.data[i + 3] = pixels.data[i + 3] + 100; //alpha channek
    }

    return pixels;
}

function rgbSplit(pixels) {
    for (i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i]; //red channel
        pixels.data[i + 100] = pixels.data[i + 1]; // green channel
        pixels.data[i + 250] = pixels.data[i + 2]; // blue channel
        // pixels.data[i + 3] = pixels.data[i + 3] + 100; //alpha channek
    }

    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
        console.log(input);
        console.log(levels);
    });

    for (i = 0; i < pixels.data.length; i += 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax
        ) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}

getVideo();



video.addEventListener('canplay', paintToCanvas);