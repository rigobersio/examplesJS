// En JavaScript, el método .test() se utiliza para realizar una búsqueda de coincidencias de
// una expresión regular en una cadena de texto. Este método devuelve true si se encuentra una
// coincidencia y false en caso contrario.

//es una vocal???
//
function esVocal(letra) {
  return /[aeiouáéíóú]/i.test(letra);
}

console.log(`se evaluara si es que 'Á' es una vocal ocupando la function esVocal: ${esVocal('Á')}`);
