//Funciones
let opcion;

//Creo una estructura condicional simple y empleo un operador ternario
const historialDeOperaciones = () => {
	opcion === ''
		? console.log('El usuario no ha elegido ninguna opción')
		: console.log('El usuario eligio una opción ', opcion);
};

const ingreso = () => {
	opcion = 'ingreso';
	historialDeOperaciones();
	opcionElegida();
	return;
};

const egreso = () => {
	opcion = 'egreso';
	historialDeOperaciones();
	opcionElegida();
	return;
};

const cambioPrecio = () => {
	opcion = 'cambioPrecio';
	historialDeOperaciones();
	opcionElegida();
	return;
};

const salir = () => {
	opcion = 'salir';
	historialDeOperaciones();
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
	<input class="btn btn-primary botonModificar" type="submit" value="Modificar Stock" />
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
	<input class="btn btn-primary botonModificar" type="submit" value="Modificar Precio" />
	<a href="#btnIngreso">
	<button class="btn btn-primary botonCerrar" id="btnCerrar">Cerrar</button> 
	</a>`;
		formulario.append(codigoFormulario);
	} else if (opcion === 'salir') {
		let borrarTituloSecundario = document.getElementById('tituloSecundario');
		formulario.innerHTML = '';
		historial.innerHTML = '';
		borrarTituloSecundario.innerHTML = '';
		let despedida = document.getElementById('mensajes');
		let saludoDespedida = document.createElement('div');
		saludoDespedida.innerHTML = `
		<h2>Hasta Luego</h2>
		`;
		despedida.append(saludoDespedida);
		return;
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

		// Realizo modificaciones de stock y/o precio
		let stockFrutas = JSON.parse(localStorage.getItem('Stock'));
		let validarNombre;

		if (opcion === 'ingreso') {
			validarNombre = stockFrutas.some(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			while (validarNombre === false && nombre != '') {
				alert(
					'Por favor ingrese el nombre de alguna de las frutas en stock'
				);
				nombre = '';
			}
			const encontrarFruta = stockFrutas.find(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			encontrarFruta.cantidad =
				parseInt(encontrarFruta.cantidad) + parseInt(cantidad);

			//Almaceno info en el storage
			localStorage.setItem('Stock', JSON.stringify(stockFrutas));
			obtenerDatos = localStorage.getItem('Stock');
		} else if (opcion === 'egreso') {
			validarNombre = stockFrutas.some(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			while (validarNombre === false && nombre != '') {
				alert(
					'Por favor ingrese el nombre de alguna de las frutas en stock'
				);
				nombre = '';
			}
			const encontrarFruta = stockFrutas.find(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			encontrarFruta.cantidad =
				parseInt(encontrarFruta.cantidad) - parseInt(cantidad);

			// Evito que se ingrese un valor mayor al stock disponible
			while (encontrarFruta.cantidad < 0) {
				alert('No puede quitar más fruta de la que hay en stock');
				encontrarFruta.cantidad = 0;
				historial.innerHTML = '';
			}
			localStorage.setItem('Stock', JSON.stringify(stockFrutas));
			obtenerDatos = localStorage.getItem('Stock');
		} else if (opcion === 'cambioPrecio') {
			validarNombre = stockFrutas.some(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			while (validarNombre === false && nombre != '') {
				alert(
					'Por favor ingrese el nombre de alguna de las frutas en stock'
				);
				nombre = '';
			}
			const encontrarFruta = stockFrutas.find(
				(item) => item.nombre.toLowerCase() === nombre.toLowerCase()
			);
			encontrarFruta.precio = parseInt(precio);
			localStorage.setItem('Stock', JSON.stringify(stockFrutas));
			obtenerDatos = localStorage.getItem('Stock');
		}

		// Actualizo valores en las cards
		actualizarDatos = JSON.parse(obtenerDatos);
		stock.innerHTML = '';
		verStock();

		// Genero historial en html
		class modificacion {
			constructor(nombre, cantidad) {
				this.nombre = nombre;
				this.cantidad = cantidad;
				this.precio = precio;
			}
		}
		const cambiosRecientes = [];

		if (opcion === 'ingreso' || opcion === 'egreso') {
			let cambios = new modificacion(nombre, cantidad, precio);
			cambiosRecientes.push(cambios);

			historial = document.getElementById('cambios');
			for (fruta of cambiosRecientes) {
				if (opcion === 'ingreso') {
					let historialReciente = document.createElement('div');
					historialReciente.innerHTML = `
					<h6>Fruta ingresada: ${fruta.nombre}</h6>
					<span>Cantidad: ${fruta.cantidad}</span>
					`;
					historial.append(historialReciente);
				} else if (opcion === 'egreso') {
					let historialReciente = document.createElement('div');
					historialReciente.innerHTML = `
					<h6>Fruta extraída: ${fruta.nombre}</h6>
					<span>Cantidad: ${fruta.cantidad}</span>
					`;
					historial.append(historialReciente);
				}
			}
		} else if (opcion === 'cambioPrecio') {
			let cambios = new modificacion(nombre, cantidad, precio);
			cambiosRecientes.push(cambios);

			historial = document.getElementById('cambios');
			for (fruta of cambiosRecientes) {
				let historialReciente = document.createElement('div');
				historialReciente.innerHTML = `
					<h6>Fruta modificada: ${fruta.nombre}</h6>
					<span>Nuevo Precio: ${fruta.precio}</span>
					`;
				historial.append(historialReciente);
			}
		}

		// Limpio campos del formulario
		infoFormulario[2].value = '';
		infoFormulario[4].value = '';
		infoFormulario[6].value = '';
	});
	return;
};
inicio();
