var loop;

function Enemy(name, life, ap) {
    this.name = name;
    this.life = life;
    this.ap = ap;
}

function Player(name, life, ap) {
    this.name = name;
    this.life = life;
    this.ap = ap;
}

var Me = new Player('BelBoss',1000,230);

var Enemy1 = new Enemy ('Charizard',200,100);
var Enemy2 = new Enemy ('Pikachu',100,150);
var Enemy3 = new Enemy ('Rattatta',50,50);
var Enemy4 = new Enemy ('Bulbasaur',800,150);
var Enemy5 = new Enemy ('Squirtle',300,150);

var enemigos = [Enemy1,Enemy2,Enemy3,Enemy4,Enemy5];

console.log(Me);
console.log(enemigos);
console.log(enemigos[0]);

function fight(enemigos,Me) {
    for (var i = 0; i < enemigos.length; i++) {
    	while (Me.life > 0 && enemigos[i].life > 0) {
    	  	enemigos[i].life = enemigos[i].life - Me.ap;
          console.log('le pegué',Me.ap, 'a',enemigos[i].name);
          Me.life = Me.life - enemigos[i].ap;
          console.log('Me pegó',enemigos[i].name, enemigos[i].ap);
        	}
        	console.log(enemigos[i], 'is dead');
        }
        console.log('Me morí después de',i,'vueltas');
    	}  

 fight(enemigos,Me);