var lista = [1, 2, 3, 4];

console.log(lista.length);

var x = lista.unshift(0);

console.log('el número actual de la lista debería ser 5 y es: ' + x);

var y = lista.push(5);

console.log('el número actual de la lista debería ser 6 y es: ' + y);

console.log(JSON.stringify(lista));


