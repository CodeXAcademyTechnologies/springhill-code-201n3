console.log('proof of life');

// declare/define my function. You can include parameters that take in user input.
function sayGoodbye(name){
console.log(`Goodbye ${name}`);
}

// invoke/call, pass in argument if the function has a parameter
sayGoodbye('camilla');
sayGoodbye('josh');


// if we want to pass information back to the program we can a return statement

function getFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

let joe = getFullName('joe', 'biden');
console.log(joe);

function yesOrNoPrompt(promptInfo){
  let userInput = prompt(promptInfo);
  if (userInput === 'yes') {
    console.log('you said yes');
  } else if (userInput === 'no'){
    console.log('you said no');
  } else if (userInput === 'maybe') {
    console.log('make up your mind');
  } else {
    console.log('ERROR: say yes or no please');
  }
}

yesOrNoPrompt('tell me yes or no')
yesOrNoPrompt('is it ok?')
