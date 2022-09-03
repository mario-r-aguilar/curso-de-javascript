let producto;
let precioProducto;
let cantidadProducto;
let gasto;

function tipo() {
	producto = prompt('Desea adquirir pantalones o remeras?');
	producto = producto.toLowerCase();
	precio();
}

const precio = function () {
	while (producto === '') {
		alert('Producto no disponible. Intente de nuevo.');
		tipo();
	}

	if (producto === 'pantalones') {
		precioProducto = 5000;
		cantidad();
	}

	if (producto === 'remeras') {
		precioProducto = 2500;
		cantidad();
	}

	if (producto !== 'pantalones' || 'remeras') {
		alert('Producto no disponible. Intente de nuevo.');
		tipo();
	}
};

function cantidad() {
	cantidadProducto = parseInt(prompt('Indique la cantidad que desea comprar'));
	calculo();
}

const calculo = () => {
	gasto = precioProducto * cantidadProducto;
	alert(
		'Usted adquirio ' +
			cantidadProducto +
			' ' +
			producto +
			' ' +
			'por $ ' +
			gasto +
			'. Muchas gracias por su compra!'
	);
	return tipo();
};

alert(
	'A continuación puede elegir el producto a comprar. Cuando haya finalizado, haga clic en cancelar'
);

tipo();

/*Comentario del tutor:

Buenas Mario que tal?

Bueno el trabajo quedo muy bien, y funciona de 10, el tema del return principalmente para que si o si se devuelva un valor a la hora de llamar la función y finalizarla con el mismo, si la omitimos, nos tiraría un undefined, que es lo que estaría generando el error, por que esta tratando de pasar un metodo (toLowerCase()) a algo que  no esta definido, en el caso de que en lugar de cancelar, pongamos un "no seguir comprando" o lo que sea como sentencia para cancelar funcionaría.

Igual estos son problemas que surgen principalmente al utilizar los prompt y alerts como metodos de salida, una vez lleguemos a lo que es manejo de dom y html, ya nos olvidamos de tener que preocuparnos por esto 
*/
