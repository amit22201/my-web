let menuIcon = document.getElementById('menu-icon');
let headerMenu = document.getElementsByClassName('header-nav').item(0);
if (window.innerWidth <= 900) {
    headerMenu.classList.add('disply-none')
    menuIcon.style.color = 'white';
}
menuIcon.addEventListener('click', (event) => {
    if (headerMenu.classList.toggle('disply-none')) {
        menuIcon.style.color = 'white';
    } else {
        menuIcon.style.color = 'black';
    }
});

document.addEventListener('click', (event) => {
    const containsEvent = menuIcon.contains(event.target);
    if (!containsEvent && window.innerWidth <= 900) {
        headerMenu.classList.add('disply-none');
        menuIcon.style.color = 'white';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        headerMenu.classList.remove('disply-none');
    } else {
        headerMenu.classList.add('disply-none');
        menuIcon.style.color = 'white';
    }
});