# Class 09 Lecture Notes

## Events

- click
- submit(when a form is submitted)
- keypress
- hover
- mouseover
- page load

### Real world application of events

- clicking next question on a test
- saving a song to a playlist
- pressing play on a song
- google doc autosave on keypress

## Javascript Code: Event Listener

- Target an HTML element to "listen" to
- `.addEventListener()` method that takes in 2 argument
  - 1. type of event listed as string
  - 2. event handler // callback function -> a function that is passed in another function as an argument
    - WE DO NOT INVOKE CALLBACKS - the eventListener method will do that for us when it hears the event

```
let button = document.querySelector('button');
let myButton = document.getElementById('my-button');

myButton.addEventListener('click', handleClick);
```
## Javascript Code: Event Handler (Callback function)

- our handler get passed a special behind the scenes called 'event'

```
function handleClick(event){
 console.log('this button was clicked');
}
```

## OLD WAY - DON'T DO THIS
HTML
```
<button onClick='handleClick'>Click Button</button>
```
Javascript
```
button.onClick = handleClick;
```
