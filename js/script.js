const nav = document.getElementById('menu');
const icon = document.getElementById('close');

function openMenu() {
  nav.classList.add('active');
  icon.classList.add('active');
}
function closeMenu() {
  nav.classList.remove('active');
  icon.classList.remove('active');
}