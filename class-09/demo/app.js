'use strict'

// Get the html element with id of "results" and assign to a variable
const resultsContainer = document.getElementById("results");

const mainBox = document.getElementById("main-box");

// Function to handle event (in this case, when a box is clicked)

function handleClick(event) {
  // Get element that was clicked
  let target = event.target
  // Create new <div> to hold the message ("you clicked box 1")
  let resultElement = document.createElement("div");

  // Check which box was clicked and write respective message in html
  if (target.id === "box-1") {
    resultElement.textContent = "You clicked box 1."
  } else if (target.id === "box-2") {
    resultElement.textContent = "You clicked box 2."
  } else if (target.id === "box-3") {
    resultElement.textContent = "You clicked box 3."
  }

  resultsContainer.appendChild(resultElement);
}

// Event (click) -> box-1 -> main-box -> resultsContainer -> document

// Attached the click event listener to the main
mainBox.addEventListener("click", handleClick);