# El método hasOwnProperty() en JavaScript se utiliza para determinar si un objeto tiene una propiedad con un nombre específico. Aquí tienes algunos ejemplos clásicos de cómo usar este método:

Comprobar si un objeto tiene una propiedad:

```javascript

const objeto = {
  nombre: 'Juan',
  edad: 30
};

console.log(objeto.hasOwnProperty('nombre')); // true
console.log(objeto.hasOwnProperty('apellido')); // false
```

* En este ejemplo, hasOwnProperty() se utiliza para verificar si el objeto tiene las propiedades "nombre" y "apellido". Retorna true para "nombre" porque existe en el objeto, y false para "apellido" porque no existe.

Iterar sobre las propiedades de un objeto y comprobar si son propias del objeto:

```javascript
const persona = {
  nombre: 'María',
  edad: 25
};

for (const propiedad in persona) {
  if (persona.hasOwnProperty(propiedad)) {
    console.log(`Propiedad: ${propiedad}, Valor: ${persona[propiedad]}`);
  }
}
```

En este caso, se itera a través de todas las propiedades del objeto "persona" y se utiliza hasOwnProperty() para asegurarse de que solo se impriman las propiedades que son propias del objeto.