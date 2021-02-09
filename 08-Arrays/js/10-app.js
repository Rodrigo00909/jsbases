const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


carrito.forEach( function(producto) { 
    console.log( `${ producto.nombre } - Precio: ${ producto.precio }` );
} );

console.log('*************************************');

// Foreach y map son iguales en sintaxis

carrito.map( function(producto) { 
    console.log( `${ producto.nombre } - Precio: ${ producto.precio }` );
} );

// Entonces cual es la diferencia? map crea un arreglo nuevo. Llenara una variable con un arreglo nuevo

console.log('***********DIFERENCIA*************');

const nuevoArreglo = carrito.map( function(producto) { 
    return `${ producto.nombre } - Precio: ${ producto.precio }`;
} );

const nuevoArreglo2 = carrito.forEach( function(producto) { 
    return `${ producto.nombre } - Precio: ${ producto.precio }`;
} );

// El metodo for each dara undefined xq no funciona su resultado si lo almaceno en una variable

console.log(nuevoArreglo);
console.log('*************************************');
console.log(nuevoArreglo2);