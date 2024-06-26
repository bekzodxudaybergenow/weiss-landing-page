let humburgerBtn = document.querySelector('.humburger__btn');
let headerSidebarBtn = document.querySelector('.header__sidebar--btn');
let shadow = document.querySelector('.shadow');
let headerSidebar = document.querySelector('.header__sidebar');

let heroPictureImg = document.querySelector('.hero-picture__image');
let heroPopup = document.querySelector('.hero-popup');
let heroPopupClosebtn = document.querySelector('.hero-popup__close-btn');
let heroPopupShadow = document.querySelector('.hero-popup__shadow');
let heroPictureZoomImg = document.querySelector('.hero-picture__zoom-img');


let headerList = document.querySelector('.header');
let headerScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;

    console.log(currentScroll);

    if (headerScroll < currentScroll) {
       headerList.classList.add('sroll');
    }
    else if (currentScroll == 0) {
        headerList.classList.remove('scroll-shadow')
    }
    else {
        headerList.classList.add('scroll-shadow')
        headerList.classList.remove('sroll');
    }

    headerScroll = currentScroll;
})




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