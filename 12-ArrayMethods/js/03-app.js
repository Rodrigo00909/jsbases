// .reduce aplica lo que se conoce como funcion reducer. Esto significa que es una funcion reductura. Osea tomar una gran cantidad de dator, unirlos y entregar un resultado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Supongamos que nuestro carrito es el objeto y debemos decirle al usuario cuanto debe pagaR ES DECIr sumar todos los precios
let total = 0; // Sumare todos los valores sobre esta variable
carrito.forEach( (producto) => {
    return total += producto.precio;
});

// Resumido:
carrito.forEach( producto => total += producto.precio);

console.log(`Total a pagar: ${total}`);

// Y la otra forma de hacer esto es con el .reduce
// Sigue siendo un arrow function pero tiene algo diferente

// Se le pasan dos valores como argumento: uno es el valor anterior(el valor previo osea el total) y el otro es el valor actual. Sumara estos dos valores.
// Entonces la diferencia con todo lo anterior es que se le pasan como argumento la variable donde estará el resultado final y luego el objeto actual

// Ya esta resumido
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);
// Si quisiera que empiece desde otro numero, por ejemplo si hago un sistema para un politico seguramente me pida que haya votos fantasma entonces
// podria poner que inicie con 1000 votos mas lo que lo votaron:
let resultado2 = carrito.reduce( (total, producto) => total + producto.precio, 1000);
console.log(resultado2); // Dará 3200: 2200 + 1000 votos fantasma
