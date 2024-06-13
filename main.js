let historia = document.querySelector('.menu__link.historia');
let submenu = document.querySelector('.submenu');

historia.onclick = function() {
    submenu.classList.toggle('ativo');
}