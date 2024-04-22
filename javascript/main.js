let humburgerBtn = document.querySelector('.humburger__btn');
let headerSidebarBtn = document.querySelector('.header__sidebar--btn');
let shadow = document.querySelector('.shadow');
let headerSidebar = document.querySelector('.header__sidebar');



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