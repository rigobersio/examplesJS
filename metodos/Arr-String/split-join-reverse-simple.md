# revertir el orden de los caracteres 'hola mundo' sin considerar el espacio

```javascript
var str = 'hola mundo';
```

## Para eliminar el espcaio replace

```javascript
var strSinEspacio = str.replace(' ', ''); // output: 'holamundo'
```
## Para pasar a Array caracter x caracter

```javascript
var arrStr = strSinEspacio.split(''); // output: ['h','o',...'d','o']
```
### posibles errores:

1.
```javascript
'palabra'.split(); // output: ['palabra'] OJO AL ARGUMENTO
```
2.
```javascript
'hola mundo'.split(' '); // output: ['hola', 'mundo'] OJO EL CARÁCTER DE DIVISION ES UN ESPACIO
```
## reverse a array

```javascript
var reverseArrStr =  arrStr.reverse(); // output: [ 'o', 'd', 'n', 'u', 'm', 'a','l', 'o', 'h'];
```
## finalmente pasar a str

```javascript
var nuevoStrReverse = reverseArrStr.join(''); // output: 'odnumaloh'
```
### posibles errors:

1.
```javascript
var nuevoStrReverse = reverseArrStr.join(); // output: 'o,d,n,u,m,a,l,o,h' OJO A LAS COMILLAS.
```
2.
```javascript
var nuevoStrReverse = reverseArrStr.join(' '); // output: 'o d n u m a l o h' OJO AL ESPACIO ENTRE LAS COMILLAS.
```

