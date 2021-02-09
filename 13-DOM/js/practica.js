// Crear un CARD
// Crear los parrafos
const parrafo1 = document.createElement('p');
const parrafo2 = document.createElement('p');
const parrafo3 = document.createElement('p');
// Agregarle texto a los parrafos
parrafo1.textContent = 'Un Concierto Nuevo';
parrafo2.textContent = 'Música de Anime';
parrafo3.textContent = '$560 por persona';
// Agregarle clases a los parrafos
parrafo1.classList.add('categoria', 'concierto');
parrafo2.classList.add('titulo');
parrafo3.classList.add('precio');
// Crear imagen
// Crear img
const image = document.createElement('img');
// Darle una foto a la img
image.src = 'img/hacer3.jpg';
// Crear DIV con la clase info
// Crear el div que contendrá el info
const info = document.createElement('div');
// Añadir clase al info
info.classList.add('info');
// Agregar los parrafos a info
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info)
// Crear el card padre
const cardPadre = document.createElement('div');
cardPadre.classList.add('card');
// Asignar la imagen
cardPadre.appendChild(image);
// Asignar info
cardPadre.appendChild(info);
console.log(cardPadre);
// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(cardPadre, contenedor.children[1]);

// Para insertarlo en un lugar predeterminado habia que hacer .inserBefore y luego 
//el primer elemento seria el objeto a agregar y luego la variable a la cual hay que
// asignarselo, luego seria .children[0] indicando la posicion donde lo quiero.

// Agregar funcionalidad al boton
// La idea seria que a un boton le des click y suceda algo. Es decir ESPERA a que alguien le de click para reaccionar.
// A esto se lo conoce como un evento con el nombre de addEventListener
// Lo que hace que el movimiento del boton vaya de arriba hacia abajo si se activa es una clase de estilos de CSS, 
//entonces hay que agregarla o quitarla
// dependiendo de si dio click o no al footer la clase de activo 
// Como compruebo si la clase esta o no? lo deberia comprobar con un if

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';          
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'Cerrar'; 
    }
});
