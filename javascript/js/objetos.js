var miembros = [
Personita1 = {
	nombre: 'Cholito',
	edad: 17,
	altura: 42,
	piernas: 2,
	brazos: 2,
	plata: 200,
		coima: function (entrada) {
			this.plata = this.plata - 200;
			this.edad = 20;
			console.log('me cobraron', entrada);
			return entrada;
	},
},
Personita2 = {
	nombre: 'Carla',
	edad: 17,
	altura: 40,
	piernas: 7,
	brazos: 2,
	plata: 2000,
		coima: function (entrada) {
			this.plata = this.plata - 200;
			this.edad = 20;
			console.log('me cobraron', entrada);
			return entrada;
	},
},

Personita3 = {
	nombre: 'Pupino',
	edad: 19,
	altura: 25,
	piernas: 7,
	brazos: 45,
	plata: 100,
		coima: function (entrada) {
			this.plata = this.plata - 200;
			this.edad = 20;
			console.log('me cobraron', entrada);
			return entrada;
	},
},

Personita4 = {
	nombre: 'Peperino',
	edad: 17,
	altura: 40,
	piernas: 4,
	brazos: 10,
	plata: 1,
		coima: function (entrada) {
			this.plata = this.plata - 200;
			this.edad = 20;
			console.log('me cobraron', entrada);
			return entrada;
	},
},

Personita5 = {
	nombre: 'Juani',
	edad: 16,
	altura: 40,
	piernas: 2,
	brazos: 4,
	plata: 290,
	coima: function (entrada) {
			this.plata = this.plata - 200;
			this.edad = 20;
			console.log('me cobraron', entrada);
			return entrada;
	},
}
	]

function esVip (gente) {
	var alturaMax= 40;
	var piernasMin= 3;
	var brazosMin= 4;
	var vip = 'no vip';
	var entrada = 200;
	var billetera = 0;
	
	for (var i = 0; i < miembros.length; i++) {
		if ((miembros[i].altura <= alturaMax) && 
			(miembros[i].edad >= 18 && miembros[i].edad <= 20) &&
			(miembros[i].piernas >= piernasMin || 
			 miembros[i].brazos >= brazosMin)) {
				vip = 'es vip';
			} 
		else if ((miembros[i].altura <= alturaMax) &&
			((miembros[i].piernas >= piernasMin || 
			 miembros[i].brazos >= brazosMin)) && (miembros[i].plata >=200)) {
				plata = miembros[i].coima(entrada);
				billetera = billetera + plata;
				vip = 'es vip';
		}
		else {
				vip = 'no vip';	
			}
		console.log(miembros[i].nombre,miembros[i].edad,vip);
		}
		console.log('tengo toda esta plata', billetera);
	}

console.log(esVip(miembros));

/*
nos volvimos más corruptos con la edad si tienen 200 pesos
funcion mePaga200pesos
tiene 200 pesos menos
nosotros tenemos más
*/

/*
18 - 20 años
40cm de altura
al menos:
- 3 piernas
- 4 brazos


5 personas

*/