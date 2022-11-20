var string1 = 'termometro';
var array1 = ['aa', 'bb', 'cc'];
var string2 = string1.charAt(0);
// var array2 = array1.charAt(0);

console.log(JSON.stringify(string2));
//console.log(JSON.stringify(array2));

console.log('indexOf() && lastIndexOf()')

var string3 = 'Esto es el clasico "Hola Mundo"';

console.log('Esto es el clasico "Hola Mundo".indexOf(0) = ' + string3.indexOf('o'));

console.log('lastIndexOf()');

console.log('Esto es el clasico "Hola Mundo".lastIndexOf(0) = ' + string3.lastIndexOf('o'));

console.log('De aquí en adelante');

var zz = '33.33';
console.log(zz.indexOf('4'));
console.log('\'33.33\'.toFixed() es = ' + zz.toFixed()); // .toFixed() para una variable no númerica 
producira un error