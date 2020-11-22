Practice finding elements on the DOM using JavaScript.

## Learning Goals

* Find HTML elements using `class` and `id` attributes
* Store JavaScript objects in variables


## Getting Started

```no-highlight
et get launchbook-js
cd launchbook-js
open index.html
code .
```

For this lesson, there are some fake ads along the right hand side of the page. Ad blocking extensions may detect these as actual ads and hide them, so it is recommended that you turn off ad blocking extensions while working on this lesson.

**Open the JavaScript console in Chrome so that you can follow along with the code. You can open the JavaScript console by navigating the menu bar to `View -> Developer -> JavaScript Console` or with the shortcut `cmd + option + j`.**

### Following Along

The start of this challenge provides examples - things for you to do on your own to practice the concept. You should try out each example and exercise in the browser console. Once you complete an exercise, add your code to the the `solutions.js` file. (This file is not actually run. The file is simply a place to record your answers).

### Find an Element by Type

JavaScript lets us use HTML class and id attributes to find elements that are in the DOM (on the page). The most basic way to find something with JavaScript is via the HTML element type (aka tag name).

**Example:** Find the status update form. (Paste this into the developer console and hit return.)

```javascript
document.getElementsByTagName('form')[0];
```

You should see this:
![form](https://s3.amazonaws.com/horizon-production/images/launchbook-js-1.png)

**Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.**

### Finding Elements by their ID

We can also find an element by its **id**.

Example: Find the right sidebar by its id.

```javascript
document.getElementById('sidebar-right');
```

**Exercise 2): Find the sidebar on the left by using its id. Store this element for later use by setting it equal to the variable `sideBar`.**

### Finding Elements by their Class

We can also find elements by their **class**.

Example: Find the 'Favorites' section of the sidebar by using its class.

```javascript
document.getElementsByClassName('favorites')[0];
```

**Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.**

### Finding Child Elements

We can scope our queries to child elements by chaining functions.

Example: Find all of the sections of the sidebar.

```javascript
document.getElementById('sidebar-left').getElementsByTagName('div');
```

**Exercise 4): Using the `sideBar` variable you just declared, set the text of the 'Favorites' `h5` to say "Least Favs".**

### Hiding an Element

We can set the CSS properties of elements on the page via the `style` function.

Example: Hide the status update form.

```javascript
let statusUpdateForm = document.getElementsByClassName('status-update')[0];
statusUpdateForm.style.visibility = 'hidden';
```

**Exercise 5): Find the first of the ads in the sidebar and hide it**

### Showing an Element

We can change the visibility back to what it was, initially.

Example: Show the status update form.

```javascript
statusUpdateForm.style.visibility = 'visible';
```

**Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.**

### Modifying an Element's Attributes

We can use the `setAttribute` function to modify the value of an element's attribute.

Example: Change the placeholder of the status update form's `<textarea>` `placeholder` to "What's up?!"

```javascript
document.getElementsByTagName('textarea')[0].placeholder = "What's up?!"
```

**Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.**

Here's an image source if you need one: `http://placebear.com/200/300`.

### Modifying an Element's Text

We can use the `innerHTML` property of an element to change the text content of that element.

Example: Change the text of our "Ad Slot" to "Goat Ads".

```javascript
document.getElementsByClassName('ads')[0].innerText = "Goat Ads"
```

**Exercise 8: Find Sam's post and change its text to something incredible.**

### Adding a Class to an Element

Example: Add the `.active` class to the 'Events' link in the left favorites sidebar and see it change color.

```javascript
let favorites = document.getElementsByClassName('favorites')[0];
let eventsLink = favorites.getElementsByTagName('li')[2];
eventsLink.classList.add('active')
```

**Exercise 9): Find the first post and add the `.post-liked` class to it to see the background turn blue.**

**Exercise 10): Find the second post and add the `.post-shared` class to the `li` containing the text "Share" to watch it turn red.**

#### Removing a Class

Example: Remove the `.active` class from the 'Events' link in the left
sidebar to see the color change back.

```javascript
eventsLink.classList.remove('active');
```

**Exercise 11): Let's get rid of that terrible red - remove the `.post-shared` class from the second post.**
