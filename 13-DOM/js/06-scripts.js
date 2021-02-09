const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Acceder al texto:
console.log(encabezado.innerText); // Trae el texto. Si la clase CSS tiene un HIDDEN, esta funcion no la mostrara
console.log(encabezado.textContent); // Trae el texto
console.log(encabezado.innerHTML); // Trae el html
// Usar textContent y innerHTML

// Encadenamiento:
const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);

// Que es lo que realmente tendriamos? (sin la consola)
document.querySelector('.contenido-hero h1').textContent =  'nuevo heading'; // contenido-hero en el h1.textContent va a ser igual a ''
// Es decir, edito el texto

// Otra forma seria con una variable

const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent =  nuevoHeading;

// FIREFOX DEVELOPER EDITION DA MUCHA INFO SOBRE DE QUE FORMA PODEMOS ACCEDER A LOS ELEMENTOS
// ES DECIR: SI EN FIREFOX SELECCIONO EL H1 ME DIRA QUE PUEDO ACCEDER A SU: CLASS, ID, TEXTCONTENT, ETC

// Editar imagenes:
const image = document.querySelector('.card img');
image.src = 'img/hacer2.jpg';
console.log(image);

const nuevoTitulo = 'Cambie el titulo';
document.querySelector('.info .titulo').textContent = nuevoTitulo;


