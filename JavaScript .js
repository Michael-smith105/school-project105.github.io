const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('closed');
});