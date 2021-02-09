// Los arrays methods hacen todo el trabajo pesado por uno.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
// Normalmente utilizare un for each, no un for normal. O eso seria lo mas comun para acceder a cada uno de los elementos.

meses.forEach( (mes) => {
    if(mes === 'Enero') {
        console.log('enero existe');
    }
});

// Esta seria la forma MANUAl de comprobar si un mes existe, osea si un elemento existe en un array. Pero con array methods seria asi:

// Primero se crea una variable xq este array methods nos retorna un valor y se guarda en esa variable.
// .includes() es un array method, que va a comprobar si un valor existe en un arreglo.
const resultado = meses.includes('Enero'); // resultado guardara un booleano dependiendo si existe o no el elemento que estoy pidiendo
console.log(resultado);

// Includes funciona solo con arreglos que solamente tienen un valor vasado en el indice como el que tenemos. Pero si necesitaria
// un array de objetos deberia usar .some
// .some es igual a un arrow function
const existe = carrito.some( (producto) => { // dentro de () le paso el valor, en este caso producto. Iterará por todos los elementos del objeto.
    return producto.nombre === 'Celular'; // Un return para que le asigne el valor a la variable existe, y luego lo que sea que queramos verificar.
});
console.log(existe);

// En un arreglo tradicional (de indices) con .some
const existe2 = meses.some( (mes) => {
    return mes === 'Febrero';
});
console.log(existe2);

// ENTONCES CON INCLUDE SOLO ARRAY NORMALES, CON SOME SE PUEDE TANTO OBJETOS COMO ARREGLOS

// FORMAS DE RESUMIR LOS CODIGOS ANTERIORES:
meses.forEach( mes => {
    if(mes === 'Enero') {
        console.log('enero existe');
    }
});

const existe = carrito.some( producto => producto.nombre === 'Celular'); // eL RETURN no es necesario, tampoco el argumento producto dentro de ()

const existe2 = meses.some( mes =>  mes === 'Febrero');