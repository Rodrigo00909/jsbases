// Seleccionar elementos por su clase
// Nos permite seleccionar elementos que tengan UN NOMBRE de una clase
const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');

console.log(hero);

// Si las clases existen mas de una vez:
const contenedores = document.getElementsByClassName('contenedor');

console.log(contenedores);

// Si una clase no existe:
const noExiste = document.getElementsByClassName('noExiste');

console.log(noExiste);