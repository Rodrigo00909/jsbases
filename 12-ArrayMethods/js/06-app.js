// .every todos los elementos de un arreglo deben cumplir con una condicion para q nos retorne un true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado = carrito.every( (producto) => {
    return producto.precio < 1000; // Si todos los precios son menores a 1000 nos retorna TRUE.
});

console.log(resultado);

const resultado2 = carrito.every( (producto) => {
    return producto.precio < 500; // Si todos los precios son menores a 500 nos retorna TRUE. Dara false
});

console.log(resultado2);

// Resumidos:

const resultado = carrito.every( (producto) => producto.precio < 1000);

console.log(resultado);

// Para revisar si UNO CUMPLE CON LA CONDICION ALMENOS existe el .some que esta en el 01-app
// Some : Almenos uno se debe cumplir --> Es como el AND &&
// Every : Todos se deben cumplir --> Es como el OR ||
