var numeroFactorial;
//numeroFactorial = prompt('Ingrese el número al que le quiere calcular su factorial');

numeroFactorial = 21
var resultado = 1;
var i = 1;

function factorial(x){
	if (x == 0){
		resultado = 1;
	} else if (x < 0){
		resultado = JSON.stringify('Error Matemático');
	} else if(x == 1){
		resultado = 1;
	} else if(i <= x){
		resultado = resultado * i;
		i++;
		return factorial(x);
	} return 'El factorial de ' + x + ' es: ' + resultado + '.';
}
console.log(factorial(numeroFactorial));
//alert(factorial(numeroFactorial));

	