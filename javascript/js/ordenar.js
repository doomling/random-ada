

function checkPassword(password) {
	var valida = 'válida';
	if (password.length < 6) {
		valida = 'no es válida';
		return valida;
	}
	for (var i = 0; i < password.length; i++) {
		if (password[i] == i) {
			valida = 'es válida';
		}
	}
	console.log(valida);
}

console.log(checkPassword('322222'))


var palabra = 'Holá';

function tieneTilde (palabra) {
	var tildadas = ['á','é','í','ó','ú'];
	var esTilde = 'no tiene tilde';
	for (var i = 0; i < palabra.length; i++) {
		for (var z = 0; z < tildadas.length; z++) {
			if (palabra[i] == tildadas[z]) {
					esTilde = 'tiene tilde';
					break;
					}
				}
		}

		return esTilde;
	}

console.log(tieneTilde('pláp'));

function ordenar(arr) {

	for(i = 0; i < arr.length; i++){
		for(z = 0; z < arr.length - i - 1; z++)
			if (arr[z] < arr[z + 1]) {
				var temp = arr[z];
				arr[z] = arr[z + 1];
				arr[z + 1] = temp;
				}
			}
			return arr;
		}

var arr = [1, 4, 3, 23, 80];

console.log(ordenar(arr));

var arr2 = [1, 4, 3, 23, 80];

function order(arr) {
	var temp = [];
	temp[0] = arr[0];

	for (i = 0; i < arr.length - 1; i++)	{
		if (temp[i] < arr[i]){
			temp.push(arr[i]);
			temp[i] = arr[i];
		}
		else {
			temp[i] = arr[i];
			temp.push(temp[i]);
		}
	}
	console.log(temp);
}

console.log(order(arr2));