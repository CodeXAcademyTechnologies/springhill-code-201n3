'use strict';

/* *** FOR LOOPS ***
Anatomy of a for loop:
for(starting value; condition; increment/decrement the starting value){
  code that will run until the condition is   no longer true
}
*/

let nums = [1, 2, 3, 4, 5];

for(let i = 0; i < nums.length; i++){
  console.log(`On iteration ${i} this was the value: ${nums[i]}`)
}

for(let i = 0; i < nums.length; i++){
  console.log(`The sum of ${nums[i]} plus 1 is ${nums[i]+1}`);
}

let artists = ['YL', 'Lana Del Rey', 'Coldplay', 'Nicki'];
// HINT FOR LAB = QUESTION 7 - looping through an array looking for a match

for(let i = 0; i < artists.length; i++){
  if(artists[i] === 'Coldplay'){
    console.log('Josh has been listening to a lot of Coldplay')
  } else {
    console.log(`${artists[i]} is my favorite artist.`)
  }
}

// *** WHILE LOOPS ***

/*
while(condition){
  code run until condition is not true
}
*/

let myFavNum = 2;
let userGuess = prompt('Guess my lucky number');

// FOR Lab you will have to figure out how to compare a string and a num in your strictly equals world

while(userGuess != myFavNum){
  userGuess = prompt('Guess my lucky number...');
}

// Think about how you could use this when keeping a score

let numOfPizza = 0;

while(numOfPizza < 4){
  numOfPizza++;
  console.log(numOfPizza);
  console.log('woah where did this piece of pizza come from?')
}

let hungry = true

while(hungry){
  console.log('I am hungry!');
  break;
  console.log('you will not see this');
}
