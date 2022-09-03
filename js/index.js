for (let i = 20; i > 5; i = i - 1) {
	if (i > 10) {
		alert(`Aún quedan ${i} manzanas`);
	} else {
		alert(`Hay solo ${i} manzanas. Por favor reponer stock!`);
	}
}

let respuesta = prompt('Repusiste el stock de manzanas?');
while (respuesta.toLowerCase() != 'si') {
	alert('Por favor reponer Stock de manzanas');
	respuesta = prompt('Repusiste el stock de manzanas?');
}
alert('Muchas gracias. Puedes continuar vendiendo.');

/*
Comentario del tutor:
Buenas Mario que tal?
Quedo genial el trabajo, lo único que cambiaría seria el ingreso del valor del if, lo haría con un prompt, para que pregunte cuantas manzanas quedan o algo por el estilo, y dependiendo el valor que ingrese te responda una de las opciones, es un simple detalle solamente para hacerlo mas dinamico, por que el trabajo esta de 10!
*/
