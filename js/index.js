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

//Variables
let opcion;

// Código
inicio();

while (opcion !== 1 && opcion !== 2 && opcion !== 3) {
	alert('Ingrese una opción válida');
	inicio();
}
