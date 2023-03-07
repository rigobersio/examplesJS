
var n = 4;
var m = 7;
for(var i = 0; i <= n; i++){
	console.log(i);
	for(var j = 0; j <= m; j++){
		console.log(i + ', ' + j + ' esto es i, j');
	}
}

function paresMatrix (a, b){
	for(var i = 0; i <= a; i++){
		for(var j = 0; j <= b; j++){
		console.log(i + ', ' + j + ' esto es i, j');
	}
} return console.log('He terminado.');
}

/* notas: no se puede ocupar el operador '==', además hay q notar en en el primer for i toma el valor de 0 y en el segundo for 
j alcanza su valor max q es b, a continuació, vuelve a iniciar el bucle con un i igual a 1 y en el segundo for j se reinicia a 0,
pero esto no ocurre en el bucle while
*/

//con bucle while

var c = 10;
var d = 10;
var i = 0;
var j = 0;

while(i <= c){
	while(j <= d){
		console.log(i, j);
		j++;
	}
	j = 0;
	i++;
}


/* en este caso es necesario indicar los valosres iniciales y sobre todo reiniciar manualmente el valo del j en al terminar
la primera ronda, de lo contrario en la segunda cuando i tenga el valor de 1 j segira con su máximo valor obtenido previamente que
es 11 y no se entrara en el segundo bucle