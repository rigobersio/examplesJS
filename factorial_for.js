//var numeroFactorial = prompt('Introduce el número al que le quieres calcular el factorial.');

var numeroFactorial = 5;
var resultado;

if(numeroFactorial >= 0){
  resultado = 1
} else {resultado = 'Math error.';
}



for(i = 1; i <= numeroFactorial; i++){
  if(numeroFactorial != 0){
    resultado = resultado*i;
  }
}
console.log('El factorial de ' + numeroFactorial + ' es: ' + resultado);
//alert('El factorial de ' + numeroFactorial + ' es: ' + resultado);