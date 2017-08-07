const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter() {
    this.classList.add('trigger-enter');
    // Normal function can't work because this would return window object instead of li element.
    // setTimeout(function () {
    //     this.classList.add('trigger-enter-active');
    // }, 150);

    // setTimeout(() => {
    //     if (this.classList.contains('trigger-enter')) {
    //         this.classList.add('trigger-enter-active');
    //     }
    // }, 150);

    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };
    console.log(navCoords);
    console.log(dropdownCoords);
    console.log(navCoords);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    // background.style.width = `${coords.width}px`;
    // background.style.height = `${coords.height}px`;
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    console.log(background.getBoundingClientRect());

}

function handleLeave() {
    console.log('leave!');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    console.log(this);
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
