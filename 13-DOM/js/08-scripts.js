// Recorrer el DOM: Traversing: Moverse por diferentes elementos. Recorrer el documento.
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // En el nodeList que aparecerá en la consola. los TEXT son espacios en blanco, a son los enlaces (<a></a>)
console.log(navegacion.children); // Con diferencia, children ignora los espacios en blanco


const card = document.querySelector('.card');
console.log(card.children[1].children); // Con children[1] accedo al hijo info (clase)
// Es decir, escribo un codigo para ingresar a card, y empiezo a navegar por sus hijos. Esto se conoce como traversing. Con .children y las posiciones [0] hago eso.

// Como accederia al titulo musica tradicional?

const card2 = document.querySelector('.card');
card2.children[1].children[1].textContent = 'Nuevo heading desde traversing de Dom'
console.log(card2);

// Como accederia al titulo rock en los angeles?
const segundoCard = document.querySelector('.contenedor-cards .card:nth-child(2)');
segundoCard.children[1].children[1].textContent = 'Nuevo titulaso'
console.log(segundoCard);

// Cambiar una imagen con traversing

const terceroCard = document.querySelector('.contenedor-cards .card:nth-child(3)');
terceroCard.children[0].src = 'img/arriba.jpg';
console.log(terceroCard);

// Seleccionar PADRES de hijos: Traversing de hijo al padre
const card3 = document.querySelector('.card');
console.log(card3.parentNode);

// O si no, y MEJOR
console.log(card3.parentElement.parentElement.parentElement); // Del card irá al contenedor, del contenedor a la seccion y de la seccion al main

// Seleccionar el siguiente elemento (el hermano) Es decir: contenedor-cards tiene 4 hijos (4 card), todos son hermanos.
// Supongamos que seleccionamos el primer card pero queremos recorrer hacia el segundo:
console.log(card3);
console.log(card3.nextElementSibling);
console.log(card3.nextElementSibling.nextElementSibling);
// Tambien hay una forma de volver al elemento de antes

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);

// Si quiero seleccionar el primer elemento de la NAVEGACION DE ARRIBA:
console.log(navegacion.firstElementChild);
// Ultimo
console.log(navegacion.lastElementChild);
