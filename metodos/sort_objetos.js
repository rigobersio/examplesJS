//10) Ordenar objeto por propiedad: Crea una función que tome una lista de objetos y ordene los objetos por una 
//propiedad específica.

var obj1 = {
    prop1: null,
    prop2: null,
    prop3: null,
}

var obj2 = {
    prop1: null,
    prop2: null,
    prop3: null,
}
var obj3 = {
    prop1: null,
    prop2: null,
    prop3: null,
    prop4: 10,
}

var obj4 = {
    prop1: null,
    prop2: null,
    prop3: null,
    prop4: 5,
}

var arrObj = [obj1, obj2, obj3, obj4];


function ordenarObjetos (arrObject) {
    var i = 0;
    var arrSinProp4 = [];
    var arrConProp4 = [];
    while (i < arrObj.length) {
        if (arrObject[i].prop4 === undefined || arrObject[i].prop4 === null) {
            var objetoExtraido = arrObj[i];
            arrSinProp4.unshift(objetoExtraido);
        } else {
            var objetoExtraido = arrObject[i];
            arrConProp4.unshift(objetoExtraido);
        }
        ++i;
    };
    return arrSinProp4.concat(arrConProp4.sort((a, b) => a -b))
}

ordenarObjetos(arrObj);