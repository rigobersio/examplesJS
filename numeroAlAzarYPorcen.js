// número al azar entero y porcentaje al azar && porcentaje al azar

function rangoEnteroAlAzar(numMin, numMax){
    return Math.floor(Math.random() * (numMax - numMin +1) + numMin);
};

var porcentajeALAzar = Math.floor(Math.random() * 101);


//example
console.log(rangoEnteroAlAzar(0, 3));