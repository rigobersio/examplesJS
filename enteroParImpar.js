var num = 33;
//num = prompt('Ingrese un número entero');



var respuesta2;

function enteroParImpar(x){
	var respuesta;
		if(x % 2 == 0){
			respuesta = 'El número ' + x + ' es un entero par.';
		} else {
			respuesta = 'El número ' + x + ' es un entero impar.';
		} return console.log(respuesta);
	}

if(num == num.toFixed()){
	enteroParImpar(num);
} else {
	respuesta2 = 'El número ' + num + ' no es un entero.';
	console.log(respuesta2);
}

