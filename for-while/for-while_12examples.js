//1)Problema de suma: Escribe un programa que tome un número como entrada 
//y calcule la suma de todos los números enteros desde 1 hasta ese número.

function sumatoria(num) {
    var resultado = 0;
    for (let i = 1; i <= num; i++) {
        resultado += i;
    } return resultado;
}


//2) Crea un programa que tome un número como entrada y calcule
// su factorial utilizando un bucle for.

function factorial(num) {
    var resultado = 1;
    if (num < 0) {
        return NaN;
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        for (let i = num; i > 1; i--) {
            resultado *= i;
        }
    } return resultado;
}

// 3) Problema de conteo de dígitos: Desarrolla un programa que tome un número como entrada
// y cuente la cantidad de dígitos que tiene.

function contadorDigitos(num) {
    var numStr = num.toString();
    var arrStr = numStr.split('');
    arrStr.push('fin');
    var resultado = 0;
    for (var i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === '.' || arrStr[i] === '-') {
            continue;
        } else if (arrStr[i] === 'fin') {
            return resultado
        } resultado += 1;
    }
}

// 4) Problema de números primos: Haz un programa que tome un número 
//como entrada y determine si es un número primo.

function esPrimo(num) {
    if (num < 2) {
        return 'No es primo';
    } else if (num > 1) {
        for (var i = 2; i <= num; i++) {
            if (num % i === 0 && i !== num) {
                return 'No es Primo';
            } else if (i === num) {
                return 'Es Primo';
            }
        }
    } else {
        return 'ERROR';
    }
}

// 5) Problema de serie Fibonacci: Escribe un programa que muestre los primeros n números de la serie Fibonacci utilizando un bucle while.

function fibonacci(Nnum) {
    arrFibonacci = [1, 1];
    if (Nnum <= 0) {
        return 'ERROR';
    } else if (Nnum === 1) {
        return [1];
    } else if (Nnum === 2) {
        return [1, 1];
    } else if (Nnum > 2) {
        for (var i = 0; arrFibonacci.length < Nnum; i++) {
            arrFibonacci.push(arrFibonacci[i] + arrFibonacci[i + 1])
        } return arrFibonacci;
    } else {
        return 'ERROR';
    }
}


// 6)Problema de impresión de patrones: Crea un programa que imprima diferentes patrones utilizando bucles for o while, 
//como un triángulo de asteriscos o un cuadrado hueco.

function trianguloRec(filas) {
    for (var i = 1; i <= filas; i++) {
        var triangulo = '';
        for (var f = 1; f <= i; f++) {
            triangulo += '.';
        }
        console.log(triangulo);
    }
}




// 7) Problema de búsqueda en un arreglo: Desarrolla un programa que busque un elemento específico en un arreglo y muestre su posición.

function buscarArr(arreglo, elemento) {
    var soyElArreglo = arreglo;
    for (var i = 0; i <= soyElArreglo.length; i++) {
        if (soyElArreglo[i] === elemento) {
            return i;
        }
    } return 'el elemento buscado no existe';
}



// 8) Problema de suma de elementos en un arreglo: Escribe un programa que tome un arreglo de números como entrada
// y calcule la suma de sus elementos utilizando un bucle for.


function sumatoriaDelArreglo(arreglo) {
    var resultado = 0;
    for (var i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i];
    } return resultado
}

// 10) Problema de conteo de vocales: Crea un programa que tome una cadena como entrada y cuente la cantidad de vocales que contiene.


function conteoVacales(str) {
    var resultado = 0;
    var arrVocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var arrStr = str.split('');
    for (var i = 0; i < arrStr.length; i++) {

        for (var f = 0; f < arrVocales.length; f++) {
            if (arrStr[i] === arrVocales[f]) {
                resultado += 1;
            }
        }
    } return resultado;
}


// 11) Problema de conversión de unidades: Haz un programa que tome un arreglo de temperaturas en grados Celsius 
//y lo convierta a grados Fahrenheit utilizando un bucle for. C=(F-32)/1,8

