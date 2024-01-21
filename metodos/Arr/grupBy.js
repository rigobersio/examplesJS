const heroes = [
{name: "Thor", team: "avenge" power: 50 },
{name: "Batman", team: "justice", power: 10 } ,
{name: "IronMan ", team: "avenge", power: 25},
{name: "SuperMan", tean: "justice", power: 99 }
]

const nuevoOrden = Object.groupBy(heroes, (heroe) => {
	return heroe.team
}); // esto agrupara a los super herores por team
// se está implementando aun