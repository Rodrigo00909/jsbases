// Find index solamente nos dice el indice del elemento. Find creará un nuevo arreglo basado en la condicion que revise
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// con foreach
let resultado = '';
carrito.forEach( (producto, indice) => { // Quiero iterar sobre producto y su indice
    if(producto.nombre === 'Tablet') { // si el nombre de un producto es igual a tablet
        resultado = carrito[indice]; // quiero extraer todo el objeto (en el indice de tablet) y asignarselo a resultado
    } // TODO ESTO hace .find, pero usando el metodo es mas sencillo
});

console.log(resultado);

// con find

let resultado2 = carrito.find( (producto) => {
    return producto.nombre === 'Tablet';
})

console.log(resultado2);

// .find solo traera UN solo resultado en caso de que pongamos por ejemplo buscar por el precio y le pongamos 100. Solo traera el primer producto de 100 q encuentre
// Le asigna a resultado el primero que cumpla con la condicion

// RESUMIDOS:

let resultado2 = carrito.find( producto => producto.nombre === 'Tablet')