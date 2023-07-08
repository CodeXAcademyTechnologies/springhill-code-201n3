'use strict';

let nums = [3, 4, 5, 8, 22];

// console.log(nums);
// console.table(nums);

let mixedArray = ['hello', 2, [1, 2, 3]];
// console.table(mixedArray);

// *** REFERENCE ELEMENTS IN THE ARRAY - BRACKET NOTATION ***

let number = mixedArray[1];
// console.log(number);

let string = mixedArray[0];

let arrayInArray = mixedArray[2][0];
console.log(arrayInArray);

// *** ADDING TO AN ARRAY ***

let students = ['Josh', 'Antonio', 'Camilla'];

// console.log(students);

students[3] = 'John';
students[8] = 'Sean';
console.log(students[5]);

students.push('Bridget');
// console.log(students);
students.push('Lizzo', 'Doja');
// console.log(students);

console.log(students.length);

// *** REMOVE FROM THE ARRAY ***
// *** POP - REMOVE THE LAST ELEMENT FROM THE ARRAY***

let doja = students.pop();
console.log(doja);
console.log(students);
