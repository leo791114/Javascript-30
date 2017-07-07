// document.addEventListener could work as well
window.addEventListener('keydown', playSound);

function playSound(e) {
    // console.log(e);
    console.log(e.keyCode);
    // const defines a variable taht can't be changed through re-assignment, and it can't be redeclared
    var keyCode = e.keyCode;
    // const audio = document.querySelector('audio[data-key="' + keyCode + '"]');
    // ES6 template string method (`string`), `${variable}`
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    // console.log(audio);
    // console.log(key);
    // shorthand for if-return statement
    if (!audio) return; // stop the function 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    console.log(key.classList);
}

function removeTransition(e) {
    // if (e.propertyName !== 'transform') return; //stop it if it's not a transform

    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');

keys.forEach(function (key) {
    key.addEventListener('transitionend', removeTransition);
});