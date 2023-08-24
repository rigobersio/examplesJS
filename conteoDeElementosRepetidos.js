// Conteo de Elementos: Crea una función que cuente la cantidad de cada elemento en un 
//array utilizando reduce().



var arreglo = [1, 1, 2, 4, 1, 0, 4];

// reduce()

function cuantosHayReduce(arr) {
    return arr.reduce(function (acumulador, elemento) {
        if (acumulador[elemento] === undefined) {
            acumulador[elemento] = 1;
        } else {
            acumulador[elemento]++;
        } return acumulador;
    }, {});
}


function cuantosHayWhile(arr) {
    var i = 0;
    var cantidadDeCadaElemento = {};
    while (i < arr.length) {
        if (cantidadDeCadaElemento[arr[i]] === undefined) {
            cantidadDeCadaElemento[arr[i]] = 1;
            i++;
        } else {
            cantidadDeCadaElemento[arr[i]]++;
            i++;
        }
    } return cantidadDeCadaElemento;
}




