// Este evento funciona en un formulario. Hay que seleccionar su clase o id

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => { // Este es el evento mas comun de formularios
    // El evento que le paso es el que se presenta cuando presiono submit es decir el boton de buscar o lo que sea.
    e.preventDefault(); // El prevent default le saca la funcion default al evento, que en este caso es seguir un link a una pagina que no funciona
    // Si miro el html, la etiqueta form tiene como default un action y un method, con el method (post) envia los datos del formulario hacia la url de la action
    // Eso es lo que se espera que haga un formulario. Una accion por default de un enlace por ejemplo es que al darle click me lleve a ese enlace.
    // Esto se hace para que haga lo que nosotros queremos, como x ejemplo consumir una api, y no la accion por default.
    console.log(e.target.action);
});

// Tambien se peude crear con una funcion a parte.

