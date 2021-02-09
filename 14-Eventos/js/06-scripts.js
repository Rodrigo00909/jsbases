// Event Bubbling: esto es cuando se da click en un evento pero este evento se propaga por muchos otros lugares dando resultados no esperados
// Ejemplo: 

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

tituloDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});

// Esto es lo que sucede. Se propaga el evento por los padres o hijos del lugar donde clickee. Se soluciona con: e.stopPropagation();