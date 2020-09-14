const toggling = document.getElementById('toggling');
const menu = document.getElementById('menu');

toggling.addEventListener('click', () => {
    toggling.classList.toggle('show');
    menu.classList.toggle('show');
});