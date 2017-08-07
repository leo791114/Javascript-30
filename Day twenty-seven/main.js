const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(e);
    console.log(e.pageX);
    console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    slider.classList.remove('active');
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    slider.classList.remove('active');
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; //Stop the function from running.
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // console.log(e.pageX);
    const walk = (x - startX) * 3;
    // console.log({ x, startX });
    slider.scrollLeft = scrollLeft - walk;
    console.log(scrollLeft, slider.scrollLeft, e.pageX, startX, walk);
    // console.count(isDown);
    // console.log(startX);
});