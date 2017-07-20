// keydown event occurs when the key is pressed
// keyup event occurs when the key is released
// keypress event occurs when a character is typed

const pressed = [];
const secretCode = 'leoliou';
window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('Ding Ding');
        cornify_add();
    }
    console.log(pressed.join(''));
    console.log(pressed);
});
