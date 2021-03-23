const $ = (elm) => document.querySelector(elm);
const $$ = (elm) => document.querySelectorAll(elm);

const $navbar = $('.navbar');
const $navbarBtn = $('.navbar-btn');
const $navMenus = $$('.nav-menu');

$navMenus.forEach((menu) => menu.addEventListener('click', (e) => {
  $navbar.classList.toggle('navbar-active')
  $navbarBtn.classList.toggle('navbar-active')
}))