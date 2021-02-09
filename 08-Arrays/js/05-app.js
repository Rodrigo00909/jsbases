const carrito = [];
// FORMA IMPERATIVA: Trabaja sobre la misma variable y la modifica
// Agregar elementos al carrito, al final del arreglo:

// Definir un producto
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

// Agrgar producto al inicio del arreglo
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);