const frutas = [
	{
		id: 1,
		nombre: 'Ananas',
		img: 'img/ananas.jpg',
		cantidad: 100,
		precio: 300,
	},
	{
		id: 2,
		nombre: 'Bananas',
		img: 'img/bananas.jpg',
		cantidad: 600,
		precio: 500,
	},
	{
		id: 3,
		nombre: 'Duraznos',
		img: 'img/duraznos.jpg',
		cantidad: 400,
		precio: 400,
	},
	{
		id: 4,
		nombre: 'Kiwis',
		img: 'img/kiwis.jpg',
		cantidad: 100,
		precio: 600,
	},
	{
		id: 5,
		nombre: 'Mandarinas',
		img: 'img/mandarinas.jpg',
		cantidad: 800,
		precio: 300,
	},
	{
		id: 6,
		nombre: 'Manzanas',
		img: 'img/manzanas.jpg',
		cantidad: 500,
		precio: 250,
	},
	{
		id: 7,
		nombre: 'Naranjas',
		img: 'img/naranjas.jpg',
		cantidad: 500,
		precio: 200,
	},
	{
		id: 8,
		nombre: 'Peras',
		img: 'img/peras.jpg',
		cantidad: 200,
		precio: 300,
	},
];
localStorage.setItem('Stock', JSON.stringify(frutas));
