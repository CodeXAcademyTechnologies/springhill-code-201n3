// DOM Manipulation

// - The DOM - Document Object Model

// Steps for DOM Manipulation in JS

// JS need a window into your HTML or into the DOM
// STEP 1

let section = document.getElementById('my-section');
let body = document.querySelector('body');

// STEP 2 - Create elements // h2Element = <h2></h2>

const h2Element = document.createElement('h2');

// STEP 3 - give context if necessary

h2Element.textContent = 'I am an H2!'
// <h2>I am an H2</h2>

// STEP 4 - add to the DOM
section.appendChild(h2Element);

let header = document.getElementById('my-header');

const pElement = document.createElement('p');

pElement.textContent = 'I am a pea';

header.appendChild(pElement);

