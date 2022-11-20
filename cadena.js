var arrListaPacientes = ['María', 'Esteban', 'Lucia', 'Margot', 'Pedro', 'Juan', 'Diego', 'Francisco', 'Francisca', 'Salomón'];


// console.log('Lista actual de pacientes: ' + arrListaPacientes);
var arrNoPacientes;

arrNoPacientes = arrListaPacientes.shift();
// arrNoPacientes = arrListaPacientes.pop() + arrNoPacientes;
arrNoPacientes += arrListaPacientes.pop()


// arrListaPacientes.unshift(arrNoPacientes);
console.log(JSON.stringify(arrListaPacientes));
console.log(JSON.stringify(arrNoPacientes));
/*
var x;
x = 5;

x += 3

console.log(x);
*/

console.log(arrNoPacientes);


// console.log(JSON.stringify(arrNoPacientes));



