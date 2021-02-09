const carrito = [];

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);

// Eliminar un producto, en este caso el último
carrito.pop();

// En los objetos era delete producto.nombre; osea el nombre del objeto, y luego la propiedad q quiero eliminar. En un arreglo con .pop es suficiente
console.table(carrito);

// Eliminar del inicio del arreglo
carrito.shift();

console.table(carrito);

// MÉTODO SPLICE

const carrito2 = [];

const product = {
    nombre: 'PC Gaming',
    precio: 4000
}
const product2 = {
    nombre: 'Tablet',
    precio: 800
}

const product4 = {
    nombre: 'Auriculares',
    precio: 500
}

carrito2.push(product);
carrito2.push(product2);
carrito2.push(product4);

const product3 = {
    nombre: 'Teclado Gaming',
    precio: 900
}

carrito2.push(product3);

console.table(carrito2);

// Que pasa si quiero eliminar cualquier elemento no solo unicamente el final o el inicio:
// Método Splice

// toma dos parametros: uno es donde inicia a cortar es decir si quiero eliminar Tablet seria la posicion 1. Y dos es cuantos elementos quiero eliminar 
carrito2.splice(1, 1); // Quiero eliminar 1 elemento de la posicion 1

console.table(carrito2);

// Si le pondria (1, 2), no solo eliminará el elemento de la pos numero 1 (tablet) si no tambien el de la 2 (Auriculares)
// Puede usarse tambien como un shif, poniendole en la posicion 0 (0, 1). Si quisiera eliminar el ultimo deberia ponerle la ult posicion pero para eso debo conocer
// el array

carrito2.splice(1,2);
console.table(carrito2);