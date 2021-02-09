// QuerySelector puede seleccionar ID y clases. SOLO SELECCIONA EL PRIMER QUE ENCUENTRA. Si no existe no retorna nada
const card = document.querySelector('.card');
console.log(card);

// Tiene una sintaxis parecida a la de CSS, es decir tiene selecotres especificos. Tengo que acceder a otros para encontrar el que quiero:
const info = document.querySelector('.premium .info');
console.log(info);

// Si tengo varios cards, como valor de retorno me dara el primero, pero si quiero seleccionar por ejemplo el segundo: Es igual que en CSS
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)'); // La seccion con la clase hospedaje, y luego la seleccion del segundo card
console.log(segundoCard);

// Seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

