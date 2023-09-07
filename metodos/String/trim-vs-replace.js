//el método trim() elimina los espacios en blanco al principio y al final de una cadena, pero
// no eliminará los espacios en blanco dentro de la cadena.

//Para eliminar todos los espacios en blanco, incluidos los que están entre 
//"hola" y "mundo", puedes usar una combinación de métodos para lograrlo. Por ejemplo:



let cadena = ' hola   mundo  .  ';
cadena = cadena.replace(/\s+/g, ''); // Esto elimina todos los espacios en blanco 
//(incluyendo espacios, tabulaciones y saltos de línea)


console.log(cadena); // Esto mostrará "holamundo."

//expresión regular *** /\s+/g *** en el método replace() busca y reemplaza 
//todas las ocurrencias de uno o más espacios en blanco con una cadena vacía

// con Trim

cadena.trim(); //output 'hola   mundo   .'

// trim parece de poca utilidad pero puede ser util para estilizar un string
// cuando no se quiere eliminar todos los espacios para hacer alguna prueba,
//así mismo también se podría ocupar para este propósito un .slice(x, y), pero esto seria menos eficiente