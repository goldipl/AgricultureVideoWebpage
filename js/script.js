const hamburgerMenu= document.querySelector('.hamburger');
const section = document.querySelector('section');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  section.classList.toggle('active');
})