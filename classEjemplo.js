class Libro {
	constructor(autor){
		this.autor = autor;
	};
};

var miLibro = new Libro('Rigoberto');

console.log(miLibro.autor);
console.log();
class Direccion{
	constructor(numero, comuna){
		this.numero = numero;
		this.comuna = comuna;
	}
}
var miDiereccion = new Direccion(146, 'Cauquenes');
console.log(miDiereccion.numero, miDiereccion.comuna);

class LibroSinGetSinSet {
  contructor(autor){
    this._autor = autor;
  }
}

class Libro {
  contructor(autor){
    this._autor = autor;
  }
  get autor(){
    return this._autor:
  }
  set autor(nuevoAutor){
    this._autor = nuevoAutor;// acá se pueden agregar condiciónale
  }
}

const LIBRO = new Libro('anónimo');
console.log(LIBRO.autor);//anónimo

/*
realmente en class no había una propiedad autor, había una propiedad _autor. Se puede acceder a esa propiedad 
con la palabra autor gracias a 'get' (get autor(){ return this._autor}) que retorna automáticamente la propiedad
 privada: de hecho haber escrito la linea de código console.log('lo que sea') antes de return al momento 
 de consultar por el valor del la propiedad autor el resultado habría sido
lo que sea
anónimo

al igual que get, set también actúa como intermediario y permite actualizar el valor de la propiedad
*/
libro.autor = 'Gino Smith';
console.log(libro.autor);// Gino Smith // la idea es que esto ocurra respetando algunas condiciones
