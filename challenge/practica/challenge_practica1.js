/*
1. Deberás escribir una función que recibe como argumento dos arreglos 
de actividades (strings) y retorna un nuevo arreglo con las actividades 
(strings) que tengan en común ambos arreglos (personas)
*/

var lucho = ['nadar', 'cantar', 'aplaudir'];
var maria = ['correr', 'barrer', 'cantar'];

function actiEnComun(persona1, persona2) {
    var i = 0;
    var arrSalida = [];
    while (i < persona1.length) {
        var j = 0;
        while (j < persona2.length) {
            if (persona1[i] === persona2[j]) {
                arrSalida.unshift(persona1[i]);
            }
            j++
        }
        i++;
    };
    return arrSalida;
}

console.log('1. ' + actiEnComun(lucho, maria));

/*
2. Escribe una función que permita dividir un arreglo de enteros en varias partes de manera 
que cada parte tenga, como máximo, una cantidad definida de elementos recibida por parámetro).

example partir([], maximaCantidadDeElementos)
*/

var arrEnteros = [1, 2, 3, 4, 5];

function dividirArr(arr, cantidad) {
    var arrSalida = [];
    var arrCola = [];
    var arrLote = [];

    while (arr.length > 0) {
        if (arr.length >= cantidad) {
            if (arrLote.length < cantidad) {
                var num = arr.shift();
                arrLote.unshift(num);
            }
            if (arrLote.length === cantidad) {
                arrSalida.push(arrLote)
                arrLote = [];
            }

        } else {
            if (arr.length > 0) {
                var num = arr.shift();
                arrCola.unshift(num);
            };
            if (arr.length === 0) {
                arrSalida.push(arrCola)
            }
        }
    }
    return arrSalida;
}

console.log(dividirArr(arrEnteros, 2));

/*
3. clase Libro
Para este ejercicio, deberás definir una clase
**Libro** con sus propiedades y métodos.

Las propiedades de la clase Libro son:

* titulo
* autor
* traducciones ##(por un ejemplo se extiende que este
es un array de objetos)##

el constructor de la clase recibe esos tres datos
por parámetro.
Los métodos de la clase Libro son:

* getTitulo: permite obtener el titulo del libro
* getAutor: permite obtener el autor del libro
* getTraducciones: retorna un arreglo con todos
los idiomas de las traducciones.

**difícil**

addTraducciones: a partir de los parámetros
recibidos, agrega un objeto al arreglo de traducciones
*/

