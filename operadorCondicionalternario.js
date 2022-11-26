// retornar el minimo valor

function retornarElMinValor(x, y){
	if(x < y){
		return console.log(x);
	} else {console.log(y);}
}

function retornarElMinValor2(x, y){
	console.log(x < y ? x : y);
}

retornarElMinValor(1, 2);
retornarElMinValor2(1, 2);


function compararValor(a, b){
	return console.log(a == b ? a + ' y ' + b + ' son iguales.'
	     : a >  b ? a + ' es mayor que ' + b + '.' : b + ' es mayor que ' + a + '.');
}


compararValor(50, 80);



function compararValor(a, b){
	return a == b ? console.log(a + ' y ' + b + ' son iguales.')
  : a >  b ? console.log(a + ' es mayor que ' + b + '.') : console.log(b + ' es mayor que ' + a + '.');
}


compararValor(-50, -80);
