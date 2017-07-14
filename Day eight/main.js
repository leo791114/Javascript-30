const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// The strokeStyle sets or returns the colr, gradient, or pattern used for strokes.
ctx.strokeStyle = '#BADA55';
// The lineJoin property sets or returns the type of corner created when two lines meet.
ctx.lineJoin = 'round';
// The lineCap property sets or returns the style of the end caps of a line. 
ctx.lineCap = 'round';
// The lineWidth property sets or returns the current line width
ctx.lineWidth = 1;

ctx.globalCompositeOperation = 'multiply'


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidthDirection = true;

function draw(e) {
    if (!isDrawing) return;
    // Initializing
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    // Set the start point.
    ctx.moveTo(lastX, lastY);
    // The offeset property provides the offset value of the mouse pointer between that event and the padding edge of the target node
    // Set the end point.
    ctx.lineTo(e.offsetX, e.offsetY);
    // The stroke() method actually draws the path we have defined with all those moveTo() and lineTo() methods.
    ctx.stroke();
    // ES6 trick to reassign both lastX and lastY values
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    // Increase the lineWidth, and after it reaches 100, it starts decreasing.
    if (ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
        lineWidthDirection = !lineWidthDirection;
    }
    console.log(lineWidthDirection);
    console.log(ctx.lineWidth);
    if (lineWidthDirection) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);