//arr-o-object.sort((a, b) => a - b) menor a mayor 
//arr-o-object.sort((a, b) => b - a) mayor a menor

//(a - b) <= 0 or (b - a) <= 0 no hay cambio (en otras palabras si el retorno es negativo no hay cambio)

// [2, 1] menor a mayor a - b, 2 - 1 >= 0 (es 1), por lo cual *** hay cambio *** al ser un resultado positivo [1, 2]
// [2, 1] mayor a menor b - a, 1 - 2 <=0 (es -1), por lo cual no hay cambio al ser un resultado negativo [2, 1]

var arr = [0, 6 ,7];
// mayor a menor
arr.sort((a, b) => b - a); //output [7, 6, 0]
// menor a mayor
arr.sort((a, b) => a - b); // output [0, 6, 7]

//con objetos.

var personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 22 }
  ];

  //menor a mayor

  personas.sort((a, b) => a.edad - b.edad); // output [{nombre: "Pedro", edad: 22}, {nombre: "Juan", edad: 25}, {nombre: "María", edad: 30}]
