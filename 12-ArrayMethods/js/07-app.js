// Unir dos arreglos: concat
// .concat
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

const resultado = meses.concat(meses2);

console.log(resultado);

// Concatenar varios:

const resultado2 = meses.concat(meses2, meses3);

console.log(resultado2);

// spread operator:
const resultado3 = [...meses, ...meses2] // Lo ponemos como array, usamos el spread (...) y tomamos una copia de meses  y de meses2. esto unira los array dentro de
// la variable resultado3

console.log(resultado3);

// Esta ultima forma es mas facil y mas copada

// Con concat tambien puedo agregar otro string y lo agregara al array
const resultado4 = meses.concat(meses2, meses3, 'Otro mes');

console.log(resultado4);

// En el spread deberia ponerlo sin los puntos al nuevo string, si lo pongo con puntos entonces deletrea cada letra q tiene el nuevo string
const resultado5 = [...meses, ...meses2, 'Otro mes']

console.log(resultado5);

// El orden tambien varia, si pusiera meses3 primero en el spread operator entonces agregaria primero los meses de este array

const resultado6 = [...meses3, ...meses, ...meses2]
console.log(resultado6)