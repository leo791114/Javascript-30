const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// console.log(ctx);
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
// The strokeStyle sets or returns the colr, gradient, or pattern used for strokes.
ctx.strokeStyle = '#BADA55';
// The lineJoin property sets or returns the type of corner created when two lines meet.
ctx.lineJoin = 'round';
// The lineCap property sets or returns the style of the end caps of a line. 
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;
    // Initializing
    ctx.beginPath();
    // Set the start point.
    ctx.moveTo(lastX, lastY);
    // The offeset property provides the offset value of the mouse pointer between that event and the padding edge of the target node
    // Set the end point.
    ctx.lineTo(e.offsetX, e.offsetY);
    // The stroke() method actually draws the path we have defined with all those moveTo() and lineTo() methods.
    ctx.stroke();
    console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);