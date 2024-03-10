const nav = document.querySelector('.nav');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
    nav.style.display = 'flex';
    nav.style.top = '0';
}

function close() {
    nav.style.top = '100%';
    nav.style.display = 'none';
}


// yasser

