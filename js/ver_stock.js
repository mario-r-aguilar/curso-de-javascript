let obtenerDatos = localStorage.getItem('Stock');
let actualizarDatos = JSON.parse(obtenerDatos);

const verStock = () => {
	const stock = document.getElementById('stock');
	actualizarDatos.forEach((fruta) => {
		const div = document.createElement('div');
		div.classList.add('cardFruta');
		div.classList.add('col-lg-3');
		div.classList.add('col-md-4');
		div.classList.add('col-sm-6');
		div.innerHTML = `                     
						<h4>${fruta.nombre}</h4>
                        <img src="${fruta.img}" class="imagenesDeFrutas card border-success img-fluid" alt="${fruta.nombre}">
                        <p class="parrafoCantidad">Cantidad: ${fruta.cantidad}</p>
                        <p class="parrafoPrecio">Precio:$ ${fruta.precio}</p>                        
                        `;
		stock.appendChild(div);
	});
	return;
};
verStock();
