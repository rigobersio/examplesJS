# agregar propiedad a un objeto

El método `assign` de los objetos te permite agregar propiedades a un objeto pasado por parámetro

``` javascript
> var obj = {}

// No hace falta guardar el resultado porque los objetos se pasan por `referencia`
> Object.assign(obj, {nombre:'Emi', apellido:'Chequer'})

> obj.nombre
< 'Emi' 
```


## Otra forma de utilizar este método es para copiar las propiedades de un objeto en otro


```javascript
var obj1 = {
    a: 1,
    b: 2,
}

var obj2 = {
    c: 3,
    d: 4,
}

Object.assign(obj1, obj2);

obj1; // output: {a:1, b:2, c:3, d:4}

```