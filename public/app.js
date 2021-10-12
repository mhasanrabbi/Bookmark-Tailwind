// Navbar

const mobileNav = document.querySelector('#mobile-nav');
const burger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navbar = document.querySelector('#navbar');

burger.addEventListener('click', (e) => {
  navbar.classList.toggle('hide');
  mobileNav.classList.toggle('show');
  close.classList.remove('click');
});

close.addEventListener('click', (e) => {
  navbar.classList.toggle('hide');
  mobileNav.classList.toggle('show');
  close.classList.add('click');
});
