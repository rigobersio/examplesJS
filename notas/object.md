
# funciones constructoras y clases

* una **clase** es un **constructor** y un **constructor** es una **función**.
* las **class** comparten muchas funcionalidades de los **objetos**, pero se expanden en las funcionalidades constructoras de objetos.

### objetivos:
* `prototype`
* _Constructors_ (de Clases)


### Class e instanciación pseudo-clásica

* JS no proporciona un verdadero sistema de clases como Java o C++. Pero hay cierta familiaridad.
* las clases son constructores pero al mismo tiempo son objetos y una clase ***se instancia*** de manera
pseudo clásica usando la keyword **new**.
* retomando: un constructor es una función, pero a la vez es un objeto (todo en JS es un objeto); ocupando **new**
se puede hacer una instancia de esa **función constructora**, la cual por ser **función** puede tomar **argumentos**

### creación del constructor  ***Gato***

* Las ***f constructoras*** por convención inician con **mayúscula**.
* Dicho de otra manera al crear el ***constructor Gato*** se está creando una **clase**.
* La ***f constructora*** tiene 2 cosas extrañas
  * ¿qué hace **this**?
  * No retorna nada
  * esto tiene que ver con instancear con **new**

* **new** hace un gran trabajo detrás de escena. Crea y devuelve un objeto automáticamente.

```js
function Gato(nombre) {
    // El nuevo operador crea un objeto, "this"
    this.nombre = nombre;
    this.maullar = function() {
        return 'Mi nombre es ' + this.nombre + ' ... Meow!'; // esto solo era para el ejemplo
        // las f contruc q trabajan junto al operador <new> no llevan <return>
    }
    // Devuelve el objeto "this"
}

const sam = new Gato('Sam');
const kitty = new Gato('Kitty');
console.log(sam.maullar()); // 'Mi nombre es Sam ... Meow!'
console.log(kitty.maullar()); // 'Mi nombre es Kitty ... Meow!'

```

### valores por defecto de la f constructora
* esto es en el caso de que no se ingrese un argumento para el parámetro

```js
function Gato(nombre, color) {
    this.nombre = nombre || 'Sin Nombre';
    this.color = color || 'Sin Color';
    this.maullar = function() {
        return 'Mi nombre es ' + this.nombre + ' ... Meow!';
    }
```


### ***this*** en las clases

La palabra clave `this` puede comenzar a volverse muy confusa cuando comenzamos a usarla en clases. En el último ejemplo lo usamos en el método de los maullidos. Una buena regla general si no está seguro de a qué se refiere `this`, es observar dónde se llama el método y el objeto a la izquierda del 'punto'. Ese es el objeto al que se refiere `this`.

### ¿cómo funciona <new>?

* **new** crea un objeto vacío

* Invoca la función constructora con los argumentos utilizados.

* Luego bindea (ocupa el método .bind()) con el objeto vacío que creo antes // suena baind

* otra vez:

1. entonces crea objeto {}
2. suponiendo de la f const. es: function Auto(marca, color, año) {this.marca = marca; this.color = color; this.año = año;}
  2,1. invoca la f const  Auto('VW', 'azul', 1996).bind(objeto)
  2,2. bind controla el valor de **this**. el **this** de la **f Auto** será **objeto** (el objeto vacío)
  2,3 ***recordando***: hay una variable **objeto** {} lo que se estaría diciendo es que objeto.marca = marca
  2,4 esto funciona con ***bracket notation*** así que al ingresar los argumentos de la nueva instancia hay que ocupar comillas para los ***str***
3. finalmente retornaría el objeto.

#### conexión entre <new> y <.prototype>

* En los aparatados posteriores se entenderá mejor, pero, algo algo más que tiene que hacer **new** para que las **clases** y las **propiedades** ***heredadas*** funciones correctamente:
    1. crea obj ({})
    2. retorna NombreDeClase(parametro).bind(obj)
    3. el obj.__proto__ = retorno anterior // en JS nunca hay que tocar nada que tenga 2 guiones bajos
* de momento no lo termino de entender porque no entiendo bien el ***bindeo***
___


## Del objeto global Object

JS es un lenguaje de prototipos. Se suele decir que todo en JS es un ***objeto**, bueno, cada cosa creada en JS proviene de un prototipo, por ejemplo:
    si se crea mediante la **clase** Bruja, el **objeto** brujaParamo y luego se hace una consulta de ***brujaParamo*** se indicara que procede o está relacionado a la **clase** <que-es-un-objeto> ***bruja***, ahora bien, esa **clase** ***Bruja*** o un objeto literal también tienen un prototipo, y ese ***prototipo*** es el **objeto** ***Object*** de JS. El prototipo de un **array** es el **objeto** ***Array***, y de un **string** es el objeto ***String***. No obstante, el **objeto** <alfa> es **Object**.

