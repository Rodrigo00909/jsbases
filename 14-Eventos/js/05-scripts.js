/* window.addEventListener('scroll', () => {
   const scrollPX = window.scrollY; // de esta forma me mostrará el scroll de arriba hacia abajo en pixeles
   console.log(scrollPX);
}); */

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // Esta funcion BoUNDING da mucha info sobre donde se ubica el scroll y donde esta el lugar al que marcamos
    // Se usa para hacer un condicional del mismo:
    console.log(ubicacion); // Con este console, para hacer que sea mas real, me pondrá el mensaje de visibilidad justo cuando se vea, y con este console puedo ver
    // el top exacto en el que se encuentra
    if(ubicacion.top < 784) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no está visible');
    }
});