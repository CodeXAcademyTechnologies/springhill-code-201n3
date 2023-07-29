'use strict'

// *** STEP 1 grab the element to listen to

let buttonToBeClicked = document.getElementById('my-button');

// *** STEP 2: attach the eventlistener to the element

buttonToBeClicked.addEventListener('click', handleClick);

// *** STEP 3 - define my callback function / event handler

function handleClick(event) {
  console.log('event:', event)
  alert('A button was clicked!');
}

let myForm = document.getElementById('my-form');

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);

  console.log(event.target.username.value);
  console.log(event.target.age.value);
}

myForm.addEventListener('submit', handleSubmit);
