'use strict';

console.log('proof of life');

// DONE: Ask the user their name through a prompt

let username = prompt('What\'s your name?');

// TODO: Display that name back to the user through a custom greeting welcoming them to your site

alert(`Welcome to my site ${username}! Let's play a game!`)

// DONE: Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input. Add console.log() messages within your app to notify the user if they are correct.

let questionOneGuess = prompt('Is my favorite drink a chai latte? Answer y/n or yes/no').toLowerCase();

console.log(questionOneGuess);

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('You are correct!');
} else if (questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry that\'s incorrect');
}

