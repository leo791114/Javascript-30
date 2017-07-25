const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    // Object destructuring - Assigning to new variable names
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // e.target is going to be the thing that it actually trigger on.
    // this is always the thing that we listen on.
    // console.log(this, e.target);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    console.log(x, y);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    console.log(xWalk, yWalk);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7)
    `;
}


// Even though we listen to the mouse event on the hero element, 
// it's going to give us the x and y of actual element that we are hovering.
hero.addEventListener('mousemove', shadow);