function celsiusToFahrenheit(arrC) {
    var arrFahrenheit = [];
    for (var i = 0; i < arrC.length; i++) {
        arrFahrenheit[i] = (arrC[i] * 1.8) + 32;
    } return arrFahrenheit;
}



// 12) Problema de potencia: Desarrolla un programa que tome dos números como entrada 
//y calcule el resultado de elevar el primer número a la potencia del segundo número utilizando un bucle while.

function potencia(base, exponente) {
    var resultado = 1;
    for (var i = 1; i <= exponente; i++) {
        resultado *= base;
    } return resultado;
}

// 13) Problema de generación de números aleatorios: Escribe un programa que genere un arreglo de n números aleatorios
// entre un rango especificado utilizando un bucle for.

function arregloAleatoreo(cantidadNum, inicio, final) {
    var arr = [];
    for (var i = 0; i < cantidadNum; i++) {
        while (arr.length <= i) {
            var numeroAleatorio = Math.floor(Math.random() * (final + 1));
            if (numeroAleatorio >= inicio) {
                arr[i] = numeroAleatorio;
            }
        }
    } return arr;
}

/*
En tu solución, estás generando un número aleatorio entre 0 y final, pero luego estás asegurándote 
de que ese número sea mayor o igual que inicio. Sin embargo, esto puede resultar en una ** distribución no uniforme **
  de los números aleatorios dentro del rango especificado. Es decir, algunos
  números dentro del rango pueden tener una mayor probabilidad de ser generados que otros.
*/


function arregloAleatorio(cantidadNum, inicio, final) {
    var arr = [];
    for (var i = 0; i < cantidadNum; i++) {
        var numeroAleatorio = Math.floor(Math.random() * (final - inicio + 1)) + inicio; // final + 1 - inicio; + 1 necesario x random
        arr.push(numeroAleatorio);
    }
    return arr;
}



//    *** while ***


//1)Problema de suma: Escribe un programa que tome un número como entrada 
//y calcule la suma de todos los números enteros desde 1 hasta ese número.

function sumatoria(num) {
    var resultado = 0;
    if (num < 1) {
        return 'El entero tiene que ser mayor a 0.'
    } else if (num > 0) {
        var i = 1;
        while (i <= num) {
            resultado += i;
            i++;
        }
    }
    return resultado;
}


//2) Crea un programa que tome un número como entrada y calcule
// su factorial utilizando un bucle while.

function factorial(num) {
    var resultado = 1;
    var i = 2;
    if (num < 0) {
        return 'ERROR';
    } else if (num === 0 || num === 1) {
        return 1;
    } else if (num > 1) {
        while (i <= num) {
            resultado *= i;
            i++;
        }
        return resultado;
    }
    else {
        return 'ERROR';
    }
}

// 3) Problema de conteo de dígitos: Desarrolla un programa que tome un número como entrada
// y cuente la cantidad de dígitos que tiene.

function contadorDigitos(num) {
    var i = 0;
    var numStr = num.toString();
    var numArr = numStr.split('');
    numArr.push('fin');
    var resultado = 0;
    while (i < numArr.length) {
        if (numArr[i] === '-' || numArr[i] === '.') {
            continue;
        } else if (numArr[i] == 'fin') {
            return resultado;
        }
        resultado += 1;
        i++;
    }
}

// 4) Problema de números primos: Haz un programa que tome un número 
//como entrada y determine si es un número primo.

function esPrimo(num) {
    if (num < 2) {
        return 'No es primo';
    } else if (num > 1) {
        for (var i = 2; i <= num; i++) {
            if (num % i === 0 && i !== num) {
                return 'No es Primo';
            } else if (i === num) {
                return 'Es Primo';
            }
        }
    } else {
        return 'ERROR';
    }
}

// 5) Problema de serie Fibonacci: Escribe un programa que muestre los primeros n números de la serie Fibonacci utilizando un bucle while.

