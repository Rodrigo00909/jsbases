// Eventos con el MOUSE

// Selector
const nav = document.querySelector('.navegacion');
// Registrar un evento
nav.addEventListener('click', () => { // Se activa con un click
    console.log('Click en NAV');
});

nav.addEventListener('mouseenter', () => { // Se activa cuando pasas por arriba de la zona
    console.log('Te pusiste arriba de la nav');

    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => { // Se activa cuando salis de la zona
    console.log('Salista de la nav');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', () => { // Es similar a un click
    console.log('Pintando de azul');

    nav.style.backgroundColor = 'blue';
});

nav.addEventListener('mouseup', () => { // Se ejecuta cuando doy click y suelto el mouse
    console.log('Pintando de verde');

    nav.style.backgroundColor = 'green';
});

nav.addEventListener('dblclick', () => { // Se ejecuta cuando doy dobel click
    console.log('Pintando de rojo');

    nav.style.backgroundColor = 'red';
});
