const carrito = [];

// Agregar al carrito con Spread Operator
// Forma declarativa: Paradigma que expresa la logica sin describir el flujo de control. No modifica directamente el objeto inicial, Antes usamos
// push y unshif, en este ejemplo usaremos la forma declarativa que no modifica la variable si no que crea una nueva.
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

// Agrgar producto al inicio del arreglo
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;
// hacemos una copia de carrito, agrego el primer producto: producto
resultado = [...carrito, producto, producto2]; 
resultado = [...resultado, producto3];

// Agregar primero un producto 
const producto4 = {
    nombre: 'Mouse',
    precio: 60
}

resultado = [producto4, ...resultado]; 



console.table(resultado);