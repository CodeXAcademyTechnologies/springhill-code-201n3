'use strict';

// Tony is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Tony knows a little bit of javascript... he can make objects!

// ? what are we going to display?
// Kittens
// TODO figure out what info about each kitten we need to show:
// * name
// * age with a function - 3 months and 12 months
// * interests []
// * isGoodWithCats
// * isGoodWithDogs
// * isGoodWithKids
// * photo

// **** GLOBAL VARIABLES ***
const kittenArray = [];
console.log(kittenArray);

// *** STEP 1: Grab the window into the DOM ***

let kittenSection = document.getElementById('kitten-profiles');

// *** HELPER FUNCTION // UTILITIES ***
function renderAll(){
  for(let i = 0; i < kittenArray.length; i++){
    kittenArray[i].render();
  }
}

// *** CONSTRUCTOR FUNCTION ***

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;
}

Kitten.prototype.randomAgeGenerator = function(min, max){
  return Math.floor(Math.random() * (max - min + 1))
};

Kitten.prototype.getAge = function(){
  this.age = this.randomAgeGenerator(3, 12)
};

Kitten.prototype.render = function(){
  this.getAge();
    let articleElement = document.createElement('article');

    kittenSection.appendChild(articleElement);

    let kittenH2 = document.createElement('h2');
    kittenH2.innerText = this.name;
    articleElement.appendChild(kittenH2);

    let ageElement = document.createElement('p');
    ageElement.innerText = `Age: ${this.age} months`;
    articleElement.appendChild(ageElement);

    let kittenList = document.createElement('ul');
    articleElement.appendChild(kittenList);

    for(let i = 0; i < this.interests.length; i++){
      let interestLI = document.createElement('li');
      interestLI.innerText = this.interests[i];
      kittenList.appendChild(interestLI);
    }

    let imgElement = document.createElement('img');
    imgElement.src = this.photo;
    imgElement.alt = `${this.name} is an adorable ${this.age} month old kitten`;
    articleElement.appendChild(imgElement);

    // **** TABLE DEMO ****
    let table = document.createElement('table');
    articleElement.appendChild(table);

    let rowHeading = document.createElement('tr');
    table.appendChild(rowHeading);

    let goodWithCatsHeading = document.createElement('th');
    goodWithCatsHeading.textContent = 'Is good with Cats';
    rowHeading.appendChild(goodWithCatsHeading);

    let goodWithDogsHeading = document.createElement('th');
    goodWithDogsHeading.textContent = 'Is good with Dogs';
    rowHeading.appendChild(goodWithDogsHeading);

    let goodWithKidsHeading = document.createElement('th');
    goodWithKidsHeading.textContent = 'Is good with Cats';
    rowHeading.appendChild(goodWithKidsHeading);

    let rowValues = document.createElement('tr');
    table.appendChild(rowValues);

    let goodWithCatsValue = document.createElement('td');
    goodWithCatsValue.textContent = this.isGoodWithCats;
    rowValues.appendChild(goodWithCatsValue);

    let goodWithDogsValue = document.createElement('td');
    goodWithDogsValue.textContent = this.isGoodWithDogs;
    rowValues.appendChild(goodWithDogsValue);

    let goodWithKidsValue = document.createElement('td');
    goodWithKidsValue.textContent = this.isGoodWithKids;
    rowValues.appendChild(goodWithKidsValue);
};

// *** EXECUTABLE (executes on page load) CODE ***

let frankie = new Kitten('Frankie', ['dry food', 'mice toys', 'cat nip'], true, false, true, 'img/frankie.jpeg');
console.log(frankie);
let jumper = new Kitten('Jumper', ['wet food', 'fish toys', 'treats'], true, true, true, 'img/jumper.jpeg');
let serena = new Kitten('Serena', ['mice', 'lasers', 'hunting'], true, false, false, 'img/serena.jpeg');

kittenArray.push(frankie, jumper, serena)

renderAll();

// frankie.render();
// jumper.render();
// serena.render();

// // **** GLOBAL VARIABLES ***

// // *** STEP 1: Grab the window into the DOM ***

// let kittenSection = document.getElementById('kitten-profiles');

// // *** OBJECT LITERALS ***

// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   interests: ['dry food', 'mice toys', 'cat nip'],
//   isGoodWithCats: true,
//   isGoodWithDogs: false,
//   isGoodWithKids: true,
//   photo: 'img/frankie.jpeg',
//   randomAgeGenerator: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1))
//   },
//   getAge: function(){
//     this.age = this.randomAgeGenerator(3, 12)
//   },
//   render: function(){
//     this.getAge(); // this method call will populate the random age
//     // THIS METHOD WILL DO THE DOM MANIPULATION
//       // ** Create the element **
//     let articleElement = document.createElement('article');
//     // ** ADD TO DOM ** - parent.appendChild(child)
//     kittenSection.appendChild(articleElement);

