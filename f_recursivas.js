// Factorial Recursivo
function factorial(n) {
	if(n === 0) {
		return 1;
	}
	return n * factorial(n -1);
}

// Fibonacci Recursivo [0,1,1,2,3,5,8,13,21]

function fibo(n) { //n es la pocición del arreglo que se quiere retornar
	// no hay que construir un arreglo hay que saber como se itera en un arraglo
	// qué es n en el mundo arregloJS- Humano?
	// sería arreglo.[n] ; esto es porque el retorno es el número correspondiente el index n
	// cómo obtengo este número en terminos de calculo?
	// (arr.length -1) + (arr.length -2) === arr[n]
	// pero no tengo un **arr**
	// esto es similar a n! pero menos intuitivo ya que acá la recursidad no para cuando se golpea con un return es es un neutro multiplicativo (1) y al final re retorna todo el producto acumulado
	if(n < 2) {
		return n;
	}// acá siempre hago aguas pero tiene que ir el **return de mayor interes** pero siempre el final final es por el **return n**
	//la definición recurrente fibo donde n representa la pocisión --> fn = f(n-1) + f(n-2)
	//(y justamente existe la excepción para n = 0 y n = 1)
	return fibo(n-1) + fibo(n-2);
	// en principio esto no tendria fin o sentido aparentemente pero en estás nuevas f fibo el argumento es cada vez más pequeño
	// y en algún punto ese argumento será 1 (o menor q 2)
	// si n === 3 en 1° fibo(2) + fibo(1)
	// 2° [fibo(1) + fibo(0)]   + return 1
	// 3° [{return 1} + {return 0}] + return 1 --> 2, y 2 el el valor en la poción 3
	// 4° al funal es una seríe de sumas de UNOS y CEROS disfrazada

}

// sumatoria de los n primero números del array

function sum(arr, n) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
  if(arr.length === 0 || n === 0) return 0;
  if(n === 1) return arr[0];
  return arr[arr.length - n] + sum(arr, (n - 1));  
};

revertir un string

function reverseString(str) {
  function recur(i) {
    if(!str) return;
    if(i === str.length + 1) return '';
    return str[str.length - i] + recur(i + 1); 
  };
  return recur(1);
}

reverseString("hello");
