const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter() {
    console.log('enter!');
    this.classList.add('trigger-enter');
    // Normal function can't work because this would return window object instead of li element.
    // setTimeout(function () {
    //     this.classList.add('trigger-enter-active');
    // }, 150);
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top,
        left: dropdownCoords.left
    };
    console.log(dropdown);
    console.log(dropdownCoords);
    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    background.style.transform = `translate(${coords.left}, ${coords.top}px)`;
    console.log(background);

}

function handleLeave() {
    console.log('leave!');
    this.classList.remove('trigger-enter', 'tirgger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
