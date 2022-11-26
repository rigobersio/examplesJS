var frasePalindromo = 'anita lava la tina';
var respuestaPalindromo;


/*
function palindromoEspacios(x_x_x){
	var respuestaPalindromoEspacios;
	var minusX_x_x = x_x_x.toLowerCase();
	var arrXxx = minusX_x_x.split(" ");
	var stringMinusXxx = arrXxx.join("");
	var arrMinusXxx = stringMinusXxx.split('');
	var reverseArrMinusXxx = arrMinusXxx.reverse();
	if(arrMinusXxx == reverseArrMinusXxx){
		respuestaPalindromoEspacios = 'La frase ' + x_x_x + ' es un palindromo.';
	} else {
		respuestaPalindromoEspacios = 'La frase ' + x_x_x + ' no es un palindromo.';
	} return respuestaPalindromoEspacios;
}

// respuesta

console.log(palindromoEspacios(frasePalindromo));


var arrXxx = 'oso';
var reverseArrXxx = 'osa';
var valorSwiych = (arrXxx == reverseArrXxx);
var x_x_x = 'oso';

	    switch(valorSwiych){
	    	case true:
	    	
	    	respuestaPalindromo = 'La frase ' + x_x_x + ' es un palindromo.';
	    	
	    	break;
	    	
	    	case false:

	    	respuestaPalindromo = 'La frase ' + x_x_x + ' no es un palindromo.';
	    	
	    	break;
	    }


console.log(respuestaPalindromo);
*/

function palindromo(x_x_x){
		console.log(x_x_x);
		var minusX_x_x = x_x_x.toLowerCase();
		console.log(minusX_x_x);
	    var arrXxx = minusX_x_x.split("");
	   console.log(arrXxx);
	    var arrXxx2 = arrXxx;
	    console.log('esto es arrXxx ' + arrXxx + ' y esto es arrXxx2 ' + arrXxx2);
	    var reverseArrXxx = arrXxx.reverse();
	    console.log(' luego del reverse el valor de arrXxx = ' + arrXxx + ' y el valor de arrXxx2 es ' + arrXxx2 + ' y e valor de reverseArrXxx es ' + reverseArrXxx);
	    // var valorSwiych = arrXxx == reverseArrXxx;
	    //arrXxx.reverse();
	    //var valorSwiych = arrXxx2 == arrXxx;
	    //console.log('arrXxx = ' + arrXxx + ' , ' + 'arrXxx2 = ' + arrXxx2);
}
console.log(palindromo('PERRO'));
// lo siguiente hay que borrarlo uhuigy
