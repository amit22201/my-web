let hour_span = document.getElementById('time-hour');
let min_span = document.getElementById('time-min');
let sec_span = document.getElementById('time-sec');
let day_span = document.getElementById('day-sec');
let mer_span = document.getElementById('time-mer');
let date = new Date();
day_span.innerText = date.toDateString();
let format_icon_selected = '12hrFormat';

function setTime(local) {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes()
    let sec = date.getSeconds();
    let meridiem = 'AM';

    // Convert hours to 12-hour format and determine AM or PM
    if (format_icon_selected === '12hrFormat') {
        if (hour > 12) {
            hour -= 12;
            meridiem = 'PM';
        } else if (hour === 0) {
            hour = 12;
        } else if (hour === 12) {
            meridiem = 'PM';
        }
    }
    mer_span.innerText = meridiem
    // Ensure that minutes and seconds always display two digits
    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinutes = String(min).padStart(2, '0');
    const formattedSeconds = String(sec).padStart(2, '0');
    hour_span.innerText = formattedHour;
    min_span.innerText = formattedMinutes;
    sec_span.innerText = formattedSeconds;
}

setInterval(() => {
    setTime()
}, 1000);



let formateSelectorIcon = document.getElementById('format-selector-icon');
let formateSelectorIconIcon = document.getElementById('select-icon');
let formatSelect = document.getElementById('format-select');
formateSelectorIconIcon.addEventListener('click', () => {
    formateSelectorIcon.classList.toggle('format-selector-icon-selected');
    formatSelect.classList.toggle('format-select-visible');
});

formatSelect.addEventListener('change', () => {
    formateSelectorIcon.classList.toggle('format-selector-icon-selected');
    formatSelect.classList.toggle('format-select-visible');
    format_icon_selected = formatSelect.value;
    if (format_icon_selected === '24hrFormat') {
        document.getElementsByClassName('time-section')[3].style.display = 'none'
    } else {
        document.getElementsByClassName('time-section')[3].style.display = 'block'
    }
});

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
        headerMenu.classList.add('disply-none')
        menuIcon.style.color = 'white';
    }
    if (!formateSelectorIcon.contains(event.target)) {
        formatSelect.classList.remove('format-select-visible');
        formateSelectorIcon.classList.remove('format-selector-icon-selected');
    }
});
