console.log('holi');

var numero = 4513;
var esPrimo = 'Es primo';

for(var i = 2; i < numero; i++) {
 if(numero % i === 0) {
   esPrimo = 'No es primo';
   break;
 }
}
console.log(esPrimo);

var i = 100;

while (i >= 0) {
	if (i == 22) {
		i = 0;
	}
	console.log(i);
	i--
}

for (i = 1; i <= 100; i++) { 

if (i % 5 == 0 && i % 3 == 0) {
console.log('fizzbuzz');
	}
else if (i % 3 == 0) {
	console.log('fizz');
	}
else if (i % 5 == 0) {
	console.log('buzz');
	}
	else {
		console.log(i);
	}
}

var nombre = 'Juan';

switch (nombre) {
	case 'Pedro':
	console.log('Soy',nombre);
	break;

	case 'Juan':
	console.log('Soy', nombre);
	break;

	default:
	console.log('No se quien soy');
}

var dia = 3;

switch (dia) {
	case 0:
	console.log('lunes');
	break;
	case 1:
	console.log('martes');
	break;
	case 2:
	console.log('miercoles');
	break;
	case 3:
	console.log('jueves');
	break;
	case 4:
	console.log('viernes');
	break;
	case 5:
	console.log('sábado');
	break;
	case 6:
	console.log('domingo');
	break;
	default:
	console.log('chimichanga');
}