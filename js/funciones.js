//Funciones
let opcion;

const ingreso = () => {
	opcion = 'ingreso';
	opcionElegida();
	return;
};

const egreso = () => {
	opcion = 'egreso';
	opcionElegida();
	return;
};

const cambioPrecio = () => {
	opcion = 'cambioPrecio';
	opcionElegida();
	return;
};

const salir = () => {
	opcion = 'salir';
	opcionElegida();
	return;
};

const inicio = () => {
	let botonIngreso = document.getElementById('btnIngreso');
	botonIngreso.addEventListener('click', ingreso);

	let botonEgreso = document.getElementById('btnEgreso');
	botonEgreso.addEventListener('click', egreso);

	let botonModificarPrecio = document.getElementById('btnModificarPrecio');
	botonModificarPrecio.addEventListener('click', cambioPrecio);

	let botonSalir = document.getElementById('btnSalir');
	botonSalir.addEventListener('click', salir);

	return;
};

const opcionElegida = () => {
	// Genero el formulario de ingreso
	if (opcion === 'ingreso' || opcion === 'egreso') {
		let formulario = document.getElementById('formulario');
		formulario.innerHTML = '';
		let codigoFormulario = document.createElement('form');
		formulario.classList.add('formulario');
		codigoFormulario.innerHTML = `
	<h3 class="tituloFormulario"> Ingrese el nombre de la fruta en plural</h3>
	<label class="form-label" for="nombreFruta">Nombre</label>
	<input class="form-control" id="nombreFruta" placeholder="Nombre" type="text" />
	<label class="form-label" for="cantidadFruta">Cantidad</label>
	<input class="form-control" id="cantidadFruta" placeholder="Cantidad" type="number" />
	<label class="form-label" for="precioFruta">Precio</label>
	<input class="form-control" id="precioFruta" type="number" placeholder="Opción deshabilitada" disabled readonly/>
	<input class="btn btn-primary botonIngresar" type="submit" value="Modificar Stock" />
	<a href="#btnIngreso">
	<button class="btn btn-primary botonCerrar" id="btnCerrar">Cerrar</button> 
	</a>`;
		formulario.append(codigoFormulario);
	} else if (opcion === 'cambioPrecio') {
		let formulario = document.getElementById('formulario');
		formulario.innerHTML = '';
		let codigoFormulario = document.createElement('form');
		formulario.classList.add('formulario');
		codigoFormulario.innerHTML = `
	<h3 class="tituloFormulario"> Ingrese el nombre de la fruta en plural</h3>
	<label class="form-label" for="nombreFruta">Nombre</label>
	<input class="form-control" id="nombreFruta" placeholder="Nombre" type="text" />
	<label class="form-label" for="cantidadFruta">Cantidad</label>
	<input class="form-control" id="cantidadFruta" placeholder="Opción deshabilitada" type="number" disabled readonly/>
	<label class="form-label" for="precioFruta">Precio</label>
	<input class="form-control" id="precioFruta" type="number" placeholder="Precio"/>
	<input class="btn btn-primary botonIngresar" type="submit" value="Modificar Precio" />
	<a href="#btnIngreso">
	<button class="btn btn-primary botonCerrar" id="btnCerrar">Cerrar</button> 
	</a>`;
		formulario.append(codigoFormulario);
	} else if (opcion === 'salir') {
		let borrarTituloSecundario = document.getElementById('tituloSecundario');
		borrarTituloSecundario.innerHTML = '';
		let despedida = document.getElementById('mensajes');
		let saludoDespedida = document.createElement('div');
		saludoDespedida.innerHTML = `
		<h2>Hasta Luego</h2>
		`;
		despedida.append(saludoDespedida);
	}

	// Agrego funcionalidad al botón cerrar
	let historial;
	const cerrar = () => {
		formulario.innerHTML = '';
		historial.innerHTML = '';
		return;
	};
	let botonCerrar = document.getElementById('btnCerrar');
	botonCerrar.addEventListener('click', cerrar);

	// Evito que el formulario se recargue y almaceno la información
	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
		let infoFormulario = e.target.children;
		let nombre = infoFormulario[2].value;
		let cantidad = infoFormulario[4].value;
		let precio = infoFormulario[6].value;

		// Realizo ingreso de mercadería
		let stockFrutas = JSON.parse(localStorage.getItem('Stock'));
		let precioFrutas = JSON.parse(localStorage.getItem('Stock'));
		let validarNombre;

		if (opcion === 'ingreso') {
			validarNombre = stockFrutas.some(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			if (validarNombre === true) {
				const encontrarFruta = stockFrutas.find(
					(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
				);
				encontrarFruta.cantidad =
					parseInt(encontrarFruta.cantidad) + parseInt(cantidad);
				localStorage.setItem('Stock', JSON.stringify(stockFrutas));
			} else {
				alert(
					'Por favor ingrese el nombre de alguna de las frutas en stock'
				);
			}
		} else if (opcion === 'egreso') {
			validarNombre = stockFrutas.some(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			if (validarNombre === true) {
				const encontrarFruta = stockFrutas.find(
					(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
				);
				encontrarFruta.cantidad =
					parseInt(encontrarFruta.cantidad) - parseInt(cantidad);

				localStorage.setItem('Stock', JSON.stringify(stockFrutas));
				// Evitar que el stock quede en negativo
				while (encontrarFruta.cantidad < 0) {
					alert('No puede quitar más fruta de la que hay en stock');
					encontrarFruta.cantidad =
						parseInt(encontrarFruta.cantidad) + parseInt(cantidad);
					historial.innerHTML = '';
					infoFormulario[2].value = '';
					infoFormulario[4].value = '';
					infoFormulario[6].value = '';
				}
			} else {
				alert(
					'Por favor ingrese el nombre de alguna de las frutas en stock'
				);
			}
		} else if (opcion === 'cambioPrecio') {
			validarNombre = precioFrutas.some(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			if (validarNombre === true) {
				const encontrarFruta = precioFrutas.find(
					(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
				);
				encontrarFruta.precio = parseInt(precio);
				localStorage.setItem('Stock', JSON.stringify(precioFrutas));
			} else {
				alert(
					'Por favor ingrese el nombre de alguna de las frutas en stock'
				);
			}
		}

		// Genero historial de ingresos
		class modificacion {
			constructor(nombre, cantidad) {
				this.nombre = nombre;
				this.cantidad = cantidad;
				this.precio = precio;
			}
		}

		if (opcion === 'ingreso' || opcion === 'egreso') {
			let cambioStock = new modificacion(nombre, cantidad);
			const cambiosStockRecientes = [];
			cambiosStockRecientes.push(cambioStock);

			historial = document.getElementById('cambioStock');
			for (fruta of cambiosStockRecientes) {
				if (opcion === 'ingreso') {
					let historialReciente = document.createElement('div');
					historialReciente.innerHTML = `
					<h6>Fruta ingresada: ${fruta.nombre}</h6>
					<span>Cantidad: ${fruta.cantidad}</span>
					`;
					historial.append(historialReciente);

					localStorage.setItem(
						'Cambios de Stock',
						JSON.stringify(cambiosStockRecientes)
					);
				} else if (opcion === 'egreso') {
					let historialReciente = document.createElement('div');
					historialReciente.innerHTML = `
					<h6>Fruta extraída: ${fruta.nombre}</h6>
					<span>Cantidad: ${fruta.cantidad}</span>
					`;
					historial.append(historialReciente);

					localStorage.setItem(
						'Cambios de Stock',
						JSON.stringify(cambiosStockRecientes)
					);
				}
			}
		} else if (opcion === 'cambioPrecio') {
			let cambioPrecios = new modificacion(nombre, precio);
			const cambiosPreciosRecientes = [];
			cambiosPreciosRecientes.push(cambioPrecios);

			historial = document.getElementById('cambioStock');
			for (fruta of cambiosPreciosRecientes) {
				let historialReciente = document.createElement('div');
				historialReciente.innerHTML = `
					<h6>Fruta modificada: ${fruta.nombre}</h6>
					<span>Nuevo Precio: ${fruta.cantidad}</span>
					`;
				historial.append(historialReciente);
			}
		}

		// Limpio campos del formulario
		infoFormulario[2].value = '';
		infoFormulario[4].value = '';
		infoFormulario[6].value = '';
	});
};

inicio();
