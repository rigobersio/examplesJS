//  es vocal???
//
function dato(x) {
  return /[a,e,i,o,u,á,é,í,ó,ú]/i.test(x);
}

console.log(dato('??')); // false
console.log(dato('a')); // true 
console.log(dato('Ú')); // true
console.log(dato('x')); // false
console.log(dato('é')); //true 