function fibonacci(Nnum) {
    arrFibonacci = [1, 1];
    if (Nnum <= 0) {
        return 'ERROR';
    } else if (Nnum === 1) {
        return [1];
    } else if (Nnum === 2) {
        return [1, 1];
    } else if (Nnum > 2) {
        for (var i = 0; arrFibonacci.length < Nnum; i++) {
            arrFibonacci.push(arrFibonacci[i] + arrFibonacci[i + 1])
        } return arrFibonacci;
    } else {
        return 'ERROR';
    }
}


// 6)Problema de impresión de patrones: Crea un programa que imprima diferentes patrones utilizando bucles for o while, 
//como un triángulo de asteriscos o un cuadrado hueco.

function trianguloRec(filas) {
    for (var i = 1; i <= filas; i++) {
        var triangulo = '';
        for (var f = 1; f <= i; f++) {
            triangulo += '.';
        }
        console.log(triangulo);
    }
}




// 7) Problema de búsqueda en un arreglo: Desarrolla un programa que busque un elemento específico en un arreglo y muestre su posición.

function buscarArr(arreglo, elemento) {
    var soyElArreglo = arreglo;
    for (var i = 0; i <= soyElArreglo.length; i++) {
        if (soyElArreglo[i] === elemento) {
            return i;
        }
    } return 'el elemento buscado no existe';
}



// 8) Problema de suma de elementos en un arreglo: Escribe un programa que tome un arreglo de números como entrada
// y calcule la suma de sus elementos utilizando un bucle for.


function sumatoriaDelArreglo(arreglo) {
    var resultado = 0;
    for (var i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i];
    } return resultado
}

// 10) Problema de conteo de vocales: Crea un programa que tome una cadena como entrada y cuente la cantidad de vocales que contiene.


function conteoVacales(str) {
    var resultado = 0;
    var arrVocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var arrStr = str.split('');
    for (var i = 0; i < arrStr.length; i++) {

        for (var f = 0; f < arrVocales.length; f++) {
            if (arrStr[i] === arrVocales[f]) {
                resultado += 1;
            }
        }
    } return resultado;
}


// 11) Problema de conversión de unidades: Haz un programa que tome un arreglo de temperaturas en grados Celsius 
//y lo convierta a grados Fahrenheit utilizando un bucle for. C=(F-32)/1,8

function celsiusToFahrenheit(arrC) {
    var arrFahrenheit = [];
    for (var i = 0; i < arrC.length; i++) {
        arrFahrenheit[i] = (arrC[i] * 1.8) + 32;
    } return arrFahrenheit;
}



// 12) Problema de potencia: Desarrolla un programa que tome dos números como entrada 
//y calcule el resultado de elevar el primer número a la potencia del segundo número utilizando un bucle while.

function potencia(base, exponente) {
    var resultado = 1;
    for (var i = 1; i <= exponente; i++) {
        resultado *= base;
    } return resultado;
}

// 13) Problema de generación de números aleatorios: Escribe un programa que genere un arreglo de n números aleatorios
// entre un rango especificado utilizando un bucle for.

function arregloAleatoreo(cantidadNum, inicio, final) {
    var arr = [];
    for (var i = 0; i < cantidadNum; i++) {
        while (arr.length <= i) {
            var numeroAleatorio = Math.floor(Math.random() * (final + 1));
            if (numeroAleatorio >= inicio) {
                arr[i] = numeroAleatorio;
            }
        }
    } return arr;
}

/*
En tu solución, estás generando un número aleatorio entre 0 y final, pero luego estás asegurándote 
de que ese número sea mayor o igual que inicio. Sin embargo, esto puede resultar en una ** distribución no uniforme **
  de los números aleatorios dentro del rango especificado. Es decir, algunos
  números dentro del rango pueden tener una mayor probabilidad de ser generados que otros.
*/


function arregloAleatorio(cantidadNum, inicio, final) {
    var arr = [];
    for (var i = 0; i < cantidadNum; i++) {
        var numeroAleatorio = Math.floor(Math.random() * (final - inicio + 1)) + inicio; // final + 1 - inicio; + 1 necesario x random
        arr.push(numeroAleatorio);
    }
    return arr;
}


