var soyUnObjeto = {
	nombre: 'objeto',
	edad: 0,
};

// alacenar en una variable los valores de las propiedades

var variable1 = soyUnObjeto.nombre;

console.log(variable1); // == 'objeto'

console.log();

// con el método desetructurado ES6

var {nombre, edad} = soyUnObjeto;

//se crear una variable nombre y otra llamada edad con los valores de las propiedades correspondientes

console.log(nombre, edad); // 'objeto' , 0

// para objetos anidados

var obj1 = {
	soyUnObjetoAnidado: {
		nombre1: 'No tengo un nombre',
		edad1: 'no tengo una edad',
		especie1: 'soy un hombre imaginario',
	},
};

var {soyUnObjetoAnidado: {nombre1, edad1, especie1, error}} = obj1;
console.log();
console.log(nombre1, edad1, especie1, error); // se declarara la variable error pero no se le asignara ningun valor
console.log(error);
console.log();
// declarar una variale con un nombre distinto del key

var soyUnObjeto1 = {
	nombre22: 'objeto',
	edad22: 0,
};

var {nombre22: nombre222, edad22: edad222} = soyUnObjeto1;

console.log(nombre222, edad222);
console.log();

var obj11 = {
	soyUnObjetoAnidado1: {
		nombre12: 'No tengo un nombre',
		edad12: 'no tengo una edad',
		especie12: 'soy un hombre imaginario',
	},
};

var {soyUnObjetoAnidado1: {nombre12: nombre13, edad12: edad13, especie12: especie13}} = obj11;

console.log(nombre13, edad13, especie13);

// hasta este punto todo ok
// desestructuración con arreglos

var a;
var b;
var c;

[a , b] = [22, 33];
/* lo que ocurre es que tenemos un arreglo con 2 elementos (index 0,1), y cada index de arreglo se asigna
a las variables correspondientes
*/ // en el caso de '[a, b] = [1, 2, 3, 4];' 3 y 4 no se asignaran

console.log(a, b); // 22 33
console.log();
//para saltar valores de arreglos
[a, , , ,b, c] = [0, 1, 2, 3, 4, 5];
console.log(a, b, c);// 0, 4, 5
console.log();
// intercambiar valores de variable (a== 0 y b == 4)
[a, b] = [b, a];
console.log(a, b);// a == 4 y b == 0
console.log();
// operador rest para desestructurar
var args; // se ocupa por convención junto al operador rest ... pero no es obligación

[a, b, c, , , ,...args] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log('[a, b, c, , , ,...args] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];');
console.log(a, b, c, args);
console.log();
// rest en funciones
const ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function eliminarLos3PrimerosElementos(arreglo){
	var [, , ,...nuevoArreglo] = arreglo; // en este caso var no es necesario. la variable se creara igual con un scope local
	return nuevoArreglo;
};

var arrFinal = eliminarLos3PrimerosElementos(ARR);
console.log(arrFinal);

var variableFlecha = (arreglo) => {
	[, , ,...nuevoArregloFlecha] = arreglo;
	console.log(nuevoArregloFlecha);
};

console.log();
console.log('lo mismo de antes pero con una función flecha');
variableFlecha(ARR);

console.log('operador spread (espred)');

/* este operador hace lo contrario que rest.

toma un arreglo y los descompone en sus elementos individuales para que la function pueda recibirlos y asignarlo a sus parametros correspondientes
*/
const NUMERO = [1, 2, 3];

function sumar(x, y, z){
  return x + y + z;
}
 
//sumar(NUMERO); // esto es un error
console.log(sumar(NUMERO[0], NUMERO[1], NUMERO[2])); // esto es una opción
// con el operador seria
console.log(sumar(...NUMERO));//es el mismo símbolo del operador rest