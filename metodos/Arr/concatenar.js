typeof (['hola '] + ['mundo']) === 'string' //'hola mundo'
[1,2,3,4] + [5,6,7] === '1,2,3,45,6,7' // ojo al 45

// hay que ocupar .concat() en el 99% de los casos

[1,2,3].concat([4,5,6]) === [1,2,3,4,5,6];