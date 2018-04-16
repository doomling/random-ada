var posiciones = ['-','-','-','-','-','-','-','-','-'];
var turno = 0;
var gameOn = true;

function Player (nombre, cosito) {
	this.nombre = nombre;
	this.cosito = cosito;
	this.ganador = false;
	}

var player1 = new Player('Gib','X');
var player2 = new Player('Tib','O');

console.log(posiciones);

function fillPos(arr, player) {
	var lleno = false;
	
	while (lleno == false) {
			var random = Math.floor(Math.random() * 9);
			if (arr[random] == '-') {
				lleno = true;
				console.log(player.nombre, 'puso', player.cosito, 'en la posición',random);
				return random; 		
				}
			else {
					if (arr.indexOf('-') == -1)  {
						console.log('no quedan posiciones');
						return gameOn = false;
					}
						else {
						lleno = true;
						console.log(player.nombre, 'puso', player.cosito, 'en la posición',random);
						return arr.indexOf('-');
						}
					}
				}
			}

function whoWon (player, arr) {
		
	if ((arr[0] == arr[1] && arr[1] == arr[2]) && (arr[0,1,2] != '-')) {
		player.ganador = true;
		}
	else if ((arr[3] == arr[4] && arr[4] == arr[5]) && (arr[3,4,5] != '-'))  {
		player.ganador = true;
		}
	else if ((arr[6] == arr[7] && arr[7] == arr[8]) && (arr[6,7,8] != '-')) { 
		player.ganador = true;
		}
	else if ((arr[0] == arr[4] && arr[4] == arr[8]) && (arr[0,4,8] != '-')) {
		player.ganador = true;
		}
	else if ((arr[2] == arr[4] && arr[4] == arr[6]) && (arr[2,4,6] != '-')) {
		player.ganador = true;
		}
	else if ((arr[0] == arr[3] && arr[3] == arr[6]) && (arr[0,3,6] != '-')) {
		player.ganador = true;
		}
	else if ((arr[1] == arr[4] && arr[4] == arr[7]) && (arr[1,4,7] != '-')) {
		player.ganador = true;
		}
	else if ((arr[2] == arr[5] && arr[5] == arr[8]) && (arr[2,5,8] != '-')) {
		player.ganador = true;
		}
	else if (arr[0,1,2,3,4,5,6,7,8] != '-') {
		player.ganador = false;
		
		}
		else { player.ganador = false }

	return player.ganador;	

		}

for (var i = 0; i < posiciones.length; i++) {
while ((player1.ganador == false && player2.ganador == false) && gameOn == true)   {
	while (turno == 0) {
		whoWon(player1,posiciones);
		if (player1.ganador == true) {
			console.log('se terminó el juego, ganó', player1.nombre);
			break;
		}
		posiciones[fillPos(posiciones,player1)] = player1.cosito;
		turno = 1;
	}
	while (turno == 1) {
		whoWon(player2,posiciones);
		if (player2.ganador == true) {
			console.log('se terminó el juego, ganó', player2.nombre);
			break;
			}
		posiciones[fillPos(posiciones, player2)] = player2.cosito;	
		turno = 0;
		}	
	}
}

		console.log(posiciones[0],posiciones[1],posiciones[2]);
		console.log(posiciones[3],posiciones[4],posiciones[5]);
		console.log(posiciones[6],posiciones[7],posiciones[8]);