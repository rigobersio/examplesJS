
var arreglo = [0,1,2,3,4,5,6];

function diviArr (arr, n) {

	var numSubArreglos = Math.ceil(arr.length / n); // ouitput 4; n === 2
	
	var i = 0;
	var arrFinal = [];

	while (i < arr.length) {
		var subArr = [];
		
		if (arrFinal.length === numSubArreglos) {
			return arrFinal;

		} else {
			//var j = 1;
			while (true /*j <= n*/){
				
				if (subArr.length === n){
					arrFinal.push(subArr);
					//j++;

					break;
				} else if (arr.length % n !== 0 && i === arr.length -1) {
					subArr.push(arr[i]);
					arrFinal.push(subArr);
					//i++;
					break;

				} else {
					subArr.push(arr[i]);
					i++;
					//j++;
				}
			}

		}

	}
}

diviArr(arreglo, 2);


// tambien hay que considerar el caso de que el número de los elementos 
//del subarreglo pedido, sea mayor que los elementos del arreglo ingresado


// otra forma

var arreglo = [1, 2, 3, 4, 5];

function subArr (arr, elementos) {
	if (elementos >= arr.length) {
		return [arr]; // puede que se necesite que el retorno sea un arreglo que solo contenga arreglos anidados
	}
	var arrFinal = [];

	while (true) {
		var miniArr = [];
		if (arr.length === 0){
			return arrFinal;
		}
		while(miniArr.length < elementos) {
			var num = arr.shift();
			miniArr.push(num);
			if (arr.length === 0) {
				arrFinal.push(miniArr);
				return arrFinal;
			} 
		} arrFinal.push(miniArr);

	} return [arr];
}

subArr(arreglo, 6);
subArr(arreglo, 2);