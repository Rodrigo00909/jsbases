const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

// Destructuring:
const { nombre } = producto;

console.log(nombre);
// En arreglos tb existe el Destructuring es decir a veces necesitamos crear la variable y extraer su valor todo en un mismo paso

// Destructuring con arreglos
const numeros = [10,20,30,40,50];

//Sintaxis 
const [primeraPos] = numeros;

console.log(primeraPos);

// A diferencia del objeto, en un array puedo ponerle cualquier nombre
// Objeto:
const {cualquierCosa} = producto;
console.log(cualquierCosa); // Dara undefined

// En los array YO decido el nombre xq su valor esta definido por la posicion y no puedo crear variables que tengan corchetes.

// Que pasaria si quiero acceder al numero 30?
const [Pos1, Pos2, Pos3] = numeros;
console.log(Pos3); // Osea si quiero el valor num 3 tendre que crear 2 variables mas al pedo
// A diferencia de los array, en los objetos extraigo solo el valor que requiero, si quiero nombre pongo nombre como variable y ya tengo su valor, precio igual.

// Pero hay alguna forma de no crear varialbes al pedo? Asi:
const [ , , TerceraPos] = numeros; // Es decir, deja un espacio junto a una coma. El espacio significa que no quiero esa posicion
console.log(TerceraPos);

// Ahora que pasaria si quisiera el primer y segundo valor, pero que el resto de los valores siguan en su propio array:
const [primero, segundo, ...tercero] = numeros; // Uso Spread Operator, de esta manera tendr una variable primero con el 10, segundo con el 20 y tercero con 30, 40 y 50
console.log('Primera pos',primero);
console.log('Segunda pos',segundo);
console.log('Tercera pos con 3 num',tercero);
// LA SINTXIS ANTERIOR SE UTILIZA MUCHO.


