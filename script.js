const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');
const darken = document.querySelector('.darken');
const body = document.querySelector('body');

const showMenu = () => {
  nav.classList.toggle('open'),
    btnMenu.classList.toggle('active'),
    darken.classList.toggle('active');
  body.classList.toggle('no-scroll');
};

btnMenu.addEventListener('click', showMenu);
