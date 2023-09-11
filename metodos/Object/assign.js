// este método sirve para copiar las propiedades de un objeto en otro

var obj1 = {
    a: 1,
    b: 2,
}

var obj2 = {
    c: 3,
    d: 4,
}

Object.assign(obj1, obj2);

obj1; // output: {a:1, b:2, c:3, d:4}