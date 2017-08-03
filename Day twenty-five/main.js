const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    console.log(this);
    //Stop bubbling
    // e.stopPropagation(); 
}


// document.body.addEventListener('click', logText, {
//     capture: true
// });
// capture --> run the function on the way down rather than on the way up
// Events bubble up --> If you click on the innermost one, it will also trigger an event on the parent and that parent as well
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true //it will listen for a click and then unbind itself.
}));