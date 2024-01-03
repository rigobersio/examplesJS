let soyObject = {
  nombre: "John Doe",
  edad: 30,
  profesion: "programador"
}

console.log(typeof soyOject);

let soyJSON = JSON.stringify(soyObject)
console.log(`hola soy el archivo soyJOSON: ${soyJSON}`)
console.log(typeof soyJSON)

let soyObjet2 = JSON.parse(soyJSON);
console.log(soyObjet2);
console.log(typeof soyObjet2);
