A pangram is a sentence that uses every letter of the alphabet.

> The quick brown fox jumps over the lazy dog.

> The quick onyx goblin jumps over the lazy dwarf.

> Grumpy wizards make toxic brew for the evil queen and jack.

**This challenge is OPTIONAL**

## Getting Started

```no-highlight
et get pangram-js
cd pangram-js
open index.html
code .

> your work will go in `main.js`
```

In the browser, open up the JavaScript console. You can refresh the page in order to see your changes.

Your `main.js` file contains an array of test sentences, each of which has a `sentence` attribute (containing the text) and a `pangram` attribute (which is `true` or `false` based on whether the sentence is a pangram).

### Instructions

In this exercise, we have an array `sentences` that contains 4 JavaScript objects. Each object contains a key: value pair. Don't worry about this new object yet, for now, it's enough to simply see it in action!

For each sentence in the array, we want to be able to call an `isPangram` function on it, which will return `true` if a given sentence is a pangram, and returns `false`, otherwise.

We have provided most of the starter code in your `main.js` file. Please complete the `isPangram` function so it accomplishes our goals above!

{% show_hint %}
• create an array of all 26 letters of the alphabet  
• use the .toLowerCase() function
{% endshow_hint %}


*[Pangram - Wikipedia](https://en.wikipedia.org/wiki/Pangram)*
* [List of Pangrams](http://clagnut.com/blog/2380/)*
