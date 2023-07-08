# Class 03 Lecture Notes

## Arrays

- Data type. Data structure special type of object
- A collection or list of elements
  - Can be mixed, can store numbers, strings, or arrays all in the same array structure
- Don't have to determine the size of the array upon creation
- Every element will have its own position -- referred to as an index
  - Array are zero based

```
//              0      1      2        3
let array = ['hello', 'hi', 'bye', 'goodbye'];

//            0  1  2  3
let array2 = [4, 6, 8, 9];
```

- Array have methods!
  - .push() - adds an element to the end of the array
  - .pop() - removes the last element from an array
- Array property
  - .length - size of the array

## Loops
### For
- Great for execute code a certain number of time
- Great for looping through an array (array have sizes/length)

```
// anatomy of a for loop
for(starting value; condition; increment/decrement the starting value){
  code that will run until the condition is no longer true
}
```

### While
- Execute code until the condition it is given is no longer true
- Beware of infinite loops!

```
// anatomy of a while loop
while(condition){
  code that will run until the condition is no longer true
}
```
