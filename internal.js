//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('.hamburger img:not(#menu-icon)');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');


    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

//Header Image
window.addEventListener('scroll', function () {
    const image = document.querySelector('.main-photo');
    const scrollY = window.scrollY;
    const maxScale = 2;
    const scaleFactor = 1 + scrollY / 2000;


    const originalWidth = image.offsetWidth;
    const maxWidth = 1500;


    const newWidth = originalWidth * scaleFactor;


    if (scaleFactor <= maxScale && newWidth <= maxWidth) {
        image.style.transform = `scale(${scaleFactor})`;
    }
});
