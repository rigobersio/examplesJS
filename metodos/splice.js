/*

El método splice en JavaScript se utiliza para modificar un array al agregar, eliminar o reemplazar elementos en posiciones específicas. Tiene una sintaxis flexible que permite realizar operaciones avanzadas en los arrays.

Sintaxis:

javascript

*/

array.splice(start, deleteCount, item1, item2, ...)

/*
start: Índice desde el cual se realizarán las modificaciones.
deleteCount: Número de elementos a eliminar desde start. Si es 0, no se eliminará ningún elemento.
item1, item2, ...: Elementos a agregar en el array a partir de la posición start.
Ejemplo pedagógico:

Supongamos que tenemos un array que representa una lista de compras:
*/

var listaCompras = ['manzanas', 'plátanos', 'naranjas', 'uvas'];


/* Ahora queremos realizar las siguientes operaciones:

Eliminar 'naranjas' y 'uvas' de la lista.
Insertar 'peras' en el lugar de 'naranjas'.
Agregar 'sandías' y 'melones' al final de la lista.
Podemos usar splice para lograr esto:

*/

// Eliminamos 'naranjas' y 'uvas' (deleteCount = 2) a partir de la posición 2.
listaCompras.splice(2, 2);

// Insertamos 'peras' en la posición 2.
listaCompras.splice(2, 0, 'peras');

// Agregamos 'sandías' y 'melones' al final de la lista.
listaCompras.splice(listaCompras.length, 0, 'sandías', 'melones');

console.log(listaCompras);


// agregar el número que falta

var numeros = [0, 1, 2, 3, 5];

numeros.splice(4, 0, 4);

numeros;

// eliminar 0 y luego agregar 6, 7, 8.

numeros.splice(0, 1);

console.log(numeros);

numeros.splice(4, 0, 6, 7, 8);

console.log(numeros);