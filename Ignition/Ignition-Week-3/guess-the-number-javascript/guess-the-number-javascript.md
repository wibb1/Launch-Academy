You've decided it's time to recreate an old classic game. Build an implementation of "Guess The Number" using the `alert` and `prompt` functions of JavaScript.

## Getting Started

```no-highlight
et get guess-the-number-javascript
cd guess-the-number-javascript
open index.html
```

This HTML will load the `main.js` file when it starts up. To verify it works, add the following to `main.js` and refresh your webpage.

```javascript
alert("Does this work?");
```

If you receive a popup, everything is hooked up correctly.

We'll be writing our code inside of `main.js`.  

Your program should do the following:

* Generate a random number between 1 and 10
* Get the user's name
* Ask the user to enter a number
* If the number equals the random number let the user know that they've won, otherwise let them know that they lost

{% show_hint %}
To generate a random number we can use the `Math.random()` method that JavaScript gives us. But because we want it to be a whole number, rather than one with decimal points, we'll also need to use `Math.floor()` To return a random whole number between 1 and 10 we could do the following:

```Javascript
Math.floor((Math.random() * 10) + 1);
```

{% endshow_hint %}
