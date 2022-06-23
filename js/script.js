const button = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

button.addEventListener('click', navToggle);

function navToggle() {
    button.classList.toggle('open');

    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}