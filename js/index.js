//Funciones

const inicio = () => {
	let botonIngreso = document.getElementById('btnIngreso');
	botonIngreso.addEventListener('click', ingreso);

	/*let botonEgreso = document.getElementById('btnEgreso');
	botonEgreso.addEventListener('click', egreso);

	let botonModificarPrecio = document.getElementById('btnModificarPrecio');
	botonModificarPrecio.addEventListener('click', modificar);

	let botonSalir = document.getElementById('btnSalir');
	botonSalir.addEventListener('click', salir);*/

	return;
};

const ingreso = () => {
	// Genero el formulario de ingreso
	let formularioIngreso = document.getElementById('opIngreso');
	let codigoFormulario = document.createElement('form');
	formularioIngreso.classList.add('formularioIngreso');
	codigoFormulario.innerHTML = `
	<h3 class="tituloFormulario"> Ingrese el nombre de la fruta en plural</h3>
	<label class="form-label" for="nombreFruta">Nombre</label>
	<input class="form-control" id="nombreFruta" type="text" />
	<label class="form-label" for="cantidadFruta">Cantidad</label>
	<input class="form-control" id="cantidadFruta" type="number" />
	<input class="btn btn-primary botonIngresar" type="submit" value="Ingresar" />
	<a href="#btnIngreso">
	<button class="btn btn-primary botonCerrar" id="btnCerrar">Cerrar</button> 
	</a>`;
	formularioIngreso.append(codigoFormulario);

	// Agrego funcionalidad al botón cerrar
	let historialIngresos;
	const cerrar = () => {
		formularioIngreso.innerHTML = '';
		historialIngresos.innerHTML = '';
		return;
	};
	let botonCerrar = document.getElementById('btnCerrar');
	botonCerrar.addEventListener('click', cerrar);

	// Evito que el formulario se recargue y almaceno la información
	formularioIngreso.addEventListener('submit', (e) => {
		e.preventDefault();
		let nuevoIngreso = e.target.children;
		let nombre = nuevoIngreso[2].value;
		let cantidad = nuevoIngreso[4].value;

		// Realizo ingreso de mercadería
		let stockFrutas = JSON.parse(localStorage.getItem('Stock'));

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

			// Genero historial de ingresos
			class modificacion {
				constructor(nombre, cantidad) {
					this.nombre = nombre;
					this.cantidad = cantidad;
				}
			}

			let frutasIngresos = new modificacion(nombre, cantidad);
			const ingresosRecientes = [];
			ingresosRecientes.push(frutasIngresos);

			historialIngresos = document.getElementById('ingresadas');
			for (fruta of ingresosRecientes) {
				let detalleIngresadas = document.createElement('div');
				detalleIngresadas.innerHTML = `
					<h6>Fruta ingresada: ${fruta.nombre}</h6>
					<span>Cantidad: ${fruta.cantidad}</span>
					`;
				historialIngresos.append(detalleIngresadas);
			}

			localStorage.setItem(
				'Historial de Ingresos',
				JSON.stringify(ingresosRecientes)
			);

			// Limpio campos del formulario
			nuevoIngreso[2].value = '';
			nuevoIngreso[4].value = '';
		} else {
			alert('Por favor ingrese el nombre de alguna de las frutas en stock');
		}
	});
};

inicio();
