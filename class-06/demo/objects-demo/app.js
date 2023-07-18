'use strict';

// OBJECT LITERAL - COMMA SEPARATED KEY/VALUE PAIRS

let pokemon = {
  name: 'Mew Two',
  hp: 350,
  isEvolved: true,
  type: 'pyschic',
  says: function(){
    console.log('I am better than you')
  },
}

console.log(pokemon);

// ACCESS VALUES FROM AN OBJECT - DOT NOTATION

console.log(pokemon.name);
console.log(pokemon.isEvolved);

// ACCESS VALUES FROM AN OBJECT - BRACKET NOTATION

console.log(pokemon['type']);

// CALL OR EXECUTE AN OBJECT'S METHOD

pokemon.says();

pokemon.attacks = ['psyjack', 'break burn'];

console.log(pokemon)

let player = {
  name: 'Allen Iverson',
  skills: ['ball handling', 'finishing'],
  pointsPerGame: 26.7,
  jerseyNumber: 3,
  move: function(){
    console.log('crossover')
  }
}

console.log(player);

player.move();
