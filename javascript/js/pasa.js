var randomIzq = Math.ceil(Math.random() * 100)
var randomAbajo = Math.ceil(Math.random() * 100)

var izq = []
var aba = []

for (var i = 0; i < randomIzq; i++) {
 izq.push('verde');
}

for (var i = 0; i < randomAbajo; i++) {
 aba.push('rojo');
}

//debug
console.log(izq.length);
console.log(aba.length);
//

if (izq.length >= aba.length) {
	var maxLoop = izq.length;
		console.log('izq es mayor vamos a loopear por ' + maxLoop);
} else {
	var maxLoop = aba.length;
	console.log('aba es mayor vamos a loopear por ' + maxLoop);
}

for (var i = 0; i < maxLoop; i++) {
	if (izq[i] != undefined) {
			console.log(izq[i]);
 		}
 	if (aba[i] != undefined) {
` 		console.log(aba[i]);
 		}
 	}

 ////////////////////////////////////////////////////////////
		
var age = 71;

if (age >= 18 && age <= 65) {
	console.log('pasa');
}
else {
	console.log('no pasa');
}

var wheels = 2
var length = 2
var conductor = 'Carla'

if ((wheels == 2 || wheels == 4)) { 	
	if ((wheels == 4 && length <= 2) || (conductor == 'Juani' && length == 2)) {
		console.log('auto');
	}
	else if (wheels == 4 && length == 3) {
		console.log('camioneta');
	}
	else if (wheels == 2) {
		console.log('moto');
	}
	else {
		console.log('No es un vehículo válido de 4 ruedas');
	}
} else {	
		console.log('No es un vehículo válido de 2 ruedas');
}

for (var i = 0; i < 10; i++) {
	console.log(i);
}

var arr = [1,2,3];
console.log(arr);
console.log(arr.length);

arr.push(23);
console.log(arr.length);

var humanes = ['juan','bla','bli']

for (var i = 0; i < humanes.length; i++) {
	console.log(humanes[i]);
}

var abajo = ['p1','p2'];
var izquierda = ['p1','p2'];
var semaforo = 'verde';

for (var i = 0; i <= abajo.length; i++) {
	console.log(semaforo);
	var semaforo = 'rojo';
		for (i = 0; i <= izquierda.length; i++) {
		console.log(semaforo);
		var semaforo = 'verde'; 
	}
}

console.log('corte');

for (var i = 0; i < abajo.length + izquierda.length; i++) {
	var semaforo = 'rojo';
	console.log(semaforo);
	var semaforo = 'verde'; 
	console.log(semaforo);
}
