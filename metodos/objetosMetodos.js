//Apuntes de clase: https://rise.articulate.com/share/O0SjmUFcjx_3AXSA2lizESbHitgJIOpq#/lessons/GEuGfdjTgCyER_X5B7P1-WPULoUX_kE2 


//¿cómo saber si una propiedad existe dentro de un objeto? 

// se puede recorrer un objeto incluso por propiedades que no existen. El resultado de esto será undefined 

  

  

// # una forma de determinar si una propiedad no existe podria ser la siguiente: 

  

var soyObjeto = { 

key1 : 'gato', 

key2 :'telefono', 

key3 : [], 

key4 : 100, 

}; 

  

console.log(soyObjeto.key5 === undefined); // true si la propiedad no existe. 

  

// pero puede ocurrir los siguiente 

  

soyObjeto.key5 = undefined; 

  

// por lo tanto ahora si existirá key5 y la prueba anterior arrojara un falso negativo (soyObejeto.key5 === undefined // output true) 

// # en este caso se puede ocupar el operador 'in' 

  

console.log("key5" in soyObjeto) // ouput true; esto es un prueba definitiva de la existencia de key5 

  

// nota importante a: '' 

// si las comillas se omiten se asume que se trata de variables. ejemplo: 

  

var nombrePropiedad = 'key6'; 

soyObjeto.key6 = null; 

  

console.log(nombrePropiedad in soyObjeto); // output true 

console.log('key5' in soyObjeto); // output true. y si soyObjeto.key5 === undefined ouput true significara que la propiedad existe y su valor es undefined. Esto es muy extrano y normalente //un programador ocuparía la key word null. 

  

 

 

 

// El objeto global object extiende o le proporciona muchas propiedades a los objetos 

// los métodos son funciones predefinidas  JS, pero, por otra parte, toda propiedad de un 

// objeto que tenga como valor una función será un método 

 

// El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad 

// dentro de un objeto. En cada caso devolverá true o false. 

// has tiene; Own propio. 

  

console.log(soyObjeto.hasOwnProperty('key5')); // output true 

 

// # otro método importante del objeto global object es object.keys() que retorna un arreglo con de todas las keys 
//de un objeto en el mismo orden. 

 

console.log(Object.keys(soyObjeto)); // output ['key1', 'key2', 'key3', 'key4', 'key5', 'key6'] 

 

 

// El bucle For permite recorrer con facilidad objetos, por otra parte el bucle For-in permite recorrer objetos
// y no es adecuado para recorrer arreglos. 

 

for (var prop in soyObjeto) { 

console.log('soy key: ' + prop); 

console.log('soy el valor: ' + soyObjeto[prop]); 

} 

 

//THIS 

//Contextos en JavaScript

//Dentro de este lenguaje de programación existe un objeto global llamado this. Este nos permite manipular 
//el contexto en el que las funciones y la información está siendo ejecutada. De esta forma podremos tener 
//un alcance más preciso dentro de nuestro código.

 

var mascota = { 
   animal: 'Perro', 
   raza: 'Ovejero Alemán', 
   amistoso: true, 
   dueño: 'María López', 
   info: () => { 
     console.log('Mi perro es un ' + this.raza); 
   }, 
}; 

 
