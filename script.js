// Navigation
const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.nav-links');
const outerClick = document.querySelector('.outer-click');
const outerColor = document.querySelector('.outer-color');

toggleMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    outerColor.classList.toggle('active');
    if(outerClick.classList.contains('active')) {
        setTimeout(dismiss_outerClick, 400);
    } else {
        outerClick.classList.toggle('active');
    }
});

outerClick.addEventListener('click', function() {
    if(toggleMenu.classList.contains('active')) {
        menu.classList.toggle('active');
        toggleMenu.classList.toggle('active');
        outerColor.classList.toggle('active');
        setTimeout(dismiss_outerClick, 400);
    }
});

function dismiss_outerClick() {
    outerClick.classList.toggle('active');
}


// Scroll to Top
const btnScroll = document.querySelector('.button-scroll');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnScroll.classList.add('active');
    } else {
        btnScroll.classList.remove('active');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Get Year
var date = new Date();
document.getElementById("copyright").innerHTML = "Copyright ©" + date.getFullYear() + " KikoCell. All Rights Reserved";