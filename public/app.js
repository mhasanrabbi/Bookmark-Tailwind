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

// Tabs

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContents) => {
      tabContents.classList.remove('active');
    });
    target.classList.add('active');
  });
});

// FAQ Accordion
let item = document.querySelectorAll('[data-faq-item]');
let i;

for (i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function () {
    this.classList.toggle('open');
  });
}
