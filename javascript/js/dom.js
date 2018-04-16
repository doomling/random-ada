var cajaDiv = document.getElementById("PrincipalCaja");
//cajaDiv.setAttribute('class','naranja');
/*
var section = document.getElcementById('caja');
var parrafo = document.createElement('p');
parrafo.setAttribute('class','text');
parrafo.textContent = 'Hola soy texto';
section.appendChild(parrafo);

*/

var body = document.querySelector('body');
var nuevoH1 = document.createElement('h1');
nuevoH1.textContent = 'Ahora si todo es dinámico';
var nuevoP = document.createElement('p');
nuevoP.textContent = 'Este código se creo usando javascript'
body.appendChild(nuevoH1);
body.appendChild(nuevoP);

var menu = ['1','2','3','4','5'];

var listota = document.createElement('ul');
body.appendChild(listota);

for (var i = 0; i < menu.length; i++) {
		var lista = document.createElement('li');
		lista.textContent = menu[i];
		listota.appendChild(lista);
	}



