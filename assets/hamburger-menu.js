const hamburger = document.querySelector('#js-hamburger'); 
const nav = document.querySelector('#js-nav');
const logo = document.querySelector('#js-logo');
const icon = document.querySelector('#js-icon');

hamburger.addEventListener('click', function () {
  icon.classList.toggle('active');
  logo.classList.toggle('active');
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});