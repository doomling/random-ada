console.log('A');

var nombre = 'Juani';
var edad = -3;

console.log(nombre,"tiene",edad);
//edad = edad+1;
console.log(edad);
nombre = 'Carlos';

console.log(nombre);

var hola;
console.log(hola);

console.log(nombre + " tiene " + edad + " años");
var clima = 'sol';

if (clima == 'lluvia') {
	console.log('paraguas');
	} else if (clima == 'sol') {
		console.log('anteojos');
	}	else {
		console.log('remeras');
	}


if (edad >= 18) {
console.log('mayor de edad');
	} else if (edad < 0) {
	console.log('caso no válido');
	} else {
		console.log('menor de edad');
	}

var semaforo = 'rojo';
var arriba = 4;
var abajo = 4;

if (arriba = 4) {
	if (semaforo = 'rojo' ) {
	console.log(semaforo);
	arriba = arriba-1;	
	semaforo = 'verde';
	console.log('arriba quedan ', arriba);
	}
}
	if (abajo = 4) {
		if (semaforo = 'verde') {
		console.log(semaforo);
		abajo = abajo-1;
		semaforo = 'rojo';
		console.log('abajo quedan ', abajo);
		}
	}
	if (arriba = 3) {
	if (semaforo = 'rojo' ) {
	console.log(semaforo);
	arriba = arriba-1;	
	semaforo = 'verde';
	console.log('arriba quedan ', arriba);
	}
}
	if (abajo = 3) {
		if (semaforo = 'verde') {
		console.log(semaforo);
		abajo = abajo-1;
		semaforo = 'rojo';
		console.log('abajo quedan ', abajo);
		}
	}
	if (arriba = 2) {
	if (semaforo = 'rojo' ) {
	console.log(semaforo);
	arriba = arriba-1;	
	semaforo = 'verde';
	console.log('arriba quedan ', arriba);
	}
}
	if (abajo = 2) {
		if (semaforo = 'verde') {
		console.log(semaforo);
		abajo = abajo-1;
		semaforo = 'rojo';
		console.log('abajo quedan ', abajo);
		}
	}
	if (arriba = 1) {
		if (semaforo = 'rojo' ) {
		console.log(semaforo);
		arriba = arriba-1;	
		semaforo = 'verde';
		console.log('arriba quedan ', arriba);
		}
}
	if (abajo = 1) {
		if (semaforo = 'verde') {
		console.log(semaforo);
		abajo = abajo-1;
		semaforo = 'rojo';
		console.log('abajo quedan ', abajo);
		}
	}

	var persones =  ['h1', 'h2', 'h3', 'h23'];

	console.log(persones[10]);
	console.log(persones);

	persones[10] = 'no hacer';
	console.log(persones);

	persones.push('h24');
	console.log(persones);