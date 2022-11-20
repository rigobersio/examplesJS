let arr = [-99, 55, 3, 77, 89, 55, 12, 3, 4, 5, 6, 7788, 987654, 3453456, 54345, 5667, 3423, 565768, 86, 6, -6564, 4, 6, 3, 3, 4, 5, 5, 7, 7, 4, 46, 78, 8, 8, 4, 75, -54335, 64];
// let numeroElement = arr.length - 1;
//let valorMax;
//let valorMin;
// let resultado;


function numMinMasMax(array){
	let valorMax = Math.max(...array);
	let valorMin = Math.min(...array);
	let resultado = valorMin + valorMax;
	return 'El valor max es: ' + valorMax + ' ; el valor min es: ' + valorMin + ' ; la suma de esos valores es: ' + resultado;
}

console.log(numMinMasMax(arr)); //resultado 89
//console.log(valorMin);
//console.log(valorMax);
// console.log(arr[])