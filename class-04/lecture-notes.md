# Class 04 Lecture Notes

## CSS Box Model

![Box Model](./assets/box-model.png)

## CSS Positioning

2 types of positioning

- static-type
- relative-type
  - relative
  - absolute
  - fixed

### Static
standard - element sits where it is normally

### Position Relative

Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute

Same as position relative, except for two key differences: The element is taken out of normal flow and leaves no space behind. The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed

Fixed is the same as absolute with one key difference: The element is positioned relative to the viewport.

## Functions

### What is it?

  - Reusable piece of code
  - A group of statements that perform a task or calculate a value stored in a structure that prevents them from running until the function is "called" or "invoked": `myFunction()`
    - Input --> processing --> output

### Why do we use functions?

  - reuseable
  - easier to read
  - keeps our code dry - DON'T REPEAT YOURSELF
  - efficient
  - prevents bugs and makes debugging easier
  - performs actions

### 2 step process

- Define/Declare
- Call/Invoke

```
function sayHello() {
  console.log('hello');
}

sayHello();
```
