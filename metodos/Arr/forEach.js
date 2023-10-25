// ejecuta una callback por cada uno de los elementos del array
// en su version resumida la callback será function (elemento, indice)
// como es un método casi todo está automatizado y se pueden omitir muchas cuesntiones
// elemento será el elemento al que se le están aplicando las operaciones; e indice será el indice del array


var arr = [1,2,3,4];

arr.forEach(function(elemento, indice) {return console.log(elemento + 100)}); //output [101.102,103,104]

//la versión completa del metodo es mucho más compleja en está versión simplificada, incluso se puede omitir el parametro <indice>
// obteniendo el mismo resultado

//forEach es bueno para sustituir bucles o bucles anidados

/*
PALABRA MÁS LARGA

la función PalabraMasLarga recibe un array de ***frases*** y debe devolver
la ***palabra*** más larga entre todas la frases (la palabra con mayor
número de caracteres)

palabraMasLarga(['hola esto es un string', 'frase con palabra'])

*/

palabraMasLarga(frases) {
    // lo que hay que hacer es transformar una frase en un array de palabras
    // para esto se toma la frase se ocupa el método split ocupando como separador *el espacio*
    // PROBLEMA: no es una frase, es un número indeterminado de frases
    // considerando que el argumento será un array de frases se puede ocupar un doble bucle para:
    // 1. 1ro para iterar sobre las frases del arreglo de entrada
    // 2. 2do para descomponer la frase en palabras e ir almacenado las palabras en un nuevo array

    // una vez obtenido el nuevo array con una lista de palabras hay que iterar nuevamente para compararlas

    // una alternativa a los bucles es ocupar el método **forEach** que recorre elemento por elemento y permite
    // hacer diferentes cosas con el elemento en cuestión
    // de todos modos se necesitara un **forEach** anidado dentro del primero, para iterar en el arreglo nuevo
    // que contendrá palabras

    var strLargo = ""; // este elemento ira almacenado valores cada vez más largos hasta llegar al máximo.

    frases.forEach(frase => { // recorrerá frase por frase
        var arrPalabras = frase.split(' '); // ahora hay un nuevo arreglo que también necesita ser recorrido

        arrPalabras.forEach(palabra => {
            if (strLargo.length < palabra) {
                strLargo = palabra;
                // de esta manera **strLargo** almacenara la **palabra** más larga de la frase
                // y al repetir el proceso con todas las frases se almacenará 
                // la **palabra** más larga del arreglos de **frases**

            }

        })
    })
    return strLargo;
}
