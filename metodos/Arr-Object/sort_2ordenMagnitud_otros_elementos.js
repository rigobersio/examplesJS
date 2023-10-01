// ver sort simple

const datosMixtos = [5, "manzana", 2, "naranja", 8, "banana", 1, 10];
datosMixtos.sort((a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }
  if (typeof a === "number") {
    return -1; // Los números deben ir primero
  }
  if (typeof b === "number") {
    return 1; // Los números deben ir primero
  }
  return 0; // Mantener el orden original para otros tipos de datos
});
console.log(datosMixtos);  // Salida: [1, 2, 5, 8, 10, "manzana", "naranja", "banana"]
