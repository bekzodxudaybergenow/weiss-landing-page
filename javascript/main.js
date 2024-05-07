let humburgerBtn = document.querySelector('.humburger__btn');
let headerSidebarBtn = document.querySelector('.header__sidebar--btn');
let shadow = document.querySelector('.shadow');
let headerSidebar = document.querySelector('.header__sidebar');

let heroPictureImg = document.querySelector('.hero-picture__image');
let heroPopup = document.querySelector('.hero-popup');
let heroPopupClosebtn = document.querySelector('.hero-popup__close-btn');
let heroPopupShadow = document.querySelector('.hero-popup__shadow');
let heroPictureZoomImg = document.querySelector('.hero-picture__zoom-img');



humburgerBtn.addEventListener('click', () => {
    headerSidebar.style.left = '0';
    shadow.classList.remove('hidden');
})
headerSidebarBtn.addEventListener('click', () => {
    headerSidebar.style.left = '-240px';
    shadow.classList.add('hidden');
})
shadow.addEventListener('click', () => {
    headerSidebar.style.left = '-240px';
    shadow.classList.add('hidden');
})

// Popup image in hero section
heroPictureImg.addEventListener('click', () => {
    heroPopup.classList.remove('hidden');
})
heroPictureZoomImg.addEventListener('click', () => {
    heroPopup.classList.remove('hidden');
})
heroPopupClosebtn.addEventListener('click', () => {
    heroPopup.classList.add('hidden');
})
heroPopupShadow.addEventListener('click', () => {
    heroPopup.classList.add('hidden');
})