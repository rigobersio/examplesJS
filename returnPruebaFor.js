var arr = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var arr2 = [];

function func1(arr){
	for(var i = 0; i <7; i++){
		if(arr[i] === 'Miercoles'){
			return arr2[0] || console.log(arr[i]);
		} else {
			console.log(arr[i]);
		}
	} return console.log('El arreglo finalizo.');
};

func1(arr);