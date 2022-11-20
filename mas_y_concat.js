var string1 = 'Hola ';
var string2 = 'Mundo.';
console.log(
	'considerando string1 = \'Hola \' && string2 = \'Mundo.\': string1 + string2 == string1.concat(string2) =');
console.log((string1 + string2) == string1.concat(string2));

// acá hay una diferencia

var array1 = ['Hola '];
var array2 = ['Mundo.'];
console.log('considerando array1 = [\'Hola \'] && array2 = [\'Mundo.\']: array1 + array2 == array1.concat(array2) =');
console.log((array1 + array2) == array1.concat(array2));

console.log('considerando array1 = [\'Hola \'] && array2 = [\'Mundo.\']: array1 + array2 =');
console.log(JSON.stringify(array1 + array2));


console.log('considerando array1 = [\'Hola \'] && array2 = [\'Mundo.\']: array1.concat(array2) =');
console.log(JSON.stringify(array1.concat(array2)));

var arr1 = ['Hola ', 'Mundo.', ' Esto es'];
var arr2 = [' una ', 'prueba.'];

console.log('considerando arr1 = [\'Hola \', \' Mundo\', \' Esto es\'] && arr2 = [\'una \', \'prueba\']: arr1 + arr2 =');
console.log(JSON.stringify(arr1 + arr2));


console.log('considerando arr1 = [\'Hola \', \' Mundo\', \' Esto es\'] && arr2 = [\'una \', \'prueba\']: arr1.concat(arr2) =');
console.log(JSON.stringify(arr1.concat(arr2)));