// Un poco mas sobre REST o SPREAD OPERATOR
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [ // ARRAY
    { nombre: 'Monitor 27 Pulgadas', precio: 500 }, // OBJETO
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Agregar un elemento al final del arreglo meses:

// Spread con arreglo de indices
const meses2 = [...meses, 'Agosto'];

console.log(meses2);

// Esta forma NO modifica el arreglo original, aisgna todo el arreglo a meses2. En programacion funcional se trata de evitar el arreglo o los datos originales,
// esta es una buena forma de hacerlo.

// Spread con objetos
const producto = { nombre: 'Disco duro', precio: 350 }
// Para agregar el producto este nuevo al carrito:
const carrito2 = [...carrito, producto];

console.log(carrito2);
