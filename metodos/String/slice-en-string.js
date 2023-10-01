// este es muy cómodo si se quiere modificar un string para preséntalo con las inicial en mayúscula

function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    return nombre.length !== 0 && nombre[0] !== nombre[0].toUpperCase() ? nombre[0].toUpperCar + nombre.slice(1) : nombre;
  }