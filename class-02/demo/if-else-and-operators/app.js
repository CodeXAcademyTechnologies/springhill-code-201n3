'use strict';

let hungry = false;
let thirsty = false;
let tired = false;

if(hungry){
  console.log('then go eat!');
} else if(thirsty){
  console.log('go drink some water');
} else if(tired){
  console.log('go take a nap!');
} else {
  console.log('go to the doctor');
}

// *** TRUTHY & FALSEY VALUES ****

// NUMBERS
// 0 is the only falsey value
// any other number is considered truthy

// STRINGS
// An empty string is the only falsey value ''
// Any other string is considered truthy

if(-1){
  console.log('this is a truthy value')
}

if(0){
  console.log('this is a falsey value')
}

if('hey I am a string'){
  console.log('this is a truthy value')
}

if(''){
  console.log('this is a falsey value')
}

// COMPARISON OPERATORS - EXAMPLES?
// >, <, >=, <=
// == Loosely equals - comparative equal
// === Strictly equals
// !== Loosely not equal
// !=== Strictly not equal

// Data Types
// Number
// Strings
// Booleans

let a = '10';
console.log(a === '10'); // false
console.log(a == '10'); // true
console.log(a >= '10')

// Logical Operators - Examples

// && - AND - both things being compared must be true
// || - OR - either or (any one) of the things being compared must be true
// ! - NOT - opposite of whatever it is in front of

console.log(!true)
console.log(false)

let b = 100;

if( b < 1000 && b > 5) {
  console.log('this code will run')
}

if(b === 'abc' || b > 5){
  console.log('will this one run?')
}
