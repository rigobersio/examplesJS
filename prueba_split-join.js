var string1 = 'Hola Mundo.';
var string2 = 'Hola Mundo';


console.log(string1);
console.log('array para sting \"Hola Mundo\" con el .split() = ' + JSON.stringify(string1.split()));
console.log('array para sting \"Hola Mundo\" con el .split(\' \') = ' + JSON.stringify(string1.split(' ')));
console.log('array para sting "Hola Mundo" con el .split(" ") = ' + JSON.stringify(string1.split(" ")));
console.log('array para sting "Hola Mundo" con el .split(\'\') = ' + JSON.stringify(string1.split('')));