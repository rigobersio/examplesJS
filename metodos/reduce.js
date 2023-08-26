// 1) Suma de Números: Dado un array de números, usa reduce() para encontrar la suma total de los elementos.
var arr = [1, 2, 4, 77, 1.4568326];

var total = arr.reduce(function (contador, numero) { return contador + numero }, 0);

// 2) Promedio de Números: Utiliza reduce() para calcular el promedio de los números en un array.

var promedio = (arr.reduce(function (contador, numero) { return contador + numero }, 0)) / arr.length;

// 3) Contar Vocales: Escribe una función que cuente la cantidad total de vocales en una cadena usando reduce().

var str = 'isdbjjbeuhwiuiuatuOOU';

var arrVocales = 'aeiouAEIOUÁÉÍÓÚáéíóú'.split('');

var vocalesArr = str.split('').reduce(function (contador, letra) { var i = 0; while (i < arrVocales.length) { if (letra === arrVocales[i]) { return contador + 1; } i++ } return contador }, 0);

vocalesArr;

// 4) Concatenación de Cadenas: Toma un array de cadenas y utiliza reduce() para concatenar todas las cadenas en una sola.

var arr = ['Hola', 'mundo', 'esto', 'una', 'concatenación', 'de', 'cadenas.'];


var strArr = arr.reduce(function (nuevoString, str) { if (str !== arr[0]) { return nuevoString + ' ' + str } else { return nuevoString + str } }, '');

console.log(strArr);


// 5) Contar Palabras: Escribe una función que cuente el número total de palabras en un array de cadenas usando reduce().

var arr = ['Hola', 'mundo', 'esto', 7, [], {}, 88, 'una', 'concatenación', 'de', 'cadenas.'];

var numeroPalabras = arr.reduce(function (contador, elemento) { if (typeof elemento === 'string') { return contador + 1 } else { return contador } }, 0);


// 6) Factorial: Calcula el factorial de un número utilizando reduce().
function factorial(num) {
   var arr = [num];
   if (num > 1) {
      var i = 0;
      while (num > 1) {
         arr.push(num - 1);
         num--;
      }
      return arr.reduce(function (factorAcumulado, numero) { return factorAcumulado * numero }, 1);
   } else if (num === 1 || num === 0) {
      return 1;
   } else {
      return 'ERROR';
   }
}


// 7) Encontrar el Mayor Número: Encuentra el número más grande en un array utilizando reduce().

var arr = [1, 2, 4, 77, 1.4568326];

var mayorArr = arr.reduce(function (soyMayor, numero) { if (numero > soyMayor) { soyMayor = numero; return soyMayor; } else { return soyMayor; } }, arr[0]);


// 8) Eliminar Duplicados: Escribe una función que elimine los elementos duplicados en un array utilizando reduce().

var arrNumeros = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11,];

function arrFilter(arr) {
   var i = 0;
   var nuevoArr;
   while (i < arr.length) {
      var f = i + 1;
      while (f < arr.length) {
         if (arr[i] === arr[f]) {
            arr[f] = null;
         } f++;
      } i++;
   } return arr.reduce(function (nuevoArr, elemento) { if (elemento !== null) { nuevoArr.push(elemento); }; return nuevoArr; }, []);
}

console.log(arrFilter(arrNumeros));

// 9) Contar Caracteres: Cuenta cuántas veces aparece un carácter específico en una cadena usando reduce().

var arrSopaipillas = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 'sopaipilla', 'sopaipilla'];

function contarElementos(busqueda, arr) {
   return arr.reduce(function (numeroDeElementos, elemento) {
      if (elemento === busqueda) { return numeroDeElementos + 1 } else { return numeroDeElementos; }
   }, 0);
};

console.log(contarElementos('sopaipilla', arrSopaipillas));

// 10) Acumulador de Objetos: Toma un array de objetos con propiedades iguales y valores numéricos. Usa
// reduce() para obtener un objeto nuevo (similar) que contenga en cada propiedad la suma de sus valores individuales.

var arrObj = [{a : 1, b : 2, c : 3,}, {a : 1, b : 2, c : 3,}, {a : 1, b : 2, c : 3,}];

function sumaValoresPropiedades(arr) {
   var nuevoObj = {
      a : arr.reduce(function (acumulador, valorPropiedad) {return acumulador + valorPropiedad.a}, 0),
      
      b : arr.reduce(function (acumulador, valorPropiedad) {return acumulador + valorPropiedad.b}, 0),

      c : arr.reduce(function (acumulador, valorPropiedad) {return acumulador + valorPropiedad.c}, 0),
   };
   return nuevoObj;
}

console.log(sumaValoresPropiedades(arrObj));


// 11) Ordenar Números: Ordena un array de números de menor a mayor utilizando reduce().

var arr = [1,2,2,1,6,-500,8];

var OrdenadorReduce = arr.reduce(function(arrOrdenado, número) {
   
}, [])

















var numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

var ordenadosReduce = numeros.reduce((ordenados, numero) => {
  var insertado = false;
  for (var i = 0; i < ordenados.length; i++) {
    if (numero < ordenados[i]) {
      ordenados.splice(i, 0, numero);
      insertado = true;
      break;
    }
  }
  if (!insertado) {
    ordenados.push(numero);
  }
  return ordenados;
}, []);

console.log(ordenadosReduce);  // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


// 12) Contar Caracteres en Cadenas: Cuenta cuántas veces aparece un carácter específico 
// en un array de cadenas utilizando reduce().

var arr = [1, 2, 3, 1, 2, 3];

function contadorCaracteres (caracter, arreglo) {
   return arreglo.reduce(function (acumulador, elemento) {
      if(caracter === elemento) {
      return acumulador += 1;
      } else {
         return acumulador;
      }
   }, 0);
}

// 13) Conteo de Elementos: Crea una función que cuente la cantidad de cada elemento en un 
//array utilizando reduce().

var arr = [1, 2, 3, 1, 2, 3];

function conteoElementos(arreglo) {
   return arr.reduce(function (contador, elemento){
      if (contador[elemento] === undefined) {
         contador[elemento] = 1;
      } else {
         contador[elemento]++;
      } return contador;
   }, {});
}


//14) Extracción de Valores: Utiliza reduce() para extraer todos los 
//valores únicos de un array de objetos.

var arr = [1, 2, 3, 1, 2, 3, 77];

function extractorUnicos (arreglo) {
   var object = arreglo.reduce(function (acumulador, elemento) {
      if (acumulador[elemento] === undefined) {
         acumulador[elemento] = 1;
      } else {
         acumulador[elemento]++
      } return acumulador;
   }, {});

   var arrPropiedades = Object.keys(object);
   var arrExtraidos = [];
   var i = 0;
   while(i < arrPropiedades.length) {
      if (object[arrPropiedades[i]] === 1) {
         arrExtraidos.push(Number.arrPropiedades[i]); // alternativa (arrPropiedades[i] + 1 - 1); + 0 no funciona
         i++;
      } else {
         i++;
      }
   } return arrExtraidos;
}