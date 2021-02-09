const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

for( let i = 0; i < carrito.length; i++) { 
        console.log( `${ carrito[i].nombre } - Precio: ${ carrito[i].precio }` ); 
}

// Javascript posee formas más faciles de iterar sobre un arreglo:
// Formas más faciles de iterar en un array que este for loop
// Tambien se los conoce como Array Methods. En este JS solo veremos uno: ForEach

/* 
Recordar:
si tiene .Hola() significa que es un metodo
si tengo Hola() es una funcion
*/
console.log('*************************************');

carrito.forEach( function(producto) { 
// Podemos agregar una variable mas descriptiba con lo que hacemos, carrito es el plural del array, producto seria cada uno de los objetos:
    console.log( `${ producto.nombre } - Precio: ${ producto.precio }` );
// No es necesario usar esl carrito[i] ya que no necesito el indice del carrito xq actualmente estoy iterando sobre el producto.
// Al estar en producto tengo acceso al producto entonces uso la sintaxis para acceder al nombre
} )