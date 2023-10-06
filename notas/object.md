
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

### Otra perspectiva también de Henry

* ¿Qué es una clase?

* Las <entidades> nacen como la representación de conceptos del mundo real.
    Por ejemplo en una red social podemos encontrar las entidades de usuarios y publicaciones

* Las **clases** son un conjunto de datos que pertenecen a una <entidad-general>. Las **clases** son una plantilla o un modelo que nos permite crear un **objeto** para representar distintas <entidades>.

#### Ejemplo de clase:

* En el mundo existen cientos de miles de animales que comparten características
    La clase animal puede llevar los datos o propiedades: ojos, color, hábitat.
    
    Todos los animales compartirán estas propiedades, pero sus valores serán diferentes. Esta clase animal permite tener un concepto base para representar animales del mundo real, luego se puede crear o modelar con código toda clase de animales

#### Existen 2 formas de declarar una clase:

1. Sintaxis de función constructora
2. Sintaxis expresión de clase

#### Otro ejemplo: 

* En el mundo real existe los autos, luego con una clase se puede crear la plantilla para modelar la entidad auto.

#### Resumen ¿qué es una clase?

* Las clases son una plantilla o un modelo que nos permite crear un objeto para representar distintas entidades

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

* En los aparatados posteriores se entenderá mejor, pero, hay algo más que tiene que hacer **new** para que las **clases** y las **propiedades** ***heredadas*** funciones correctamente:
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

### Object.assign

El método `assign` de los objetos te permite agregar propiedades a un objeto pasado por parámetro

``` javascript
> var obj = {}

// No hace falta guardar el resultado porque los objetos se pasan por `referencia`
> Object.assign(obj, {nombre:'Emi', apellido:'Chequer'})

> obj.nombre
< 'Emi' 
```
// También es util para copiar indirectamente objetos o más bien todas sus propiedades. Las propiedades del segundo parámetro que puede ser una variable o un objeto literal, se copian dentro del primer parámetro que es otro objeto
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

## Otra Perspectiva también de Henry

* El concepto **prototipo** está muy ligado a los métodos que poseen los objetos y las clases

* Los **prototipos** son un <mecanismo> por el cual todos los **objetos** o elementos de JS pueden extender sus **propiedades-métodos**. El proceso en el que los **objetos-globales** (o padres) de JS le extienden **métodos-propiedades** a los datos se denomina **herencia**.

* Ejemplo:
    el objeto **global-Array** le extiende mediante su **prototipo** **métodos** a cualquier variable de tipo **array**

Gracias a los prototipos se puede acceder al constructor de cualquier objeto. Respecto al ejemplo anterior, se puede agregar en el prototipo del objeto global Array un nuevo método que estará disponible para todos los arreglos

* ejemplo de herencia global

```javascript
Array.prototype.metodoSaludar = function () {return console.log('Hola soy una arreglo y mi contenido es: ' + this)}
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
#### recordar esto:

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

El ***método-saludar*** no está directamente dentro del constructor **Persona**, está dentro de **Persona.prototype**. La explicación de más abajo es la de Henry (aun no termino de entender ***__proto__***), pero lo que ocurre es que la cadena de herencia de prototipos o ***Prototype-Chain*** por causa del método **call** se hereda la propiedades de un prototipo, en este caso ***Persona*** pero no las de **Persona.prototype** lo que hace que todo los que se cree con **new** y con el constructor **Alumno** no tenga acceso a **Persona.prototype** donde está almacenado el método **saludar**.

Si se invoca el método **saludar()** en un **Objeto** o <instancia> de **Alumno** pero <Prototype-Chain> primero se buscará **saludar()** en las **propiedades** de la <instancia> propias del su <constructor> o <heredadas>, y luego no ira por **Persona.prototype** sino que irá por **Alumno.prototype** (en este caso no hay nada ahí), y si aún no encuentra nada irá pro el <prototipo-alfa> **Object** y nunca encontrara el <método-saludar>

Antes se vio que una manera se ocupar un **objeto** como <prototipo> es empleando el <método> **Object.create()**

recordatorio:

```javascript
var Persona = { // ojo que inicia con mayúscula para indicar que es una clase o prototipo
    nombre : null,
    edad : 'la que sea',
} 

var lucho = Object.create(Persona);
// lucho ==== {}, pero lucho.nombre === null && lucho.edad === 'la que sea' 

```
Esto tampoco lo termino de entender, pero, en este caso, se crea un **objeto** vacío <lucho> que por medio de herencia puede acceder a las **propiedades** de su **prototipo** <Persona>

en **Alumno.prototype** es <undefined> pero ocupando el **método** **Object.create** se podria hacer el enlace de manera heredada a **Persona.prototype**

```javascript
Alumno.prototype = Object.create(Persona.prototype)

```
***NOTA***

antes de crear una <instancia> de **objeto** que tiene un <constructor> con **métodos-heredados**, es mejor asignar **.prototype** de lo contrarío (así me ha pasado) ha consultar posteriormente por cierto **método** heredado via **prototype** no se podrá acceder. `En otras palabras, antes de declarar un nuevo alumno, se tiene que hacer el enlace de <.prototype>`

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

* Las expresiones de clase pueden participar en composición de otras clases.
* A partir de una clase general con ciertas propiedades o métodos, se puede construir otra clase que herede alguna de esas propiedades o métodos.
* La keyword <extends> permite a la nueva **clase** <extenderse> a partir de una **clase-general**.
* El   método <super> permite heredar las propiedades.
* Mediante este tipo de <sintaxis> se puede acceden heredar directamente los **métodos** de la **clase-general**

* `POR LO QUE ENTIENDO HASTA EL MOMENTO <extends> Y <super>  SE TIENEN QUE OCUPAR JUNTOS. INTENTE CREAR UNA CLASE QUE HEREDARA SOLO LOS MÉTODOS DE UNA CLASE GENERAL PERO NO GUARDARA RELACIÓN CON LAS PROPIEDADES Y SE PRODUJO UN ERROR (NO OCUPAR <super>. No es necesario que **super()** contenga todos los parámetros. También hay que considerar que los **métodos** de las **class-general** normalmente están relacionados a las mismas **propiedades** de esa **class-general**`

* sintaxis:

```javascript
class Trabajador extends Persona {
    constructor (nombre, apellido, puesto, sueldo) {
        super(nombre, apellido);
        this.puesto = puesto;
        this.sueldo = sueldo;
    }
}
```|