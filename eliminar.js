class Mascota {
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}

var miMascota = new Mascota('Nora', 5);

console.log(miMascota.nombre, miMascota.edad);// Nora, 5
