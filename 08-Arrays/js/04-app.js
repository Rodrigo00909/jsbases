const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Una variable declarada en const solo se pueden cambiar sus valores solo si son objetos o arreglos, salvo que sellemos el objeto con freeze
meses[0] = 'Nuevo Mes';
// Agregar un elemento nuevo
meses[7] = 'Ultimo mes';
console.table(meses);