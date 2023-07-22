'use strict';

let movieA = {
  title: 'Barbie',
  genre: 'Comedy',
  length: '2 hours, 7 minutes'
}

let movieB = {
  title: 'The Grey',
  genre: 'Drama',
  length: '2 hours'
}

let movieC = {
  title: 'The Paw Patrol Movie',
  genre: 'Kids',
  length: '1 hour 20 minutes'
}

// CONSTRUCTOR FUNCTION
// Parameters - Unique to each object
// THIS - in a constructor function will refer to the object that will be created

function Movie(title, genre, movieLength){
  this.title = title;
  this.genre = genre;
  this.length = movieLength;
}

let barbie = new Movie('Barbie', 'Comedy', '2 hours');
console.log(barbie);
let theGrey = new Movie('The Grey', 'Drama', '2.5 hours');
console.log(theGrey);
let pawPatrol = new Movie('Paw Patrol', 'Kids and Family', '1.5 hours');
console.log(pawPatrol);

// PROTOTYPE === INHERITS
// SPECIAL OBJECT THAT COMES WITH OUR CONSTRUCTORS
// USE THE STORE OUR METHOD

Movie.prototype.sayGoodbye = function(){
  console.log(`Thanks for watching ${this.title}!`);
}

barbie.sayGoodbye();
theGrey.sayGoodbye();
pawPatrol.sayGoodbye();
