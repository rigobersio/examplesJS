// el principal 

function factorialForIf(data){
  var texto = 'El resultado es: ';
  if(typeof data === 'number' && Number.isInteger(data) && data > 0) {
    var resultado = 1;
        for(var i = data; i > 0; --i){
          resultado *= i;
        } return texto + resultado;       
    }else if(data === 0){
      return texto + 1;
    }else{
     return respuesta = 'dato no es 0 o un número natural.';
  }
  }





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

alternativa

var dato = 7; // Número del que queremos calcular el factorial
let resul = 1;
for(let i = dato; i>0; i--){
    resul *= i;
}
console.log(resul);

// con previa

function factorialForIf(a){
  var resul = 1;
  var resul2 = 'Error Matemático';
  var resul3 = 'Error inesperado';
  if(a != a.toFixed()){
    return resul2;
  }else if(a == 0 || a == 1){
    return resul;
  }else if(a > 1){
    for(var i = a; i > 0; i--){
      resul *= i;
    }return resul;
  } else{
    return resul3;
  }
}

// mejor todavia este tiene un error variable resultado que no cambia

function factorialForIf(data){
  if(typeof data === 'number' && Number.isInteger(data) && data >= 0) {
    function soyFuncion(data){
      var resultado = 1;
      if(data === 0){
        return 'el factorial es: ' + 1;
      }else if(data === 1){
        return 'El factorial es: ' + 1;
      }else{
        for(var i = data; i >=2; i--){
          resultado = resultado * i;
        } return 'El factorial es: ' + resultado;
      }
    }
  }else{
     return 'EL dato no es un número.';
  }
}

// con flecha y while

const factorial = (numero) => {
  if (numero < 0) numero = numero * -1;
  if (numero == 0 || numero == 1) return 1;
  let factorial = 1;
  while (numero > 1) {
    factorial = factorial * numero;
    numero--;
  }
  return factorial;
}



//con function

function functionRecursivaFactorial(n){
  if(n == 0){
    return 1
  } return n * functionRecursivaFactorial(n - 1);
}