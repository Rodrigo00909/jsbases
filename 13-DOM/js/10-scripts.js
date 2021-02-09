// Creación de HTML desde JS: Al publicar un tweet por ejemplo, debo agregar algo al html.

// Construyendo el enlace: Agregando texto
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Enlace';
// Añadiendo un HREF
enlace.href = '/nuevo-enlace';
// Añadiendo un target
enlace.target = '_blank';
// Añadiendo una clase
enlace.className = 'Nueva Clasee';
// Agregar atributo personalizado
enlace.setAttribute('data-enlace', 'nuevo-enlacee');
// Mostrar el enlace en la navegacion: Seleccionando la navegacion
const navegacion = document.querySelector('.navegacion');
// Mostrar el enlace en el DOM
navegacion.appendChild(enlace); // Comentar el inserbefore para verlo
// Colocar en otro lugar al enlace:
navegacion.insertBefore(enlace, navegacion.children[1]) // Este requiere 2 argumentos: 1 el elemento que queremos agregar, 2 donde deseo mostrarlo (el indice). 
// Por eso lo mejor seria escribir console.log(navegacion.children) para saber los elementos que son hijos de navegacion en sus lugares


// Hacer que el enlace haga algo con un click:

const miFuncion = () => {
    console.log('Hiciste click');
}
enlace.onclick = miFuncion;

console.log(enlace);

// Crear un CARD
// Esto seria lo que hariamos si consumieramos una api: consumir una api y mostrarlo en el html

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto Local';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock Sencillo';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '1500 por persona';
parrafo3.classList.add('precio');

/* const nuevaCard = document.querySelector('.info'); */

// Crear DIV con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const image = document.createElement('img');
image.src = 'img/hacer2.jpg';
image.alt = 'texto alternativoo';

console.log(info);
console.log(image);

// Crear el card padre
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(image);

// Asignar info
card.appendChild(info);

console.log(card);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

// Para insertarlo en un lugar predeterminado habia que hacer .inserBefore y luego el primer elemento seria el objeto a agregar y luego la variable a la cual hay que
// asignarselo, luego seria .children[0] indicando la posicion donde lo quiero.