const menuButton = document.querySelector('.burger__menu');
const menu = document.querySelector('.navigation__menu');

menuButton.addEventListener('click', ()=> {
    menu.classList.toggle('menu--open');
} )