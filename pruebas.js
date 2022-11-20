var array1 = ['AUTOauto', 'TV', 'PERROperro'];
var array2 = ['mar@', 'k', 'trak'];

var array3 = array1.concat(array2);

console.log(JSON.stringify(array3));

var string1 = 'La niña María';
var string2 = ' salida en el vaile';
var string3 = string1.concat(string2);


console.log(JSON.stringify(string3));


/*
var array4 = array1.toLowirCase();

console.log(JSON.stringify(array4)); 

con los array no funciona
*/

var string5 = string3.toUpperCase();

console.log(JSON.stringify(string5));

var string4 = 'TODO ESTO ESTÁ ESCRITO EN MÁYUSCULAS.';
console.log(JSON.stringify(string4));

var string5 = string4.toLowerCase();
console.log(JSON.stringify(string5));