function numeroPrimo(num){
	if(num <= 0){
		return console.log(`${num} no es un número primo.`);
	} else if(num == 1){
		return console.log(`${num} es un número primo.`);
	} else if(num < 2){
		return console.log(`${num} no es un número primo.`);
	} for(let i = 2; i <= num; i++){
		if(num % i == 0 && num != i){
			return console.log(`${num} no es un número primo.`);
		} else if(num == i){
			return console.log(`${num} es un número primo.`);
		}
	} return console.log('Ha ocurrido un error inesperado.');
}