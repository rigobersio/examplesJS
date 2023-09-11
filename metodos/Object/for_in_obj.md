# Bucles for...in en objetos:

```javascript
///Ejemplo 1 - Recorriendo un objeto simple:

const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

for (let clave in persona) {
  const valor = persona[clave];
  // Haz algo con la clave y el valor, como imprimirlos
}

//Ejemplo 2 - Recorriendo un objeto con propiedades anidadas:


const estudiante = {
  nombre: 'María',
  informacion: {
    edad: 22,
    carrera: 'Psicología'
  }
};

for (let clave in estudiante) {
  const valor = estudiante[clave];
  // Haz algo con la clave y el valor, considerando propiedades anidadas
}

//Ejemplo 3 - Recorriendo un objeto con propiedades personalizadas:


function Mascota(nombre) {
  this.nombre = nombre;
}

Mascota.prototype.tipo = 'Perro';

const mascota = new Mascota('Fido');

for (let clave in mascota) {
  const valor = mascota[clave];
  // Haz algo con la clave y el valor, considerando propiedades heredadas
}

```

## Errores comunes en bucles for...in en objetos:

* Recorrer las propiedades heredadas del prototipo del objeto, lo que puede dar lugar a resultados inesperados.

* No verificar si la propiedad es propia del objeto y no heredadas. Esto se puede hacer utilizando el método hasOwnProperty().