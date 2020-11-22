In this exercise, you will be building the very beginnings of an app that tracks Todo items.

## Getting Started

```no-highlight     
et get dom-manipulation-practice
cd dom-manipulation-practice
open index.html
```

## Learning Goals

* Create new HTML with JavaScript
* Append new HTML to the page
* Become the JavaScript Master that is hidden within you

### Instructions

In this exercise you are provided an `index.html` and a `main.js` file.

In `main.js`, create an array named `todo` that will hold your ToDo list items. If you are feeling uninspired, here's a
list of tasks:

* Write some JavaScript
* Submit System Check
* Take a Break

Use the `todo` array to build a _HTML_ unordered list, and insert it into the page where the `ul` element with an id of `todo-list` has been provided.

{% show_hint %}
```no-highlight
>Pro Tips:  Create the todo array first. Then target the id of the ul element in your `index.html` file, and set it equal to a new variable called unorderedList. Finally, iterate over the array. For each element in the array, add an HTML list item to the innerHTML of unorderedList.
```
{% endshow_hint %}

If you'd like more information in `innerHTML` and how to use it, check [the docs!](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)  

{% show_solution %}
```javascript
let todo = [
  "Write some JavaScript",
  "Submit System Check",
  "Take a Break"
];

let unorderedList = document.getElementById('todo-list');

todo.forEach(function(todo) {
  unorderedList.innerHTML += <li> ${todo} </li>;
});
```
{% endshow_solution %}

>Be sure your code here `<li>${todo}</li>` is wrapped in back tics, or it won't work!
