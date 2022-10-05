// Agrego fetch para rederizar stock de frutas
fetch('./js/stockInicial.JSON')
	.then((response) => response.json())
	.then((data) => {
		let stock = document.getElementById('stock');
		data.forEach((fruta) => {
			let div = document.createElement('div');
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
	});
