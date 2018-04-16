console.log('holi');
var x;
var a;
var b;
var resultado;

function validar (x) {
	if (x >= 0 || x < 0) {
			return x;
			console.log('estoy valindando', x);
		} else {
		console.log('no es número');
	}
}

function suma(a, b) {
	a = validar(a);
	b = validar(b);
	var resultado = a + b; 
	return resultado;
} 

function resta(a, b) {
	a = validar(a);
	b = validar(b);
	var resultado = a - b;
	return resultado;
}

function division(a, b) {
	a = validar(a);
	b = validar(b);
	if (b != 0) {
	var resultado = a / b;
	return resultado;
	} else {
		return 'no se puede dividir por cero';
	}
}

function multiplicar(a, b) {
	a = validar(a);
	b = validar(b);
	var resultado = a * b;
	return resultado; 
	}

console.log('suma');
console.log(suma(3,4));

console.log('resta');
console.log(resta(11,10));

console.log('division');
console.log(division(5,0));

console.log('multi');
console.log(multiplicar(1,7));

function myName(nombre, edad) {
	console.log('Mi nombre es ' + nombre + ' y mi edad es ' + edad);
}

myName('Bel','100000000000');

var dos = [200,23,104,33,800,1000,15];
var hola = 15;

for (i = 0; i < dos.length; i++) {
	if (dos[i] == 15) {
		console.log('yass mama');
	}
} 

var test = dos.length / 2;

function search() {
	console.log('Hello Moto');
}
/*
search();

function binary(arr, x) {
	for (i = 0; i < arr.length / 2; i++) {
		if (arr[i] == x) {
			console.log('wiii en el primer loop');
			break;
		}
	}
	for (i = arr.length; i > arr.length / 2; i--) {
		if (arr[i] == x) {
			console.log('wiii en la segunda mitad');
			break;
		}
	}*/