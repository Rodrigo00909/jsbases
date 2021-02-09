const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// La idea seria que a un boton le des click y suceda algo. Es decir ESPERA a que alguien le de click para reaccionar.
// A esto se lo conoce como un evento con el nombre de addEventListener

// El primer argumento que se le pasa es el evento que espera para reaccionar, en este caso un click. Y el segundo es una funcion flecha. 
/* btnFlotante.addEventListener('click', () => { 
    console.log('Diste click en el botón');
}); */
// esa es una forma de hacerlo, la comento para escribir otra:
btnFlotante.addEventListener('click', mostrarOcultarFooter); // En este caso le damos una funcion ya creada como segundo parametro
// Lo que hace que el movimiento del boton vaya de arriba hacia abajo si se activa es una clase de estilos de CSS, entonces hay que agregarla o quitarla
// dependiendo de si dio click o no al footer la clase de activo 
// Como compruebo si la clase esta o no? lo deberia comprobar con un if

function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')) { // Contains nos permite verirficar si un elemento tiene o no una clase
        footer.classList.remove('activo'); //Entonces si activo existe entonces esto lo quitara
        btnFlotante.classList.remove('activo'); // Lo mismo pero para el boton
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo'); // Agregar clase
        btnFlotante.classList.add('activo'); // Lo mismo pero para el boton
        this.textContent = 'X Cerrar';
    }
}

// EL THIS es una forma de acceder a las propiedades de un objeto en los metodos, pero tambien cuando se da click en una funcion el this hace referencia a lo que se
// se llamo a mandar esa funcion. Y lo que este this manda a llamar es btnFlotante, entonces en los btnFlotante. dentro de la funcion los podria intercambiar por un this
// y seria lo mismo, quedaria asi uno; this.classList.remove('activo'); y asi el otro this.classList.add('activo');