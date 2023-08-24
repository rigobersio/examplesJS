const rexExp = /[\W]/g;
let texto = 'En el árbol hay manzanas.'
console.log('tenemos la variable "texto" : ' + texto);
console.log('Con ".replace()" se eliminaran los espacios: ' + texto.replace(rexExp, ''));
console.log('se ha determinado que existe un problema con las tildes');
console.log();
const rexExp2 = /[A-Za-z1-9áéíóúÁÉÍÓÚ]/g; // /[\W´]/g produce el mismo error () elimina 'á'
console.log('segundo inteto para conservar "á" : ' + texto.replace(rexExp2, '')); //el resultado es malo

//función previa para aplicar a palindromos

function delateTilde(fraseString){
    let nuevaFraseString;
    nuevaFraseString = fraseString.replace(/[\á]/g, 'a');
    nuevaFraseString = nuevaFraseString.replace(/[\é]/g, 'e');
    nuevaFraseString = nuevaFraseString.replace(/[\í]/g, 'i');
    nuevaFraseString = nuevaFraseString.replace(/[\ó]/g, 'o');
    nuevaFraseString = nuevaFraseString.replace(/[\ú]/g, 'u');
    nuevaFraseString = fraseString;
    return nuevaFraseString;
}
let text = 'áéíóú'
console.log(delateTilde(text));