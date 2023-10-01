function mayuscula1(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    return nombre.split('').reduce(function (acumulador, elemento, indice) {
      if (indice === 0) {
        return acumulador;
      } else {
        return acumulador += elemento;
      }
    }, nombre[0].toUpperCase());
  }

function mayuscula2 (nombre) {
    return nombre[0].toUpperCase() + nombre.slice(1);
}

function mayuscula3 (nombre) {
    
    return nombre.length !== 0 && nombre[0] !== nombre[0].toUpperCase() ? nombre[0].toUpperCase() + nombre.slice(1) : nombre;
  }

  function mayuscula4 (nombre) {
    return nombre.split('').reduce(function(acumulador, elemento, indice) {
      return indice === 0 ? acumulador + elemento.toUpperCase() : acumulador + elemento;
    }, '');
  }
  
  console.log(mayuscula1('henry'));
  console.log(mayuscula2('henry'));
  console.log(mayuscula3('henry'));
  console.log(mayuscula4('henry'));