// se pueden eliminar espacios en un string ocupando combinaciones de métodos como
// replace, split, join, bucles, reduce
// también se puede hacer ocupando la siguiente expresión regular que representa
// uno o más espacios: /\s+/g

var str = 'soy una cadena con varios espacios.'

function eliminarEspacios (string) {
    return string.replace(/\s+/g, '');
}

eliminarEspacios(str); // output: 'soyunacadenaconvariosespacios.'