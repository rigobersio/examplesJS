# First Class Functions
 JS trata a la funciones como first class: esto implica que la funciones se pueden pasar como argumento a otras funciones, además, pueden ser el retorno de una función, y pueden ser guardadas en variables u otras estructuras de datos.
 Por decirlo en otras palabras, en JS la <function> son iguales a cualquier otro objeto del lenguaje.

# Callback

* Cuando un <function> se pasa como ***argumento*** a otra <function>, esta se llama callback.

* Cuando la <function> principal ejecuta a la <function> pasada como ***argumento*** se produce un proceso llamado **callBack**

## Características

* Los <procesos-callback> aseguran que una **function** no se ejecute antes de que termine una tarea.

### ejemplo para método personal filter

```javascript
Array.prototype.miFilter = function(cb) {
  const resultado = [];
  var i = o;
  while (i < this.length) {
    // q es this?
    //al ejecuta el método esto será ***soyArray.miFilter(cb)***
    //por lo tanto this es el array que está a la izquierda del método

    if (typeof cb === "function" && typeof this[i] === "number") {
        //más difícil ¿q es ***cb***?
        //al invocar el método el argumento para el parámetro **cb** será la definición de una función
        //HASTA ESTE PUNTO NO HAY NADA MUY INTERESANTE LA ***CB** NO SE HA OCUPADO, SOLO SE VERIFICO SU NATURALEZA

      if (cb(this[i])) {

        // MUCHO MÁS COMPLEJO ¿q es ***this*** en este caso?
        // ***cb*** se está invocando por primera vez en este punto
        //cb al ser pasado como definición NO SE INVOCO
        // RECORDAR Q:
        //ahora es cuando se produce el PROCESO CALLBACK ya que CB es invocada <cb()>
        // ACÁ HAY ALGO MÁS, está parte del método es un bucle
        // entonces cb(this(i)) es un retorno especifico y en la proxima vuelta del bucle será otro retorno
        //En este caso, si ese retorno se evalúa como <TRUE>, se ejecutará la siguiente línea.

        resultado.push(this[i]);
      }
    }
  }
  i++;
  return resultado;
  // ¿q es <resultado>?, <resultado> era originalmente un arreglo vacío
  // a este arreglo se le puchearon muchos retornos de una <cb>.
};
```

En el caso anterior lo importante para que funcione bien el <método> el retorno de la <cb>  sea útil para el método

    
## cb (Callback)
* Cuando una <function> se pasa como ***parámetro*** se ocupa la expresión <cb>. example: `function calculosComplejos (num, cb){...}.` entonces <cb> representa una function.
* Cuando se pasa una <function> como ***argumento*** lo que seria una <callback>, esta no se tiene que invocar.
    example `var function calculosSimples () {...}; CalculosComplejos (456, calculosSimples)`
    `seria un error: calculosComplejos (456, calculosSimples())`

* Lo que se esta pasando de manera correcta en la <function> a modo de argumento es la **definición** de una <function> .Si la function se invoca esta se convertirá en lo que la function retorna. Entonces para ***invocar*** una <function> seria `soyFunction()` y para ***argumentar*** una <function> según su **definición** sería `soyFuncion`

* `EN EL CASO DE LA FUNCTION DE CALLBACK (QUE ES EL ARGUMENTO DEL PARÁMETRO DE LA FUNCTION) SIEMPRE SE OCUPARA LA **DEFINICIÓN** DE FUNCTION Y NUNCA UNA LA INVOCACIÓN DE FUNCTION`

##### nota: programación Imperativa y Declarativa

Programación Imperativa es como hacerlo todo con la herramientas básicas
La P. declarativa ocupa más métodos.

