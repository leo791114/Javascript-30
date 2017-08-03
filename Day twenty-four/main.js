const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    console.log(topOfNav, window.scrollY);
    console.log(nav);
    if (topOfNav <= window.scrollY) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }

}

window.addEventListener('scroll', fixNav);