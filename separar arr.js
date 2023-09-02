
var arreglo = [0,1,2,3,4,5,6];

function diviArr (arr, n) {

	var numSubArreglos = Math.ceil(arr.lenght / n); // ouitput 4; n === 2
	
	var i = 0;
	var arrFinal = [];

	while (i < arr.length) {
		var subArr = [];
		
		if (arrFinal.length === numSubArreglos) {
			return arrFinal;

		} else {
			var j = 0;
			while (j <= n){
				
				if (subArr.length === n){
					arrFinal.push(subArr);
					i++;
					break;
				} else if (arr.length % n !== 0 && i === arr.length -1) {
					arrFinal.push(subArr.push(arr[i]));
					i++;
					break;

				} else {
					subArr.push(arr[i]);
					i++;
					j++;
				}
			}

		}

	}
}

diviArr(arreglo, 2);