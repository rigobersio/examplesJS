// este método retornera un nuevo array con algunos elementos seleccionados
// si el retorno es **true** el elemento se selecciona para ser parte del retorno final
//si el retorno es **false**, el elemento se descarta

var arrNum = [1, 2, 3, 4, 5];

arrNum.filter(function (num) { //ocupa una callback
	return num % 2 === 0;
})   // output [2,4]