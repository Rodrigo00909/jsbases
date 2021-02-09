// Eventos con el TECLADO
// Cuando escribo en un formulario y lo voy llenando puedo tener eventos o funciones que se ejecuten
// Por ejemplo para publicar un tweet mientrs voy escribiendo se van contando las letras que me quedan
// Tambien en los validadores: si colo email dira este email es valido o no. Esto se hace con eventos de teclado

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () =>{ // Este evento sucede cuando presiono una letra
    console.log('Escribiendo');
});

busqueda.addEventListener('keyup', () =>{ // Este evento sucede cuando presiono una letra y la suelto
    console.log('Presionaste y sacaste');
});

// Uno muy util
busqueda.addEventListener('blur', () =>{ // Es bueno en la validacion de formularios. Debo entrar al input y luego salirme
    console.log('Entraste y saliste del buscador');
});

busqueda.addEventListener('copy', () =>{ // Sucede cuando escribo algo, y selecciono lo que escribi y lo copio (con ctrl c)
    console.log('copiaste');
});

busqueda.addEventListener('paste', () =>{ // Sucede cuando pego (con ctrl v) lo q escribi
    console.log('pegaste');
});

busqueda.addEventListener('cut', () =>{ // Sucede cuando corto lo q escribi
    console.log('cortaste');
});

// El mas comun de todos:
busqueda.addEventListener('input', () =>{ // Se ejecuta cuando escribo, suelto, corto, pego, etc cuando realizo cualquier evento anterior(menos el blur)
    console.log('input');
});

// Seria copado que lo que escriba el usuario yo lo pueda capturar para validarlo, para enviarlo a una base de datos o lo que sea, entonces seria asi:
busqueda.addEventListener('input', (e) =>{  // Hay que pasarle como arg el evento que sucede (puede ser e, event, o evt)
    console.log(e); // todo el evento
    console.log(e.type); // de que tipo
    console.log(e.target); // que objetivo
    console.log(e.target.value); // lo que el usuarioe scribe
});

// Con validacion:
busqueda.addEventListener('input', (e) =>{ 
    if(e.target.value === '') { // Si lo que escribe el usuario es un string vacio
        console.log('Fallo la validación');
    }
});
