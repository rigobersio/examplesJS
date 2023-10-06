// es vocal???
//

function esVocal(letra) {
  var vocales = ['a', 'e', 'i', 'o', 'u'];
  return vocales.includes(letra.toLowerCase());
}

console.log(`prueba para 'A' ${esVocal('A')}`); // true

// alternativamente 

function esVocal2(letra) {
  var vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
  return vocales.includes(letra);
}

console.log(`prueba 2 para 'A' ${esVocal2('A')}`); // true

// con expresión literal
//
function esVocal3(letra) {
  return /[aeiouáéíóú]/i.test(letra);
}


console.log(`expresion literal + metodo include('Í') : ${esVocal3('Í')}`);
