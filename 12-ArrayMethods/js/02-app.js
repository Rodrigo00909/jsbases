const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Si quiero saber en que indice se encuentra el mes ABRIL

meses.forEach( (mes, index) => {
    if(mes === 'aa') {
        console.log(`Encontrado en el indice ${index}`)
    } else {
        console.log(`No encontramos el mes indicado`)
    }
});

// Con el array method findIndex podemos encontrar el index de forma no manual:

const encontrarIndice = meses.findIndex( (mes) => {
    return mes === 'Marzo';
});
// Resumido:
const encontrarIndice2 = meses.findIndex( mes =>  mes === 'Diciembre' ); // Find index a diferencia del if y foreach normal retorna -1 cuando no encuentra nada
console.log(encontrarIndice);
console.log(encontrarIndice2);
// Obviamente esto se puede salucionar con un if para que retorne un mensaje que yo quiera

const findIndiceCarrito = carrito.findIndex( (producto) => {
    return producto.nombre === 'Tablet';
});
// Resumido:
const findIndiceCarrito2 = carrito.findIndex( producto => producto.nombre === 'Tablet');
console.log(findIndiceCarrito);

// EL PROBLEMA de find index es que si hay otro producto que tiene el mismo nombre, aun asi solo traera uno solo, el cual es el primero que agarra.