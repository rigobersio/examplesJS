var numeroFactorial;
//numeroFactorial = prompt('Ingrese el número al que le quiere calcular su factorial');

numeroFactorial = -21


function factorialForIf(a){
	var resultado = 1;
	if (a > 1){
	for(i = 1; i <= a; i++){
		resultado = resultado * i;
	}	
	} else if (a < 0){
		resultado = JSON.stringify('Error Matemático');
	} else if(a == 1){
		resultado = 1;
	} return 'El factorial de ' + a + ' es: ' + resultado + '.';
}



console.log(factorialForIf(numeroFactorial));
//alert(factorial(numeroFactorial));