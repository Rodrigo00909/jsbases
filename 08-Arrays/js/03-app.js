// Recorrer un array
const meses = ['Entero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

// Un carrito de un ecommerce lista todo esto en tablas
// Para no acceder usando el index, hay otra forma para acceder a los elementos mas comoda.

// Conocer cuanto mide el arreglo:
console.log('Meses mide:',meses.length); // Cuenta desde el 1, en este caso hay 6

// Recorrer el array con for:
for( let i = 0; i < meses.length; i++) { 
// Primero el valor donde inicia: let i = 0 / Cuantas veces quiero que se ejecute el codigo: cantidad de veces que hay en el arreglo (6) / Recorrer uno x uno: i++
    //console.log(i); // Este es el valor de i, irá subiendo por el i++ cada vez que encuentre una nueva posicion en el array
    // Pero este no es el console correcto, seria esto:
    console.log(meses[i]); // Meses en la posicion de i, enotopnces mostrará las palabras del array por cada posicion
    // Y si agrego otro carrito entonces listará uno mas
}