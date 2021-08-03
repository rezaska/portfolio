// When the user scrolls the page, execute myFunction
window.onscroll = function () { scrollFunction() };

// Get the navbar
const navbar = document.getElementById('navbar');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

const hamburgerMenu = document.querySelector('.hamburger');

hamburgerMenu.addEventListener('click', (e) => {
  console.log('hello');
  let menu = document.querySelector('.nav-text');
  if (menu.style.display === 'none') {
    menu.style.display = 'inline-block';
  } else {
    menu.style.display = 'none';
  }
});