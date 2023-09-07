
// 1) Escribe un programa que tome un número del 1 al 7 como entrada
//y muestre el día de la semana correspondiente (1 para "Lunes", 2 para "Martes", etc.).

var arr = ['ERROR', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function diaSemana(num) {
	switch (num) {
		case 1:
			return arr[num];
			break;
		case 2:
			return arr[num];
			break;
		case 3:
			return arr[num];
			break;
		case 4:
			return arr[num];
			break;
		case 5:
			return arr[num];
			break;
		case 6:
			return arr[num];
			break;
		case 7:
			return arr[num];
			break;
		default:
			return arr[0];
			break;
	}
}



// Crea un programa que solicite un mes del año (número del 1 al 12) y muestre el 
// nombre del mes correspondiente.

var arr = ['ERROR', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dieciembre'];
var soyMes = function (num) {
	switch (num) {
		case 1:
			return arr[num];
			break;
		case 2:
			return arr[num];
			break;
		case 3:
			return arr[num];
			break;
		case 4:
			return arr[num];
			break;
		case 5:
			return arr[num];
			break;
		case 6:
			return arr[num];
			break;
		case 7:
			return arr[num];
			break;
		case 8:
			return arr[num];
			break;
		case 9:
			return arr[num];
			break;
		case 10:
			return arr[num];
			break;
		case 11:
			return arr[num];
			break;
		case 12:
			return arr[num];
			break;
		default:
			return arr[0];
			break;
	}
}


// 3) Haz un programa que tome un carácter (letra) como entrada y determine si es una vocal
// o una consonante.

function vocalOConsonante(letra) {
	var str = 'aeiouAEIOU';
	var str2 = 'qwrtypsdfghjklñzxcvbnmQWRTYPSDFGHJKLÑZXCVBNM';
	var valor1 = str.includes(letra)
	var valor2 = str2.includes(letra);
	switch (valor1, valor2) {
		case true, false:
			return letra + ' es vocal';
			break;
		case false, true:
			return letra + ' es consonante';
			break;
		default:
			return 'ERROR';
			break;
	}
}




//4) Escribe un programa que tome una letra del alfabeto y muestre si es una letra mayúscula o minúscula.

function mayusOMinus(letra) {
	var str1 = 'qwertyuiopasdfghjklñzxcvbnm';
	var str2 = 'QWERTYUIOPASDFGHJKLÑZXCVBNM';

	var valor1 = str1.includes(letra);
	var valor2 = str2.includes(letra);

	switch (valor1, valor2) {
		case true, false:
			return letra + ' es mínuscula.';
			break;

		case false, true:
			return letra + ' es mayuscula.';
			break;

		default:
			return 'ERROR';
	}
}


// 5)	Crea un programa que solicite un número del 1 al 12 y muestre la cantidad de días
// que tiene el mes correspondiente (ignora años bisiestos).

function numDiasMes(num) {
	switch (num) {
		case 1:
			return 'Enero tiene 31 días.';
			break;
		case 2:
			return 'Febrero tiene 28 días.';
			break;
		case 3:
			return 'Marzo tiene 31 días.';
			break;
		case 4:
			return 'Abril tiene 30 días.';
			break;
		case 5:
			return 'Mayo tiene 31 días.';
			break;
		case 6:
			return 'Junio tiene 30 días.';
			break;
		case 7:
			return 'Julio tiene 31 días.';
			break;
		case 8:
			return 'Agosto tiene 31 días.';
			break;
		case 9:
			return 'Septiembre tiene 30 días.';
			break;
		case 10:
			return 'Octubre tiene 31 días.';
			break;
		case 11:
			return 'Noviembre tiene 30 días.';
			break;
		case 12:
			return 'Diciembre tiene 31 días.';
			break;
		default:
			return 'ERROR';
			break;
	}
}



//6)	Haz un programa que solicite una dirección cardinal (Norte, Sur, Este, Oeste)
// y muestre un mensaje específico para cada dirección.

function mensajeCoordenadas(lat, long) {
	var signoLat;
	var signoLong;
	if (lat > 0) {
		signoLat = '+';
	}
	else if (lat < 0) {
		signoLat = '-';
	}
	else {
		signoLat = 0;
	}

	if (long > 0 && long < 180) {
		signoLong = '+';
	}
	else if (long < 0 && long > -180) {
		signoLong = '-';
	}
	else {
		signoLong = 0;
	}
	switch (signoLat, signoLong) {
		case '+', '+':
			return `Las coordenadas son: Norte ${lat}, Este ${long}`;
			break;
		case '+', '-':
			return `Las coordenadas son: Norte ${lat}, Oeste ${long}`;
			break;
		case '-', '+':
			return `Las coordenadas son: Sur ${lat}, Este ${long}`;
			break;
		case '-', '-':
			return `Las coordenadas son: Sur ${lat}, Oeste ${long}`;
			break;
		case 0, '+':
			return `Las coordenadas son: Norte ${lat}, Este ${long}`;
			break;
		case 0, '-':
			return `Las coordenadas son: Norte ${lat}, Oeste ${long}`;
			break;
		case '+', 0:
			return `Las coordenadas son: Norte ${lat}, Este ${long}`;
			break;
		case '-', 0:
			return `Las coordenadas son: Sur ${lat}, Este ${long}`;
			break;
	}
}



//7) Escribe un programa que tome una puntuación numérica (del 0 al 100) 
//y muestre el grado equivalente (A, B, C, D o F) según la escala de calificación.

function notaNumToLetra(num) {
	let valorSwitch;

	switch (true) {
		case num >= 0 && num < 21:
			valorSwitch = 'F';
			break;
		case num >= 21 && num < 41:
			valorSwitch = 'D';
			break;
		case num >= 41 && num < 61:
			valorSwitch = 'C';
			break;
		case num >= 61 && num < 81:
			valorSwitch = 'B';
			break;
		case num >= 81 && num <= 100:
			valorSwitch = 'A';
			break;
		default:
			return 'ERROR';
	}

	return `El grado equivalente para ${num} es ${valorSwitch}.`;
}


// 8) Crea un programa que solicite una operación matemática (+, -, *, /) 
//y realice la operación entre dos números ingresados por el usuario.

function operation2Num(signo, num1, num2) {
	switch (true) {
		case signo == '+':
			return num1 + num2;
			break;
		case signo == '-':
			return num1 - num2;
			break;
		case signo == '*':
			return num1 * num2;
			break;
		case signo == '/':
			return num1 / num2;
			break;
		default:
			return 'ERROR';
			break;
	}
}


// 9)Haz un programa que tome una moneda (por ejemplo, "dólar" o "euro") y convierta
// una cantidad en pesos chilenos a la moneda seleccionada.

function clpToUS(clp, monedaExtranjera) {
	switch (true) {
		case monedaExtranjera == 'US':
			return clp / 1000;
			break;
		case monedaExtranjera == 'EU':
			return clp / 1250;
			break;
		default:
			return 'ERROR';
			break;
	}
}






//10) Escribe un programa que tome un número del 1 al 5 y muestre un patrón diferente
// para cada número utilizando caracteres o símbolos.
function patrones(num) {
	switch (num) {
		case 1:
			return '!"#$%';
			break;
		case 2:
			return '!"#$%/&';
			break;
		case 3:
			return '!(/&"#$%';
			break;
		case 4:
			return '!&%$"#$%';
			break;
		case 5:
			return '$%';
			break;
		default:
			return 'ERROR';
			break;
	}
}



//11) Crea un programa que solicite un código de país 
//(por ejemplo, "USA" o "ESP") y muestre el idioma oficial correspondiente.
//muy simple


// 12) Haz un programa que tome una calificación (A, B, C, D o F) y muestre un mensaje
// personalizado según la calificación obtenida.
// muy simple

// 13) Escribe un programa que solicite una tarjeta de crédito y muestre el tipo 
//de tarjeta (Visa, Mastercard, American Express, etc.) basado en el número ingresado.
// muy simple


// 14) Crea un programa que simule un menú de opciones
// (por ejemplo, "1. Ver información", "2. Agregar dato", etc.)
// y realice la acción seleccionada por el usuario.

function accionElegida(num) {
	var respuesta;
	switch (num) {
		case 1:
			return respuesta = function () { return 'apagar el equipo' };
			break;
		case 2:
			return respuesta = function () { return 'ingrasar a menu sonido' };
			break;
		default:
			return 'por favor seleccione una opción';
			break;
	}
}



// 15) Haz un programa que tome una dirección IP y determine si es una dirección IPv4 o IPv6.

function v4-o-v6(IP) {
	var valor = IP;
	switch (true) {
		case valor.includes('.'):
			return 'La dirección es de tipo IPv4.';
			break;
		case valor.includes(':'):
			return 'La dirección es de tipo IPv6.';
			break;
		default:
			return 'ERROR';
			break;
	}
}