Cuando existen muchos objetos similares, hay que considerar que cada **objeto** ocupara ***memoria*** y en general ***recursos**. Lo optimo por muchos motivos es crear una **prototipo** o una **clase** para todos esos objetos similares, pero además, si esos **objetos** tiene muchos **métodos**, lo optimo sería agregar los métodos compartidos al <prototipo-del-prototipo>.La idea es que estas **propiedades-(métodos)** funcionen de manera heredada. Una arreglo vacío ([]), no tiene **métodos**, sin embargo, es porsible utilizar en ese arreglo el método **.push()** ya que es heredado del prototipo **Array** que si tiene ese método, pero también hay que considerar que esos **métodos-heredados** agregados al **prototipo** de la **clase-constructora** no deben estar disponibles para otra **clase**. Para este proposito existe la **propiedad** en el <prototipo-madre> llamada **.prototype**
    si existe la clase **Bruja** y se requiere que todos los objetos ***brujas*** tengan el **método** ***saludar*** se puede hacer los siguiente: Bruja.prototype.saludar = function()[return 'Soy la bruja ' + this.nombre']


### ***Object.prototype***

Como se dijo antes, la creación de funciones es costosa (refiriéndonos a la capacidad de memoria de una computadora) y cada vez que creamos un nuevo objeto de clase con métodos, estamos recreando esos métodos en la memoria. Puede imaginar que si estamos creando miles de objetos de clase a partir de una clase con docenas de métodos, la memoria se acumulará rápidamente (20.000 - 40.000 métodos). Las clases tienen una forma única de establecer un método una vez y dar acceso a cada objeto de esa clase a esos métodos. Esto se llama el `prototype`. Cada clase tiene una propiedad *prototype*, que luego podemos establecer en métodos:

```javascript
function Usuario(nombre, github) {
    this.nombre = nombre;
    this.github = github;
}

Usuario.prototype.introduccion = function(){
    return 'Mi nombre es ' + this.nombre + ', mi usuario de Github es ' + this.github + '.';
}

let juan = new Usuario('Juan', 'juan.perez');
let antonio = new Usuario('Antonio', 'atralice');

console.log(juan.introduccion()); // Mi nombre es Juan, mi usuario de Github es juan.perez.
console.log(antonio.introduccion()); // Mi nombre es Antonio, mi usuario de Github es atralice.

```

Los métodos de `prototype` tienen acceso a la palabra clave `this` y, al igual que antes, siempre apuntará al objeto (a la izquierda del punto) que lo está llamando.

* Aparte de la optimización de recursos hay otra ventaja: al editar una **propiedad** o **método** que se ***herede*** se edita para todos los **objetos** creados con esa **clase**, luego, si se necesita que el **método o propiedad** tenga característica especificas en un **objeto-X**, está se puede declarar directamente en el **objeto-X** ya que el ***interprete*** primero buscará la **propiedad o método** dentro del **objeto** y luego la buscará en su **prototipo**

### Object.create

El método `create` de los objetos nos permite crear un nuevo objeto a partir de un prototype especificado.

``` javascript
// creo un objecto con un objeto vacío como proto
> var obj = Object.create({})

> obj
< Object {}

// creo un objeto a partir de un proto de Objeto
> var obj = Object.create(Object.prototype)
// que es lo mismo que crear un objeto vacio literal
> var obj = {}
```

* Este forma es un poco más ***torpe** porque crea un objeto vacío a partir de otro **objeto** que ocupara como **prototipo**. Lo que ocurre es que a pesar de que el **objeto** estará vacío, se podrá acceder a las **propiedades** del **objeto** original ocupado como **prototipo** ya que heredará sus **propiedades**

```javascript
var Persona = { // ojo que inicia con mayúscula para indicar que es una clase o prototipo
    nombre : null,
    edad : 'la que sea',
} 

var lucho = Object.create(Persona);
// lucho ==== {}, pero lucho.nombre === null && lucho.edad === 'la que sea' 

```

### Object.assign // esto aun no lo veo

El método `assign` de los objetos te permite agregar propiedades a un objeto pasado por parámetro

``` javascript
> var obj = {}

// No hace falta guardar el resultado porque los objetos se pasan por `referencia`
> Object.assign(obj, {nombre:'Emi', apellido:'Chequer'})

> obj.nombre
< 'Emi' 
```

___


## Herencia Clásica

En el paradigma de *Programación Orientada a Objetos* un tema muy importante es la *Herencia y Polimorfismo* y de las clases (los vamos a llamar constructores por ahora).

Cuando hacemos referencia a **Herencia** nos referimos a la capacidad de un constructor de *heredar* propiedades y métodos de otro constructor, así como un Gato es Mamífero antes que Gato, y hereda sus 'propiedades' (nace, se reproduce y muere).

Cuando hablamos de **Polimorfismo** nos referimos a la capacidad de que objetos distintos puedan responder a un llamado igual de acuerdo a su propia naturaleza.

## Herencia en JavaScript

En JS a diferencia de la herencia clásica nos manejamos con prototipos, que van a tomar los métodos pasados por sus 'padres' mediante la `Prototype Chain`.

Cuando generamos un arreglo nuevo podemos acceder a métodos como `map` o `slice` gracias a que los heredamos del Objeto `Array` que esta vinculado en la propiedad `__proto__` y es el siguiente en el `Prototype Chain`.

Nosotros también podemos generar nuestros propios constructores que de los cuales heredar. Creemos un constructor de el cual pueda haber variantes.

``` javascript
> function Persona(nombre,apellido,ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
  }

> Persona.prototype.saludar = function() {
    console.log('Soy '+this.nombre+' de '+this.ciudad);
  }

> var Emi = new Persona('Emi', 'Chequer', 'Buenos Aires');

> Emi.saludar()
< 'Soy Emi de Buenos Aires'
```

Ahora todo Alumno de Henry antes de Alumno es una Persona, asique podríamos decir que un Alumno hereda las propiedades de ser Persona.

``` javascript
> function Alumno(nombre,apellido,ciudad,curso) {
    // podría copiar las mismas propiedades de Persona acá adentro
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
    this.curso = curso
  }
```

### Constructores Anidados

Pero en este caso estaríamos repitiendo código, y si en un futuro quisiera cambiar una propiedad tendría que hacerlo en ambos constructores.
Descartemos esta opción.

``` javascript
// lo que nosotros queremos es poder reutilizar las propiedades de persona,
> function Alumno(nombre, apellido, ciudad, curso) {
    // usemos nuestro constructor Persona dentro del de Alumno
    Persona.call(this, nombre, apellido, ciudad);
    // vamos a necesitar el call porque queremos que las propiedades de persona, queden en bajo el objeto que va a devolver Alumno, y no uno nuevo del constructor Persona.
    // luego le paso los valores que quiero que reciba el constructor de Alumno
    
    // finalmente le agrego los puntos propios de Alumno
    this.curso = curso;
    this.empresa = 'Soy Henry';
  }

> var toni = new Alumno('Toni', 'Tralice', 'Tucuman', 'Web Full Stack')

// Ahora si tenemos nuestra instancia creada a partir de ambos constructores
> toni.curso
< Web Full Stack

> toni.apellido
< Tralice

> toni.saludar()
< Uncaught TypeError: toni.saludar is not a 'function'
// que paso?
```

Como podemos ver los métodos de *Personas* no fueron pasados a nuestros *Alumnos*. Veamos un poco el porqué.

El constructor del `__proto__` esta ligado a Alumno y luego al `Object Object` de JS. Pero el método `saludar` esta en el objeto `prototype` de Personas... , y esta perfecto, así es como debería funcionar, las instancias acceden al `__proto__` que fue vinculado por el constructor para ver que métodos tienen. Nuestro problema es que al llamar a Persona con `call` en vez de con el método `new` no se esta haciendo ese vinculo en el que `Persona.prototype` se mete en nuestro `Prototype Chain`, y entonces las instancias de Alumno no tienen acceso a los métodos de Persona

Vamos a solucionar ese problema agregando al prototipo los métodos de Persona, para esto vamos a usar el método `Object.create`.

``` javascript
// usamos `Object.create` porque este guardaba el argumento pasado como `__proto__` del objeto a retornar
> Alumno.prototype = Object.create(Persona.prototype)

// si recuerdan el objeto prototype siempre tenia una propiedad constructor que hacia referencia a la función en si, con la asignación que hicimos arriba lo pisamos, por lo que deberíamos volver a agregarlo.
> Alumno.prototype.constructor = Alumno

> var Franco = new Alumno('Franco','Etcheverri','Montevideo','Bootcamp')

> Franco.saludar()
< 'Soy Franco de Montevideo'
```

___


## keyword class

* Esta es otra forma de crear prototipos correspondiente a ***ES6***, que pretende copiar la sintaxis de otros lenguajes como Java orientado a **Objetos**. JS más bien es orientado a **Prototipos**
* sintaxis:

```javascript
class Persona {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
saludar () {
    return 'Mi nombre es ' + this.nombre;
}
}

var lucho = new Persona ('Lucho', 'Zanahoria');

```

## Keyword extends más método <super>

* Esto es un profundización de lo anterior. el método **super** permite heredar cosas de otro prototipo.
* Es como anidar un prototipo ????

* sintaxis:

```javascript
class Trabajador extends Persona {
    constructor (nombre, apellido, puesto, sueldo) {
        super(nombre, apellido);
        this.puesto = puesto;
        this.sueldo = sueldo;
    }
}
```