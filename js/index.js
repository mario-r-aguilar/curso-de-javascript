//Funciones
const inicio = () => {
	opcion = parseInt(
		prompt(
			'Si desea agregar un producto ingrese 1 \n' +
				'si desea quitar un producto ingrese 2 \n' +
				'y si desea buscar un producto ingrese 3'
		)
	);
	return;
};

// Función constructora
class modificacion {
	constructor(nombre, precio, cantidad) {
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
	}
}

const agregar = () => {
	let nombre = prompt('Ingrese el nombre de la fruta');
	let precio = parseInt(prompt('Ingrese el precio'));
	let cantidad = parseInt(prompt('Indique la cantidad'));
	let ingreso = new modificacion(nombre.toLowerCase(), precio, cantidad);
	frutas.push(ingreso);
	console.log(frutas);
};

//Variables
let opcion;

//Arrays
const frutas = [
	{ nombre: 'manzana', precio: 300, cantidad: 400 },
	{ nombre: 'naranja', precio: 200, cantidad: 300 },
	{ nombre: 'durazno', precio: 400, cantidad: 600 },
	{ nombre: 'banana', precio: 500, cantidad: 700 },
];

// Código
inicio();

while (opcion !== 1 && opcion !== 2 && opcion !== 3) {
	alert('Ingrese una opción válida');
	inicio();
}

console.log(opcion);

if (opcion === 1) {
	agregar();
	let respuestain = prompt('Desea agregar más productos?');
	while (respuestain.toLowerCase() === 'si') {
		agregar();
		respuestain = prompt('Desea agregar más productos?');
	}
}
