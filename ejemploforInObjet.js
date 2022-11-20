let obj1 = {
	propiedad1:{
		propiedad1_1: 'nada en especial',
		propiedad1_2: 'nada en especial 2',
		propiedad1_3: 'nada en especial 3',
	},
	propiedad2: 89,
	propiedad3: [1, 2, 3],
	propiedad4: 'super',
};

for (let key in obj1){
	console.log('se mostraran las keys: ' + key);
	console.log();
	console.log('se mostraran los valores de las keys:' + obj1[key]);
};