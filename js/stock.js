const frutas = [
	{
		nombre: 'Ananas',
		img: 'img/ananas.jpg',
		cantidad: 100,
		precio: 300,
	},
	{
		nombre: 'Bananas',
		img: 'img/bananas.jpg',
		cantidad: 600,
		precio: 500,
	},
	{
		nombre: 'Duraznos',
		img: 'img/duraznos.jpg',
		cantidad: 400,
		precio: 400,
	},
	{
		nombre: 'Kiwis',
		img: 'img/kiwis.jpg',
		cantidad: 100,
		precio: 600,
	},
	{
		nombre: 'Mandarinas',
		img: 'img/mandarinas.jpg',
		cantidad: 800,
		precio: 300,
	},
	{
		nombre: 'Manzanas',
		img: 'img/manzanas.jpg',
		cantidad: 500,
		precio: 250,
	},
	{
		nombre: 'Naranjas',
		img: 'img/naranjas.jpg',
		cantidad: 500,
		precio: 200,
	},
	{
		nombre: 'Peras',
		img: 'img/peras.jpg',
		cantidad: 200,
		precio: 300,
	},
];

localStorage.setItem('Stock', JSON.stringify(frutas));

const nombresFrutasDisponibles = () => {
	const [a, b, c, d, e, f, g, h] = frutas;
	for (item of frutas) {
		let { nombre } = item;
		console.log(nombre);
	}
};

nombresFrutasDisponibles();
