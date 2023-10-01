# Método Math.pow(x, y)
es para las potencias: x es la base e y el exponente
así por ejemplo: `Math.pow(2,3) === 8 // true`;

# Método Math.floor(x)
aproxima para abajo al entero más próximo
`Math.floor(2.999) === 2`

# Método Math.ceil(x) aproxima para arriba al entero más próximo
Math.ceil(2.4)= ${Math.ceil(2.4)} además comparte las otras caracteristicas con .floor`;

# Método Math.round(x)
* aproxima al entero más cercano pero solo considera el primer decimal, es decir, 3.45 no se aproxima a 3.5 y luego a 4. entonces se evaluara el primer decimal y el resultado final será 3

* aproxima al entero mayor desde el decimal 5, por lo tanto:
	4.5 --> 5 &&  -4.5 --> 4

# Math.random()
`Este retorna un número aleratorio entre [0, 1[ (incluye el '0', pero no el '1').`


## nota
`Al menos para floor ceil y round: estos métodos trucaran la parte decimal de cualquier string númerico si este ocupa como caracter separador una coma (',').`




## Método .toFixed() para complementar Math.round()

<Math.round()>
1. trunca la parte decimal pero aprioxima la parte entera en funcion de la lectura del primer decimal (de 0,45 solo leera 0,4) 
2. No sirve si es que se quiere aproximar una parte decimal

* Por otra parte **.toFixed(x)** si puede aprimar una parte decimal
* el parametro 'x' indicara en número de decimales (por defecto es 0).
* pero tiene un problema similar a **Math.roun()**, solo leera un número por delante del pasado como argumento
* entonces `4.446.toFixed(2) será 4.45, pero 4.446.toFixed(1) será 4.4 porque solo leera hasta 4.44`

* Se podrian implementar varias soluciones como combianar métodos u ocupar de manera recursiva un bucle con **toFixed()**, como sea, ***JS*** no es un lenguaje de calculo.

* **toFixed()** no admite ***string*** númericos