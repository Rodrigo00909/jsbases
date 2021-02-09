// Eliminar elementos de un DOM. Como eliminar elementos de un carrito de compras o eliminar fotos de una publicacion de facebook, o quitar un like, etc.
// Estas son las dos formas de hacerlo: Eliminar un elemento x si mismo o eliminar desde el padre.

// Eliminar el elemento x si mismo
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[1]);