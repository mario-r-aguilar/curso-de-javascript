class ingreso {
	constructor(nombre, precio, cantidad) {
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
	}
}

const comprar = () => {
	let nombre = prompt('Ingrese el nombre de la fruta');
	let precio = parseInt(prompt('Indique el precio'));
	let cantidad = parseInt(prompt('Indique la cantidad'));
	let frutasIn = new ingreso(nombre, precio, cantidad);
	frutas.push(frutasIn);
	return;
};

const frutas = [
	{ nombre: 'manzanas', precio: 300, cantidad: 400 },
	{ nombre: 'naranjas', precio: 200, cantidad: 700 },
	{ nombre: 'bananas', precio: 600, cantidad: 600 },
	{ nombre: 'duraznos', precio: 500, cantidad: 400 },
];

comprar();

console.log(frutas);
