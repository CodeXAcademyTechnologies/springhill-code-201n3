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

// ***** !!!! HELPFUL START FOR LAB !!!! *****
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm', '8pm']

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3
}
// **** GLOBAL VARIABLES ***

// *** STEP 1: Grab the window into the DOM ***

let kittenSection = document.getElementById('kitten-profiles');

// *** OBJECT LITERALS ***

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['dry food', 'mice toys', 'cat nip'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  randomAgeGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1))
  },
  getAge: function(){
    this.age = this.randomAgeGenerator(3, 12)
  },
  render: function(){
    this.getAge(); // this method call will populate the random age
    // THIS METHOD WILL DO THE DOM MANIPULATION
      // ** Create the element **
    let articleElement = document.createElement('article');
    // ** ADD TO DOM ** - parent.appendChild(child)
    kittenSection.appendChild(articleElement);

    let kittenH2 = document.createElement('h2');
    kittenH2.innerText = this.name;
    articleElement.appendChild(kittenH2);

    let ageElement = document.createElement('p');
    ageElement.innerText = `Age: ${this.age} months`;
    articleElement.appendChild(ageElement);

    //  ! HELPFUL FOR YOUR UL/LI CREATION
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
  }
}

let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['wet food', 'fish toys', 'treats'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/jumper.jpeg',
  randomAgeGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1))
  },
  getAge: function(){
    this.age = this.randomAgeGenerator(3, 12)
  },
  render: function(){
    this.getAge(); // this method call will populate the random age
    // THIS METHOD WILL DO THE DOM MANIPULATION
      // ** Create the element **
    let articleElement = document.createElement('article');
    // ** ADD TO DOM ** - parent.appendChild(child)
    kittenSection.appendChild(articleElement);

    let kittenH2 = document.createElement('h2');
    kittenH2.innerText = this.name;
    articleElement.appendChild(kittenH2);

    let ageElement = document.createElement('p');
    ageElement.innerText = `Age: ${this.age} months`;
    articleElement.appendChild(ageElement);

    //  ! HELPFUL FOR YOUR UL/LI CREATION
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
  }
}

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lasers', 'hunting'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/serena.jpeg',
  randomAgeGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1))
  },
  getAge: function(){
    this.age = this.randomAgeGenerator(3, 12)
  },
  render: function(){
    this.getAge(); // this method call will populate the random age
    // THIS METHOD WILL DO THE DOM MANIPULATION
      // ** Create the element **
    let articleElement = document.createElement('article');
    // ** ADD TO DOM ** - parent.appendChild(child)
    kittenSection.appendChild(articleElement);

    let kittenH2 = document.createElement('h2');
    kittenH2.innerText = this.name;
    articleElement.appendChild(kittenH2);

    let ageElement = document.createElement('p');
    ageElement.innerText = `Age: ${this.age} months`;
    articleElement.appendChild(ageElement);

    //  ! HELPFUL FOR YOUR UL/LI CREATION
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
  }
}



// *** EXECUTABLE (executes on page load) CODE ***

frankie.render();
jumper.render();
serena.render();
