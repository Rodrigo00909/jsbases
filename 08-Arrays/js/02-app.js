// Acceder a los elementos de un array
const numeros = [10, 20, 30, 40, 50];
// Arreglo de arreglos:
const numeros2 = [10, 20, 30, 40, 50, [1,2,3]];

console.log(numeros);
console.table(numeros); // Esto es mejor para ver un arregloc omplejo yua q indica el index de cada uno

// La forma de acceder a un array es usando el index.
console.log(numeros[2]);

console.table(numeros2);
// Para acceder a esta parte tenemos que usar su posicion numero 5 que es un supos, y si quisiera acceder al numero 2 deberia acceder a la prox posicion dentro:
console.log(numeros2[5]);
console.log(numeros2[5][1]);