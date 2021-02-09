const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.color = 'blue';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

// Aun asi es mejor usar css para esto. Con js lo mejor seria quitar y agregar clases

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
// eliminar clase
card.classList.remove('card');
console.log(card.classList);