class Libro {
    constructor(titulo = null, autor = null, traducciones = []) {
        this.titulo = titulo;
        this.autor = autor;
        this.traducciones = traducciones;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getTraducciones() {
        return this.traducciones;
    }
    addTraducciones(nuevaTraduccion) {
        return this.traducciones.push(nuevaTraduccion);
    }
}

var pinocho = new Libro('Pinocho', 'Lucho',);
console.log(pinocho);
pinocho.addTraducciones({ español: 'Español', traductor: 'Pedro', });
console.log(pinocho);

var chupaElPerro = new Libro('Chupa el perro', 'El Perro', [{ perro: 'Perro', traductor: 'El perro', }, { espanhol: 'Español', traductor: 'Pedro' }]);
console.log(chupaElPerro);
chupaElPerro.addTraducciones({ ingles: 'Ingles', autor: 'El gringo', });
console.log(chupaElPerro);

/*
4. Deberás escribir una función que, a partir de un
objeto que representa a una persona, retorne un
mensaje de bienvenida a la misma.

* si el **objeto** tiene las propiedades:
a. nombre
b. apellido
c. invitado con el valor 'true'

EL retorno tiene que ser: NombreApellido, un gusto
tenerlo nuevamente! Bienvenido

* si el objeto tiene las propiedades:

a. apellido
b. invitado (true) 

el retorno tiene que ser:
Bienvenido Sr. Apellido

* si el objeto tiene las propiedades:

a. nombre
b. invitado (true)

el retorno tiene que ser:
Hola NOMBRE, tu mesa está lista

* en el caso de que la propiedad 

a. invitado sea false o no la tenga

el retorno tiene que ser:
Disculpe señor, no está invitado a la fiesta



lo siguiente fue para practicar pero no sera util para todas las evaluaciones 

class Personas {
    constructor (nombre, apellido, invitado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.invitado = invitado;
    }
}

var lucho = new Personas ('Luis', 'Chandía', true );
console.log(lucho);
var lucha = new Personas ('Luisa', null , true );
console.log(lucha);
var petra = new Personas ('Petra', 'Chandía', false );
console.log(petra);
var pietro = new Personas ('Pietro', 'Chandía');
console.log(pietro);
var sanchez = new Personas ( null, 'Sanchez', ,true );
console.log(sanchez);

*/


var luis = { nombre: 'Luis', apellido: 'Chandía', invitado: true };
var luisa = { nombre: 'Luisa', invitado: true };
var petra = { nombre: 'Petra', apellido: 'Chandía', invitado: false };
var pietro = { nombre: 'Pietro', apellido: 'Chandía' };
var sanchez = { nombre: 'Sanchez', invitado: true };

function mensaje(obj) {
    if (obj.hasOwnProperty('invitado') === true && obj.invitado === true) {
        if (obj.hasOwnProperty('nombre') === true && obj.hasOwnProperty('apellido') === true) {
            return obj.nombre + ' ' + obj.apellido + ', un gusto tenerlo nuevamente! Bienvenido';
        } else if (obj.hasOwnProperty('apellido') === true) {
            return `Bienvenido Sr. ${obj.apellido}`;
        } else if (obj.hasOwnProperty('nombre')) {
            return `Hola ${obj.nombre}, tu mesa está lista`
        }
    } else {
        return 'Disculpe señor, no está invitado a la fiesta';
    }
}

console.log(mensaje(luis));
console.log(mensaje(luisa));
console.log(mensaje(petra));
console.log(mensaje(pietro));
console.log(mensaje(sanchez));

/*
 5. Un ingrediente de cierta comida está en mal estado,
 y hay que sacarlos de la receta junto a los que están
 a su lado.
 
 Tu tarea es escribir un función que va a recibir un **menú**,
 una **comida** y **el ingrediente en cuestión**, y si el ingrediente está en la comida debes retornar un arreglo
 con el ingrediente y los dos elementos más cercanos a él
 (un índice de diferencia para atrás o para adelante).
 
 Si no encuentra el ingrediente, debe devolver: 
 'El menú está perfecto'.
 
 EL menu del día es un objeto y las propiedades son los platos. los valores de la propiedades un array de ingredientes
 
 ingredienteEnMalEstado(objetoMenuDelDia, unaComida, elIngrediente)
 
 */

var menuLunes = {
    ensaladaCesar: ['Lechuga', 'Pollo', 'Salsa César'],
    pizzaMargarita: ['Mozzarella', 'Tomate', 'Albahaca'],
    sushi: ['Arroz', 'Pescado', 'Alga']
};

var menuMartes = {
    pastaCarbonara: ['Pasta', 'Huevo', 'Bacon', 'Queso Parmesano'],
    fileteTernera: ['Ternera', 'Patatas', 'Verduras', 'Salsa de Champiñones'],
    ensaladaFrutas: ['Manzana', 'Plátano', 'Fresa', 'Nueces', 'Vinagreta']
};

var menuMiercoles = {
    hamburguesa: ['Carne', 'Pan', 'Lechuga', 'Tomate', 'Cebolla', 'Queso Cheddar'],
    paella: ['Arroz', 'Pollo', 'Mariscos', 'Pimiento', 'Judía Verde', 'Azafrán'],
    gazpacho: ['Tomate', 'Pepino', 'Pimiento', 'Aceite de Oliva', 'Vinagre']
};

var menuJueves = {
    tacos: ['Carne', 'Tortillas', 'Salsa', 'Lechuga', 'Tomate', 'Cebolla'],
    lasagna: ['Carne', 'Pasta', 'Salsa Bechamel', 'Queso Ricotta', 'Queso Mozarella'],
    ceviche: ['Pescado', 'Cebolla', 'Limón', 'Cilantro', 'Aji Amarillo']
};

var menuViernes = {
    burritos: ['Carne', 'Frijoles', 'Guacamole', 'Arroz', 'Salsa', 'Queso'],
    sushi: ['Arroz', 'Pescado', 'Alga', 'Aguacate', 'Pepino', 'Salsa de Soja'],
    risotto: ['Arroz', 'Setas', 'Parmesano', 'Vino Blanco', 'Caldo de Pollo']
};


function ingredienteMalo(menuDelDia, plato, ingrediente) { /* asumiré que todos los platos tiene al menos 3 ingredientes*/
    if (!menuDelDia.hasOwnProperty(plato)) {
        return 'El menú está perfecto';
    }
    var index = menuDelDia[plato].indexOf(ingrediente);
    // y si el ingrediente está en la comida debes retornar un arreglo
    //con el ingrediente y los dos elementos más cercanos a él
    // (un índice de diferencia para atrás o para adelante).
    if (index > 0 && index < menuDelDia[plato].length - 1) {
        return [menuDelDia[plato][index - 1], ingrediente, menuDelDia[plato][index + 1]];
    } else if (index === 0) {
        return [ingrediente, menuDelDia[plato][1], menuDelDia[plato][2]];
    } else if (index === menuDelDia[plato].length - 1) {
        return [menuDelDia[plato][menuDelDia[plato].length - 3], menuDelDia[plato][menuDelDia[plato].length - 2], ingrediente];
    } else if (index === -1 || !menuDelDia.hasOwnProperty(plato)) {
        return 'El menú está perfecto';
    }
}

console.log(ingredienteMalo(menuLunes, 'ensaladaCesar', 'Zanahoria'));
console.log(ingredienteMalo(menuMartes, 'fileteTernera', 'Ternera'));
console.log(ingredienteMalo(menuMiercoles, 'fileteTernera', 'Ternera'));
console.log(ingredienteMalo(menuMiercoles, 'paella', 'Pollo'));
console.log(ingredienteMalo(menuJueves, 'tacos', 'Lechuga'));
console.log(ingredienteMalo(menuViernes, 'burritos', 'Queso'));

/*
6. Existe un procedimiento matemático para números en base binaria, pero para este ejercicio, 
no nos vamos a preocupar de la matemática. Lo que debes lograr es una función que genere 
**número-binarios** <como strings compuestos de ceros y unos> de una longitud determinada 
recibida por parámetro
example:
fakeBinary(5)
debería retornar '01101', es decir un número binario de 5 dígitos de longitud.

* la función fakeBinary debe retornar un string de la longitud especificada en el parámetro **size**

condiciones especiales:

a. el retorno parte por 1.
b. el retorno alterna 0 y 1 (uno cada vez).
c. 
*/

function fakeBinary(size) {
    var respuesta;
    if (size > 0) {
        respuesta = '';
        if (size === 1) {
            return '1';
        } else {
            respuesta = '1';
        }
        var i = size - 1;
        while (i > 0) {
            if (respuesta[respuesta.length - 1] === '0') {
                respuesta += '1';
            } else {
                respuesta += '0';
            }
            i--;
        }
        return respuesta;
    }
}

fakeBinary(7);

/*
7. Buscando a Wally
Como en los clasicos libros de infancia, hoy necesitamos
encontrar a Wally entre muchos otros personajes. Deberás
escribir una función que encuentre el string **'Wally'**dentro
de un arreglo, y retorne:

**'He encontrado a Wally en la posición <X>'**

X es el índice
buscadorWally(arreglo);

*/

var grupo1 = [
    'Wally',
    'Woof',
    'Wizard Whitebeard',
    'Odlaw',
    'Wenda',
];

var grupo2 = [
    'Cachete',
    'Feliz',
    'Triste',
    'Enojado',
    'Wally'
];

var grupo3 = [
    'Wally',
    'Oscar',
    'Olga',
    'Oswaldo',
    'Wanda'
];

function buscadorWally(arr) {
    var index = arr.indexOf('Wally');
    return `He encontrado a Wally en la posición ${index}`;
};

console.log(buscadorWally(grupo1));
console.log(buscadorWally(grupo2));
console.log(buscadorWally(grupo3));


/*
8. Busca y destruye

Escribe una función que al recibir un arreglo de número y un
número (son 2 parametros distintos), elimine del arreglo
todos los elementos que sean iguales a ese número.

bucaDestruye([...], num);
el retorno debe ser el núevo arreglo

*/

var arrNum = [1, 2, 3, 4, 6, 643, 32, 2, 345, 78, 4, 3, 6, 9, 4, 0, 3, 2, 2, 3, 5, 7, 0, 5];

function buscaDestruye(arr, num) {
    var i = 0;
    var nuevoArr = [];
    while (i < arr.length) {
        if (arr[i] !== num)
            nuevoArr.push(arr[i]);
        i++;
    }
    return nuevoArr;
}

console.log(buscaDestruye(arrNum, 3));

function buscaDestruyeAlternativa (arr, num) {
    return arr.filter(function(elemento) {return elemento !== num; });
}

console.log(buscaDestruyeAlternativa(arrNum, 3));

