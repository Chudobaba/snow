var menuList = document.querySelector('.menu-list');
var header = document.querySelector('header');

var toggleMenu = document.querySelector('.toggle');

toggleMenu.addEventListener('click',function () {
    menuList.classList.toggle('active');
    header.classList.toggle('active');
});