# Función personal filtrar en el prototipo de Arrays

* recibe una funcion (callback) que devuelve true o false,

* filtra los elementos de un arreglo en base al resultado de esa funcion comparadora, 

* devuelve un nuevo arreglo con los elementos filtrados.

## ejemplo:

```javascript
var productos = [{
  price: 100,
  name: 'tv'
  }, {
  price: 50,
  name: 'phone'
  }, {
  price: 30,
  name: 'lamp'
  }];

  productos.filtrar(function(p) {
  return p.price >= 50;
  }) // output: [{price: 100, name:'tv'}]
```

## Análisis

* `function(p) {return p.price >= 50` es la declaración de un <función-anónima>

* ojo que es una <cb> porque no está siendo invocada, es la definición literal de una función.

* ojo que no ocupa <this>

* **p** es el array <productos> ¿como sabe el método filtrar() que **p** es el array?

* La explicación es que esto tiene que ver obligatoriamente con <this> en la declaración de método <filtrar>

* dentro del del método filtrar seguramente hay un bucle donde se invocará recurrentemente <cd()>

* pero además se invocará con argumento que contenga a <this> para hacer referencia a un elemento del arreglo

* lo lógico es que sea el primer elemento y por medio del bucle se recorran el resto de elementos

* entonces los que estaría haciendo la función es convertir un arr[i] (this[i]) en un eventual <true> o <false>

* finalmente la función madre o método, ocuparía está información para hacer algo, 

* por ejemplo: si es <true> gracias a un <if> lo pusheara en un nuevo arregle y si es false en otro arreglo o bien lo descartara

## desarrollo del método

* Este método actuará sobre arrays filtrando numéricos bajo algún criterio (retorno <true> o <false> de la <cb>)

```javascript
Array.prototype.filtrar = function(cb) {
  var nuevoArr = [];
  var i = 0;
  while(i < this.length) {
    if(typeof cb === 'function' && typeof this[i] === 'number') {
    if (cb(this[i])) {
        nuevoArr.push(this[i]);
        }
    }
    i++;
  }
    return nuevoArr;
};
```

```javascript
var productos = [{
    price: 100,
    name: 'tv'
  }, {
    price: 50,
    name: 'phone'
  }, {
    price: 30,
    name: 'lamp'
  }, {
    price: null,
    name: 'gas'
  }
];

var arrMixto = [1,2,3,4,5,60,90,100, 'árbol', 'hola', 'Henry', {}, []];
```

## no tine precio

* array que contiene objetos de supermercado se filta para encontrar productos sin precio

```javascript
productos.filtrar(function (elemento) {
    return elemento.price === null;
}); // output [] 
```

`La razón es que el método filtrar si this[i] es un número y todos los this[i] son objetos, pero si no existiera está condición output sería [{price: null, name: 'gas'}]`.

## Mayores que 50

```javascript
productos.filtrar(function (elemento) {
    return elemento > 50;
}); // output [60, 90, 100] 
```
