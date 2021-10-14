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
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
    tab.classList.add('active-tab');
    target.classList.add('active');
  });
});

// FAQ Accordion

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
