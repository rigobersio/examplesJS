// 1) Objeto de persona: Crea un objeto persona con propiedades como nombre, edad y ocupación.

var 1001 = {
    nombre: 'Victor Manuel',
    edad: 88,
    ocupación: 'Domador serpientes',
}

// 2) Método en el objeto: Agrega un método saludar al objeto persona que imprima un saludo personalizado.

var persona101 = {
    nombre: 'Victor Manuel',
    edad: 88,
    ocupación: 'Domador serpientes',
    saludar: function () { return console.log(`Hola ${this.nombre}.`); },
}

// 3) Cálculo del área: Crea un objeto rectangulo con propiedades ancho y alto.
// Agrega un método calcularArea que retorne el área del rectángulo.

var rectangulo = {
    ancho: 33,
    alto: 44,
    area: function () { return this.ancho * this.alto },
}

// 4) Lista de objetos: Crea una lista de objetos que representen diferentes
// productos con propiedades como nombre, precio y cantidad en stock.

function listaObjetos(obj, nombre, precio, cantidadDisponible) {
    var obj = {
        nombre,
        precio,
        cantidadDisponible,
    }
    return obj;
}


// 5) Costo total de la lista: Utiliza el método reduce para calcular el total de la lista
// de productos comprados.

function listaObjetos(obj, nombre, precio, cantidadDisponible) {
    var obj = {
        nombre,
        precio,
        cantidadDisponible,
    }
    return obj;
}

var arrObjetos = [listaObjetos('obj1', 'pan', 2500, undefined), listaObjetos('obj2', 'pate', 3500, undefined), listaObjetos('obj3', 'platano', 1000, undefined)];

var costoTotal = arrObjetos.reduce(function (acumulador, objeto) { return acumulador + objeto.precio; }, 0);



//6) Problema: "Descuento total de la lista" Dado un array de productos con propiedades 
//nombre, precio y descuento, utiliza el método reduce para calcular el descuento
// total aplicado a todos los productos.

function listaObjetos(obj, nombre, precio, descuento) {
    var obj = {
        nombre,
        precio,
        descuento,
    }
    return obj;
}

var arrObjetosConDescuento = [
    listaObjetos('PastaZapato', 'pastaPepe', 550, 50),
    listaObjetos('pañuelo', 'pañuelosSuper', 230, 10),
    listaObjetos('huevosduros', 'docenaHuevos', 3000, 5),
    listaObjetos('detergente', 'detergenteExtra', 5899, 10)
];

function totaldescuento(arregloProductos) {
    var total = arregloProductos.reduce(function (acumulador, objeto) {
        return acumulador + objeto.precio;
    }, 0);

    var totalConDescuento = arregloProductos.reduce(function (acumulador, objeto) {
        return acumulador + objeto.precio * (objeto.descuento / 100);
    }, 0);

    return total - totalConDescuento;
}

totaldescuento(arrObjetosConDescuento);



/*
Contador de propiedades: Crea una función que tome un objeto como argumento y cuente cuántas propiedades tiene.

Contador de caracteres: Crea un objeto cadena con una propiedad texto. Agrega un método que cuente la cantidad de caracteres en la cadena.

Lista de tareas: Crea un objeto listaTareas con métodos para agregar, eliminar y marcar tareas como completadas.

Ordenar objeto por propiedad: Crea una función que tome una lista de objetos y ordene los objetos por una propiedad específica.

Calculadora: Crea un objeto calculadora con métodos para sumar, restar, multiplicar y dividir.

Herencia de objetos: Crea un objeto animal con propiedades y métodos generales. Luego, crea un objeto perro que herede de animal y tenga propiedades y métodos específicos de un perro.

Validación de formulario: Crea un objeto formulario que valide los campos de un formulario y muestre mensajes de error.

Contador de palabras repetidas: Crea una función que tome un texto como argumento y cuente la cantidad de veces que se repite cada palabra.

Convertidor de monedas: Crea un objeto conversorMonedas con métodos para convertir entre diferentes monedas.

Juego de adivinanzas: Crea un objeto juego que genere un número aleatorio y permita al usuario adivinarlo, mostrando pistas según la aproximación.




Calculadora de descuentos: Crea un objeto descuentos que tenga métodos para calcular el precio con descuento y el ahorro basado en un porcentaje de descuento aplicado a un precio base.

Validación de contraseña: Crea un objeto validador con un método que verifique si una contraseña cumple con ciertos criterios de seguridad, como longitud y caracteres especiales.

Agenda de contactos: Crea un objeto agenda que permita agregar, eliminar y buscar contactos por nombre y número de teléfono.

Calculadora de IMC: Crea un objeto calculadoraIMC que tome el peso y la altura como argumentos y calcule el índice de masa corporal (IMC) de una persona.

Generador de contraseñas: Crea un objeto generadorContraseñas que genere contraseñas aleatorias con diferentes niveles de complejidad.

Manejo de empleados: Crea un objeto empresa con métodos para agregar y despedir empleados, y calcular el promedio de salarios.

Librería de libros: Crea un objeto librería que permita agregar y buscar libros por título y autor.

Registro de ventas: Crea un objeto registroVentas con métodos para agregar y consultar ventas por fecha y monto.

Juego de cartas: Crea un objeto juegoCartas que represente un juego de cartas y tenga métodos para barajar, repartir y jugar.

Cola de tareas: Crea un objeto colaTareas que permita agregar tareas y ejecutarlas en orden.

Cálculo de promedio: Crea un objeto calculoPromedio que tome un array de números como argumento y calcule el promedio de los elementos.

Validación de formulario avanzado: Mejora el objeto formulario del problema anterior para realizar una validación más avanzada de los campos del formulario.

Lista de compras: Crea un objeto listaCompras que permita agregar y eliminar productos de una lista de compras.

Buscador de películas: Crea un objeto buscadorPeliculas que permita buscar películas por título, género y año.

Calculadora de propina: Crea un objeto calculadoraPropina que calcule la propina a partir del monto de la cuenta y el porcentaje de propina deseado.