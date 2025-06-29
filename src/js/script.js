// Menu-Mobile
let toggleMenu = document.querySelector('#toggle-menu');
let nav = document.querySelector(".navbar-menu ul");

// console.log(toggleMenu)
toggleMenu.addEventListener('click', function (e) {
    nav.classList.toggle('showMenu')
})


