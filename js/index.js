//Funciones
const inicio = () => {
	opcion = parseInt(
		prompt(
			'Si desea agregar un producto, ingrese 1. \n' +
				'Si desea quitar un producto, ingrese 2. \n' +
				'Si desea buscar información de un producto, ingrese 3. \n' +
				'Si desea salir, ingrese 4.'
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

// Resta corregir código
const quitar = () => {
	let listado = frutas.map((fruta) => fruta.nombre);
	let mensaje = `Elija entre las siguientes frutas: ${listado}`;
	alert(mensaje);
	let nombre = prompt('Ingrese el nombre de la fruta');

	let posicion = frutas.indexOf(nombre.toLowerCase());
	frutas.splice(posicion, 1);

	console.log(frutas);
};

const buscar = () => {
	let listado = frutas.map((fruta) => fruta.nombre);
	let aviso = `Frutas en stock: ${listado}`;
	alert(aviso);
	let nombre = prompt('Ingrese el nombre de la fruta');
	let producto = frutas.find((fruit) => fruit.nombre === nombre);
	let mensaje = `Nombre: ${producto.nombre} 
    Precio: ${producto.precio}
    Cantidad: ${producto.cantidad}`;
	alert(mensaje);
};

const salir = () => {
	let saludo = 'Hasta luego';
	alert(saludo);
	return;
};

//Variables
let opcion;

//Array
const frutas = [
	{ nombre: 'manzana', precio: 300, cantidad: 400 },
	{ nombre: 'naranja', precio: 200, cantidad: 300 },
	{ nombre: 'durazno', precio: 400, cantidad: 600 },
	{ nombre: 'banana', precio: 500, cantidad: 700 },
];

// Código
inicio();

while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {
	alert('Ingrese una opción válida');
	inicio();
}

if (opcion === 1) {
	agregar();
	let respuestain = prompt('Desea agregar más productos?');
	while (respuestain.toLowerCase() === 'si') {
		agregar();
		respuestain = prompt('Desea agregar más productos?');
	}
} else if (opcion === 2) {
	quitar();
	let respuestaout = prompt('Desea quitar más productos?');
	while (respuestaout.toLowerCase() === 'si') {
		quitar();
		respuestaout = prompt('Desea quitar más productos?');
	}
} else if (opcion === 3) {
	buscar();
	let respuesta = prompt('Desea buscar más productos?');
	while (respuesta.toLowerCase() === 'si') {
		buscar();
		respuesta = prompt('Desea buscar más productos?');
	}
} else if (opcion === 4) {
	salir();
}
