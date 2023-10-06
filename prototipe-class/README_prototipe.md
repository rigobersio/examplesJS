# prototipo

####   La mayoría de los objetos tiene un prototipo

* Un prototipo es otro objeto que se utiliza como una reserva de propiedades alternativa.

* Cuando un objeto recibe una solicitud por una propiedad que este no tiene, se
buscará en su prototipo la propiedad, luego en el prototipo del prototipo y asi
sucesivamente.

* Es el gran prototipo ancestral, la entidad detrás de casi todos los objetos es: **Object.prototype**.
    * Este ***prototipo*** proporciona algunos métodos que pueden ser accedidos por todos los objetos.


##### Muchos objetos no tienen Object.prototype directamente como su prototipo.

*  En su lugar tienen otro objeto que proporciona un conjunto diferente de propiedades predeterminadas.
    * Las funciones derivan de Function.prototype
    * arrays derivan de Array.prototype

* Tal prototipo de objeto tendrá en si mismo un prototipo, a menudo Object.prototype
    * por lo que aún proporciona indirectamente métodos tradicionales.

### Object.create para crear un objeto con un prototipo especifico.

```javascript
let conejoPrototipo = {
hablar(linea) {
console.log(`El conejo ${this.tipo} dice '${linea}'`);
104}
};
let conejoAsesino = Object.create(conejoPrototipo);
conejoAsesino.tipo = "asesino";
conejoAsesino.hablar("SKREEEE!");
// → El conejo asesino dice 'SKREEEE!'
```

* Ojo a ***create***

* ***hablar(linea)*** es equivalente a ***hablar: linea() {console.log(...)}***
    * Una propiedad como hablar(linea) en una expresión de objeto.
    * Es un atajo para definir un método. Esta crea una propiedad llamada hablar y le da una función como su valor.

##### El conejo “prototipo” actúa como un contenedor para las propiedades que son compartidas por todos los conejos.

* Un objeto de conejo individual, como el ***conejo asesino***, contiene propiedades que aplican solo a sí mismo
    * en este caso su ***tipo***
    * y deriva propiedades compartidas desde su prototipo ***(hablar)***.


## Clases

El sistema de prototipos en JS se puede interpretar como un enfoque
informal de un concepto orientado a objetos llamado ***clasees***.


* Una clase define la forma de un tipo de objeto
    * es decir, qué métodos y propiedades tiene este.
* Tal objeto es llamado una instancia de la clase.
    * Los prototipos son útiles para definir propiedades en las cuales todas las instancias de una clase compartan el mismo valor como métodos.
    * Las propiedades que difieren por instancia, como la propiedad ***tipo*** en nuestros **conejos**, necesitan almacenarse directamente en los objetos mismos.

Entonces, para crear una instancia de una **clase** dada, se necesita crear un objeto
que derive del ***prototipo adecuado***, pero también debes asegurarte de que, en
sí mismo, este **objeto** tenga las propiedades que las instancias de esta **clase** se
supone que tengan. Esto es lo que una **función constructora** hace.
en resumen una **f constructora** crea una instancia de una **clase**


```javascript
function crearConejo(tipo) {
let conejo = Object.create(conejoPrototipo);
conejo.tipo = tipo;
return conejo;
}

```


**JavaScript** proporciona una manera de hacer que la definición de este tipo
de **funciones** sea más fácil. 

* Si se coloca la palabra clave **new** delante de una llamada de **función**, la **función** será tratada como un constructor. 

Esto significa que un **objeto** con el **prototipo adecuado*** es creado ***automáticamente***, vinculado a **this** en la función, y retornado al final de la **función**.

El ***objeto prototipo*** utilizado al construir **objetos** se encuentra al tomar la
propiedad **prototype** de la función constructora.

```javascript
function Conejo(tipo) {   // ojo el nombre empieza con mayúscula q es la convención para los constructores
this.tipo = tipo;
}
Conejo.prototype.hablar = function(linea) {
console.log(`El conejo ${this.tipo} dice '${linea}'`);
};
let conejoRaro = new Conejo("raro");
```

Los constructores ***(todas las funciones, de hecho)*** automáticamente obtienen
una **propiedad** llamada **prototype**, que por defecto contiene un **objeto simple y vacío**,
que deriva de **Object.prototype**.

* Este **objeto** se puede sobrescribir con un nuevo objeto
* También se pueden agregar **propiedades** al **objeto** ya existente (como lo hace el ejemplo).
* Por convención, los nombres de los constructores tienen la primera letra en mayúscula para que se puedan distinguir fácilmente de otras funciones.

Es importante entender la distinción entre la forma en que un **prototipo** está
asociado con un constructor ***(a través de su propiedad prototype )*** y la forma
en que los **objetos** tienen un **prototipo** ***(que se puede encontrar con Object.getPrototypeOf)***.

##### El prototipo real de un constructor es Function.prototype

ya que los ***constructores*** son **funciones**. Su ***propiedad prototype*** contiene el
**prototipo** utilizado para las ***instancias creadas*** a traves de el.

```javascript
console.log(Object.getPrototypeOf(Conejo) ==
Function.prototype);
// → true
console.log(Object.getPrototypeOf(conejoRaro) ==
Conejo.prototype);
// → true
```

### Notación de clase

##### Entonces, las ***clasees*** en JavaScript son ***funciones constructoras*** con una **propiedad** **prototipo**.

* anteriormente así es como funcionan, y hasta 2015, esa era la manera en como
tenías que escribirlas.

* actualmente hay una notación menos incómoda.

```javascript
class Conejo {
constructor(tipo) {
this.tipo = tipo;
}

hablar(linea) {
console.log(`El conejo ${this.tipo} dice '${linea}'`); //ojo que normalmente se va a necesitar **return**
}
}

let conejoAsesino = new Conejo("asesino"); // clase Conejo esto es una f constructora

let conejoNegro = new Conejo("negro"); // clase Conejo esto es un f constructora

```

La palabra clave **class** (“clase”) comienza una ***declaración de clase***, que nos
permite definir un ***constructor*** y un conjunto de **métodos**, todo en un solo
lugar. ***Cualquier número de métodos se pueden escribir dentro de las llaves de la declaración***.


El **método** llamado **constructor** es tratado de una manera especial:

* Este proporciona la ***función constructora real***, que estará vinculada al nombre ***Conejo***.
* Los otros **métodos** estarán empacados en el prototipo de ese **constructor**.
* Por lo tanto, la declaración de clase anterior es equivalente a la definición de constructor en la sección anterior. Solo que se ve mejor.

* Actualmente las declaraciones de clase solo permiten que los métodos (propiedades que contengan funciones)
puedan ser agregados al prototipo. Esto puede ser algo inconveniente para cuando quieras guardar un valor no-funcional.

* La próxima versión del lenguaje probablemente mejore esto. Por ahora, tú
puedes crear tales propiedades al manipular directamente el prototipo después
de haber definido la clase. ***tal vez esto ya se mejoró***

Al igual que **function** , **class** se puede usar tanto **declaration** 
como **xpression**.

* Cuando se usa como una expresión, no define una vinculación, pero solo produce el constructor como un valor. Tienes permitido omitir el nombre de **clase** en una expresión de clase.

example
```javascript
let objeto = new class { obtenerPalabra() { return "hola"; } };
console.log(objeto.obtenerPalabra());
// → hola
```
> nota:

```javascript
let objeto = new class { obtenerPalabra() { return "hola"; } };
objeto.obtenerPalabra(); //output:'Hola'
console.log(objeto); //output: {} ; no termino de entender esto.
```

