'use strict';

console.log('proof of life');
let score = 0;

// DONE: Ask the user their name through a prompt

// let username = prompt('What\'s your name?');


// // username could be"
// // - string
// // - empty string ''
// // - null

// // if username is empty string or null, keep asking for their name
// while(!username) {
//   username = prompt('No really, please, tell me your name.')
// }
// // TODO: Display that name back to the user through a custom greeting welcoming them to your site

// alert(`Welcome to my site ${username}! Let's play a game!`)

// DONE: Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input. Add console.log() messages within your app to notify the user if they are correct.

let questionOneGuess = prompt('Is my favorite drink a chai latte? Answer y/n or yes/no').toLowerCase();

console.log(questionOneGuess);

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  score++;
  alert('You are correct!');
} else if (questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry that\'s incorrect');
}

let favFoods = ['burgers', 'korean bbq', 'french toast', 'diet coke'];

let userFoodGuess = prompt(`Which of these are Josh's favorite foods?: ${favFoods}`)

for(let i = 0; i < favFoods.length; i++){
  if (userFoodGuess === 'burgers' || userFoodGuess === 'french toast'){
    alert('That is right!')
    break;
  } else {
    userFoodGuess = prompt(`Sorry, try again. Which one of these are Josh's favorite foods?: ${favFoods}`)
  }
}

// shift removes elements from the front of the array
favFoods.shift();
console.log(favFoods);

// unshift adds elements to the front of the array

favFoods.unshift('burgers');
console.log(favFoods);

// indexOf tells you the index of an element in the array; return -1 if not found

let index = favFoods.indexOf('french toast');
console.log(index);

alert(`Your score was ${score} out of 7`);

