// .filter() crea un nuevo arreglo basado en el parametro en el cual es evaluado
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Con find index solamente trae un solo valor, si tuviera muchos precios con 100 solo traeria uno. Filter es más versatil. Permite hacer muchas operaciones en mis
// arreglos. Por ejemplo si quisiera traer todos los productos que cuesten mas de 400 en nuestro carrito

let resultado;

resultado = carrito.filter( (producto) => {
    return producto.precio > 400;
});

console.log(resultado);

// Me devolverá un nuevo array con la condicion que revise en este momento, es decir:
// todos los elementos que tienen precio mayor a 400. Este nuevo array es la variable resultado

// Ahora quiero todos los productos cuyo precio sea menor a 600
let resultado2 = carrito.filter( (producto) => {
    return producto.precio < 600
});

console.log(resultado2);

// Que pasaria si quisiera traerme todos los productos menos los Audifonos. Una buena forma de utilizar el filter es para quitar un elemento de carrito de compras
// Esto pasaria si alguien eliminaria X producto de su carrito

let resultado3 = carrito.filter( (producto) => {
    return producto.nombre !== 'Audifonos'; // Traeme todos menos El que se llama Audifonos
}); // Entonces lo que dice esto es: en FILTER asignale a esta variable todos los productos que no sean 'Audifonos'

console.log(resultado3);

// Si quisiera solo los audifonos:

let resultado4 = carrito.filter( (producto) => {
    return producto.nombre === 'Audifonos';
});

console.log(resultado4);

// RESUMIDOS:

resultado = carrito.filter( producto => producto.precio > 400);

let resultado2 = carrito.filter( producto => producto.precio < 600);

let resultado3 = carrito.filter( producto => producto.nombre !== 'Audifonos');

let resultado4 = carrito.filter( producto => producto.nombre === 'Audifonos');