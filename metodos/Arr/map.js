//Dado un arreglo de números, crea una función que utilice el método map() para calcular el
// cuadrado de todos los números pares en el arreglo y devolver un nuevo arreglo con los resultados.

// Por ejemplo:

// Entrada: [1, 2, 3, 4, 5, 6]
// Salida esperada: [4, 16, 36]

var numeros = [1, 2, 3, 4, 5, 6];

numeros.map((num) => {
    if (num % 2 === 0) {
    return    num ** 2;
    } else {
        return undefined;
    }
})

// para eliminar los undefined:

var numeros = [1, 2, 3, 4, 5, 6];

var arrConUndefined = numeros.map((num) => {
    if (num % 2 === 0) {
    return    num ** 2;
    } else {
        return undefined;
    }
})

var arrSinUndefined = function (arrConUndefined) {
    var i = 0;
    var arrFinal = [];
    while (i < arrConUndefined.length) {
        if (arrConUndefined[i] !== undefined) {
            var numero = arrConUndefined[i];
            arrFinal.unshift(numero);
        }
        i++;
    } return arrFinal;
}

arrSinUndefined(arrConUndefined); // output correcto

// de una:


var numeros = [1, 2, 3, 4, 5, 6];

function arrCuadradosPares (arr) {
    var arrConUndefined = numeros.map((num) => {
        if (num % 2 === 0) {
        return    num ** 2;
        } else {
            return undefined;
        }
    });

    var i = 0;
    var arrFinal = [];
    while (i < arrConUndefined.length) {
        if (arrConUndefined[i] !== undefined) {
            var numero = arrConUndefined[i];
            arrFinal.unshift(numero);
        }
        i++;
    } return arrFinal
}

arrCuadradosPares(numeros);