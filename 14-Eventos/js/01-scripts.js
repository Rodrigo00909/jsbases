// Cuando entro a un sitio web hay muchos eventos que se estan ejecutando: Cuando le doy mg a un tweet, cuando doy un rt: Son eventos
// Un mg en face o compartir publicacion tambien es un evento. Cuando doy scroll en los productos de amazon tambien son eventos.
// Cuando en AIRNB veo la galeria de imagenes tambien es un evento.

console.log(1);

// La sintaxis es addEventListener
document.addEventListener('DOMContentLoaded', () => { // Hay muchos eventos, pero el mas comun es este. Y siempre irá en funcion anonima
// Este evento se ejecuta una vez que todo el HTML es cargado en la pagina.
    console.log(2);
}); 

console.log(3);