//     let kittenH2 = document.createElement('h2');
//     kittenH2.innerText = this.name;
//     articleElement.appendChild(kittenH2);

//     let ageElement = document.createElement('p');
//     ageElement.innerText = `Age: ${this.age} months`;
//     articleElement.appendChild(ageElement);

//     //  ! HELPFUL FOR YOUR UL/LI CREATION
//     let kittenList = document.createElement('ul');
//     articleElement.appendChild(kittenList);

//     for(let i = 0; i < this.interests.length; i++){
//       let interestLI = document.createElement('li');
//       interestLI.innerText = this.interests[i];
//       kittenList.appendChild(interestLI);
//     }

//     let imgElement = document.createElement('img');
//     imgElement.src = this.photo;
//     imgElement.alt = `${this.name} is an adorable ${this.age} month old kitten`;
//     articleElement.appendChild(imgElement);
//   }
// }

// let jumper = {
//   name: 'Jumper',
//   age: 0,
//   interests: ['wet food', 'fish toys', 'treats'],
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//   isGoodWithKids: true,
//   photo: 'img/jumper.jpeg',
//   randomAgeGenerator: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1))
//   },
//   getAge: function(){
//     this.age = this.randomAgeGenerator(3, 12)
//   },
//   render: function(){
//     this.getAge(); // this method call will populate the random age
//     // THIS METHOD WILL DO THE DOM MANIPULATION
//       // ** Create the element **
//     let articleElement = document.createElement('article');
//     // ** ADD TO DOM ** - parent.appendChild(child)
//     kittenSection.appendChild(articleElement);

//     let kittenH2 = document.createElement('h2');
//     kittenH2.innerText = this.name;
//     articleElement.appendChild(kittenH2);

//     let ageElement = document.createElement('p');
//     ageElement.innerText = `Age: ${this.age} months`;
//     articleElement.appendChild(ageElement);

//     //  ! HELPFUL FOR YOUR UL/LI CREATION
//     let kittenList = document.createElement('ul');
//     articleElement.appendChild(kittenList);

//     for(let i = 0; i < this.interests.length; i++){
//       let interestLI = document.createElement('li');
//       interestLI.innerText = this.interests[i];
//       kittenList.appendChild(interestLI);
//     }

//     let imgElement = document.createElement('img');
//     imgElement.src = this.photo;
//     imgElement.alt = `${this.name} is an adorable ${this.age} month old kitten`;
//     articleElement.appendChild(imgElement);
//   }
// }

// let serena = {
//   name: 'Serena',
//   age: 0,
//   interests: ['mice', 'lasers', 'hunting'],
//   isGoodWithCats: true,
//   isGoodWithDogs: false,
//   isGoodWithKids: false,
//   photo: 'img/serena.jpeg',
//   randomAgeGenerator: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1))
//   },
//   getAge: function(){
//     this.age = this.randomAgeGenerator(3, 12)
//   },
//   render: function(){
//     this.getAge(); // this method call will populate the random age
//     // THIS METHOD WILL DO THE DOM MANIPULATION
//       // ** Create the element **
//     let articleElement = document.createElement('article');
//     // ** ADD TO DOM ** - parent.appendChild(child)
//     kittenSection.appendChild(articleElement);

//     let kittenH2 = document.createElement('h2');
//     kittenH2.innerText = this.name;
//     articleElement.appendChild(kittenH2);

//     let ageElement = document.createElement('p');
//     ageElement.innerText = `Age: ${this.age} months`;
//     articleElement.appendChild(ageElement);

//     //  ! HELPFUL FOR YOUR UL/LI CREATION
//     let kittenList = document.createElement('ul');
//     articleElement.appendChild(kittenList);

//     for(let i = 0; i < this.interests.length; i++){
//       let interestLI = document.createElement('li');
//       interestLI.innerText = this.interests[i];
//       kittenList.appendChild(interestLI);
//     }

//     let imgElement = document.createElement('img');
//     imgElement.src = this.photo;
//     imgElement.alt = `${this.name} is an adorable ${this.age} month old kitten`;
//     articleElement.appendChild(imgElement);
//   }
// }



// // *** EXECUTABLE (executes on page load) CODE ***

// frankie.render();
// jumper.render();
// serena.render();
