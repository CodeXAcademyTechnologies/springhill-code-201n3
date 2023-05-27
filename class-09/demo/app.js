const resultsContainer = document.getElementById("results");

const mainBox = document.getElementById("main-box");

function handleClick(event) {
  let target = event.target;
  let resultElm = document.createElement("div");

  if (target.id === "box-1") {
    resultElm.textContent = "You clicked Box 1."
  } else if (target.id === "box-2") {
    resultElm.textContent = "You clicked Box 2."
  } else if (target.id === "box-3") {
    reseultElm.textContent = "You clicked Box 3."
  }
  resultsContainer.appendChild(pElm);
}

mainBox.addEventListener("click", handleClick);
