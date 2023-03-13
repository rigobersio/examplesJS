var text1 = `El metodo Math.pow(x, y) es para las potencias así por ejemplo
Math.pow(2,3) donde 2 es la base y 3 el exponente = ${Math.pow(2, 3)}`;

console.log(text1);
console.log();
var text1 = `El metodo Math.floor(x) aproxima para abajo al entero más próximo
Math.floor(2.999) = ${Math.floor(2.999)} Tambien funciona para string numericos
y además hay una curiosidad puede truncar la parte entera de NÚMERO 
(no un string 'string') que en vez de '.', contenga ',' como un elemento separador de la parte decimal.
por ejemplo Math.floor(2,4543654) = ${Math.floor(2,2324324)}`;

console.log(text1);
console.log();
var text1 = `El metodo Math.ceil(x) aproxima para arriba al entero más próximo
Math.ceil(2.4)= ${Math.ceil(2.4)} además comparte las otras caracteristicas con .floor`;

console.log(text1);
console.log();
var text1 = `El metodo Math.round(x) aproxima al entero más cercano pero solo considera el primer decimal,
es decir, 3.45 no se aproxima a 3.5 y luego a 4. entonces se evaluara el primer decimal y el resultado final será
3. por lo demás, tiene las mismas caracteristicas adicionales que los metodos anteriores
Math.round(2.4999)= ${Math.round(2.4999)}`;


console.log(text1);
console.log();

var text1 = `Para solucionar el probleme de que Math.pow(x, y) no aproxima sino que solo truncar
todos los decimales despues del primero se puede ocupar el método .toFixed() que si aproxima y admite
como parametro el numero de decimales que se requiere. ejemplo con 2 decimales:
2.4999.toFixed(2) = ${2.4999.toFixed(2)}
ejemplo sin decimales para 2.4999.toFixed() = ${2.4999.toFixed()}

lo anterior solo soluciona el problema parcialmente ya que .toFixed(n) aproximará solo cuando n!=o ya
que en este caso solo truncara la parte decimal sin aproximar, es decir, seria igual a Math.trunc()`


console.log(text1);
console.log();

var text1 = `El metodo Math.trunc() lo que hace es truncar toda la parte que esté despues de un . o un , (Tambien
aplica para los string númericos, no obstante lo de la coma no aplica si es string {muy raro todo}).
Math.trunc(4.9)= ${Math.trunc(4.9)} // entonces esto sería lo mismo que Math.floor()`;

console.log(text1);
console.log();

var text1 =`****para solucionar por completo el problema de la aproximasimación (3.49 --> 4) se puede ocupar
Math.round(3.49.toFixed(1))= ${Math.round(3.49.toFixed(1))} ****`

console.log(text1);
console.log();

var text1 = `tambien hay que considerar la function parseInt(x, y), donde x sera un numero o un string númericos
e 'y' la base núumerica que tine como defecto la base decimal. Sieve para cambiar de base o pasar string a interger.

además de lo anterior:

.toFixed() no opera con sting mientras que para parseInt(1.6) == parseInt('1.6') == parseInt('1,6')

Match.trunc() puede soportar ',' en vez de '.' pero no un string propiamente tal 
('5,5' no sería soportado, pero 5,5 si Math.trunc(5.5)==Math.trunc(5,5))

y en este caso parseInt() seria todo lo contrario, no soportaría 5,5 pero
parseInt(5.5) == parseInt('5.5')==parseInt('5,5')`

console.log(text1);
console.log();




























