// ejecuta una callback por cada uno de los eelementos del array
// en su version resumida la callback será function (elemento, indice)
// como es un método casi todo está automatizado y se pueden omitir muchas cuesntiones
// elemento será el elemento al que se le están aplicando las operaciones; e indice será el indice del array


var arr = [1,2,3,4];

arr.forEach(function(elemento, indice) {return console.log(elemento + 100)}); //output [101.102,103,104]

//la versión completa del metodo es mucho más compleja en está versión simplificada, incluso se puede omitir el parametro <indice>
// obteniendo el mismo resultado
