var x = "Juani";
var y = "";

for (i = x.length; i > 0; i--) {
	y += x[i-1];
}

console.log(y);

//imprimir en pantalla los dos nros 
//mas grandes de un array desordenado

var dos = [200,23,104,78,800,1000,90];
var largo = dos.length;
var masgrande = 0;
var mmenosmasgrande = 0;

for (i = 0; i < largo; i++){
		if (masgrande < dos[i]) {
			mmenosmasgrande = masgrande;
			masgrande = dos[i];
		}
	}

	console.log(masgrande,mmenosmasgrande);

/*
var uno = [1,23,37,78,90];
var dos = [1,23,56,78,104,200];
var long;
var short;

if (uno.length > dos.length) {
	long = uno.length;
	short = dos.length;
}
else {
	long = dos.length;
	short = uno.length;
}

for (i = 0; i < long; i++) {
	for (e = 0; e < short; e++){
		if (uno[i] == dos[e]) {
	 console.log(uno[i],uno[e]);
	 }
	}
}

var palabra = 'amor a roma';
var alreves = "";
console.log(palabra.length);
var a = 0;

for (var i = palabra.length - 1; i >= 0; i--) {
	alreves += palabra[i];
}

console.log(alreves);

if (palabra == alreves) {
		console.log('es un palíndromo');
	}
	else {
		console.log('no es');
	}

	var x = 'amor es roma';
	console.log(x.length);
	var long = x.length;
	var half = x.length / 2;
	var es = 'es';

	half = Math.floor(half);
	console.log(half);

	for (var i = 0; i < half -1 ; i++) {
	if (x[i] == x[long - 1]) {
			es = 'es';
			long = long -1;
	}	
	else {
		es = 'no es';
	}
}
 
console.log(es);*/ 