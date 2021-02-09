// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); // Donde se cargaran los cursos
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Registrar eventos
cargarEventListener();
function cargarEventListener() {
    
    listaCursos.addEventListener('click', agregarCurso);
}

// Funciones
function agregarCurso(e) {
    
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement

        leerDatosCurso(cursoSeleccionado);
    }
}


function leerDatosCurso(curso) {
    // OBjeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src, // Solo me interesa el src de la imagen es decir el link de la imagen
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), // Cada curso tiene su id, con esto lo atrapamos
        cantidad: 1, // si le damos muchas veces deberia acumularse
    }
    // Agregar elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
    // Extraigo los datos de la variable carrito porque si agrego un segundo articulo al carrito me pisara el anterior, 
    // y yo necesito que el primer articulo siga ahi hasta que yo mismo lo borre. Entonces hago una copia del 
    // lo que haya en al carrito ya sea este vacio o no. Y le agregamos el objeto de infoCurso
    // Ahora si hago un console log de articulosCarrito se verá la importancia de la copia al seleccionar dos o mas elementos
    console.log(articulosCarrito);
}

// Muestra el carrito de compras en html
function carritoHTML() { // Esta funcion se encarga de generar el html basado en el carrito de compras
    // Para iterar en el carrito
    articulosCarrito.forEach( curso => { // 3.50

    });
}