'use strict'

// Get the html element with id of "results" and assign to variable
const resultsContainer = document.getElementById("results");

const mainBox = document.getElementById("main-box");

// Function to handle event (in this case, when box is clicked)
function handleClick(event) {
  // Get element that was clicked
  let target = event.target;
  // Create new <div> to hold result message
  let resultElm = document.createElement("div");

  // Check which box was clicked and write respective message in html
  if (target.id === "box-1") {
    resultElm.textContent = "You clicked Box 1."
  } else if (target.id === "box-2") {
    resultElm.textContent = "You clicked Box 2."
  } else if (target.id === "box-3") {
    resultElm.textContent = "You clicked Box 3."
  }
  // Append the result message to the results container
  resultsContainer.appendChild(resultElm);
}

// Event (Click) -> box-1 -> main-box -> resultsContainer -> document

// Attach the click event listener to the main box
mainBox.addEventListener("click", handleClick);
