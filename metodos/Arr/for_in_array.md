# Bucles for...in en arreglos:

Ejemplo 1 - Recorriendo un arreglo de números:

```javascript

const numeros = [1, 2, 3, 4, 5];

for (let indice in numeros) {
  const numero = numeros[indice];
  // Haz algo con el número, por ejemplo, realizar un cálculo
}

// Ejemplo 2 - Recorriendo un arreglo de cadenas:

const frutas = ['manzana', 'plátano', 'naranja'];

for (let indice in frutas) {
  const fruta = frutas[indice];
  // Haz algo con la fruta, como contar las letras
}

//Ejemplo 3 - Recorriendo un arreglo mixto:

const datos = [1, 'dos', true, { nombre: 'Juan' }];

for (let indice in datos) {
  const elemento = datos[indice];
  // Haz algo con el elemento, puede variar según el tipo
}

```
## Errores comunes en bucles for...in en arreglos:

* Aunque es posible, no es la forma más común de recorrer arreglos en JavaScript, y puede causar problemas si se agregan propiedades personalizadas al objeto Array.prototype.


* No usar parseInt() para el índice: El índice en un bucle for...in es una cadena, por lo que si necesita un número entero, debe convertirlo utilizando parseInt() u otra función de conversión.