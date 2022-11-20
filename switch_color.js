//var dia = prompt('Por favor ingrese su día de nacimiento.');
//var nombre = prompt('Por favor ingrese su nombre.');

var dia = 27;
var nombre = 'Rigoberto';

var color;

if(dia > 10 && dia < 20){
	color = dia - 10;
} else if(dia > 20 && dia < 30){
	color = dia - 20;
} else {
	color = 5
}


switch(color){
	case 1:
	case 2:
	case 3:
	
	//alert(nombre + ' tu color es: ' + 'rojo');
	console.log(nombre + ' tu color es: ' + 'rojo');
	break;

	case 4:
	case 5:
	case 6:

	//alert(nombre + ' tu color es: ' + 'verde');
	console.log(nombre + ' tu color es: ' + 'verde');

	break;

	case 7:
	case 8:
	case 9:
	
	//alert(nombre + ' tu color es: ' + 'azul');
	console.log(nombre + ' tu color es: ' + 'azul');

	break;
	
}