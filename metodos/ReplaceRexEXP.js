// se solicitara una frase que puede contener tildes, ñ, espacios, signos de puntuación, exclamación o interrogación y otro tipo de caracteres, para dejar como resultado un string que contenga solo caracteres alfanumericos (la ñ se cambiara por n.
// se ocupara el método replace( y la tecnica RexExp /[\W]/g or /[A-Za-z1-9]/g)

let texto = 'Los niños';
let texto2 = texto.replace(/[Wñ]/g, '');
console.log(texto2);

// esta situación es un tanto particular debido a que al aplicar la tecnica RexExp se eliminara 
//vocales  con tilde, por lo cual, previo a la eliminacíon del caracter
// por lo anterior es necesario hacer varios pasos previos si por ejemplo se quiere evaluar un palindromo

/*
1. solicitar un texto y advertir que este texto tiene que tener algunas condiciones particulares: 'La frase a evaluar solo admite tildes para los acentos agudos "´", es decir, el programa removerá del análisis una vocal con tilde grave (ejemplo:  à), y esta no formará parte del análisis'. 

2. pasar todos los caracteres en mayusculaa o a minusculas.

3. reemplazar vocales con tilde por vocales sin tilde y la ñ por n. Para esto ocupar la siguiente función

*/

function delateTilde(string){
    let respuesta;
    respuesta = string.replace(/[\á]/g, 'a');
    respuesta = respuesta.replace(/[\é]/g, 'e');
    respuesta = respuesta.replace(/[\í]/g, 'i');
    respuesta = respuesta.replace(/[\ó]/g, 'o');
    respuesta = respuesta.replace(/[\ú]/g, 'u');
    respuesta = respuesta.replace(/[\ñ]/g, 'n');
   // respuesta = string; // ESTO FUE UN GRAN ERROR DE MI PARTE PORQUE EL VALOR DE LA DERECHA SE ASIGNA EN LA IZQUIERDA POR LO TANTO string
   // que es la frase original con tildes es asignada a respuesta que es la trabajada y por tanto se pierde todo el trabajo
    return respuesta;
}




const rexExp = /[\W]/g;
let texto = 'En el árbol hay manzanas.'
console.log('tenemos la variable "texto" : ' + texto);
console.log('Con ".replace()" se eliminaran los espacios: ' + texto.replace(rexExp, ''));
console.log('se ha determinado que existe un problema con las tildes');
console.log();
const rexExp2 = /[A-Za-z1-9áéíóúÁÉÍÓÚ]/g; // /[\W´]/g pruduce el mismo error () elimina 'á'
console.log('segundo inteto para conservar "á" : ' + texto.replace(rexExp2, '')); //el resultado es malo

//función previa para aplicar a palindromos

function delateTilde(fraseString){
    let nuevaFraseString;
    nuevaFraseString = fraseString.replace(/[\á]/g, 'a');
    nuevaFraseString = nuevaFraseString.replace(/[\é]/g, 'e');
    nuevaFraseString = nuevaFraseString.replace(/[\í]/g, 'i');
    nuevaFraseString = nuevaFraseString.replace(/[\ó]/g, 'o');
    nuevaFraseString = nuevaFraseString.replace(/[\ú]/g, 'u');
   // nuevaFraseString = fraseString; // ESTO FUE UN GRAN ERROR DE MI PARTE PORQUE EL VALOR DE LA DERECHA SE ASIGNA EN LA IZQUIERDA POR LO TANTO fraseString
   // que es es la frase original con tildes es asignada a nuevaFraseString que es la trabajada y por tanto se pierde todo el trabajo
    return fraseString;
}
 

 /*

const rexExp = /[\W]/g;
let texto = 'En el árbol hay manzanas.';
console.log('tenemos la variable \'texto\' : ' + texto);

let textoMinus = texto.toLowerCase();
console.log('Con \'.toLowerCase()\' todas las mayusculas a minuscualas: ' + textoMinus);

console.log('luego se ejecurá una funcion para reemplazar vocales con tilde por vocales sin tilde');


 
let textoMinusNoTilde = delateTilde(textoMinus);

console.log('en este punto el texto deveria estar en minusculas y sin tilde ' + "'" + textoMinusNoTilde + "'");


console.log(textoMinusNoTilde.replace(/[\Wñ]/g, ''));
let textoMinusNoTildeNoEspacio = textoMinusNoTilde.replace(rexExp, '');
console.log(textoMinusNoTildeNoEspacio);

console.log('en este punto el string no deveria contener ni espacios ni signos de puntuacion o interrogacion' + textoMinusNoTildeNoEspacio);




//const rexExp2 = /[A-Za-z1-9áéíóúÁÉÍÓÚ]/g; // /[\W´]/g pruduce el mismo error () elimina 'á'
//console.log('segundo inteto para conservar "á" : ' + texto.replace(rexExp2, '')); //el resultado es malo

*/
