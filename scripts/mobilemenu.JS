const mobBtn = document.querySelector('.mobile-menu-btn');
const mbMenu = document.querySelector('.mobile-menu');
const container = document.querySelector('.container');

function toggleMenu() {
   mobBtn.classList.toggle('clicked');
   mbMenu.classList.toggle('clicked');
   container.classList.toggle('clicked');
}

mobBtn.addEventListener('click', toggleMenu);
