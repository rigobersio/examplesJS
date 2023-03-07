function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(numero != Math.round(numero)){
    return false;
  } else if(numero >= 100 &&numero.toString().length == 3){
    return true
  }else if(numero <= -100 &&numero.toString().length == 4){
    return true
  }return false
}

console.log(tieneTresDigitos(-333));