It's time to show your stuff!

## Getting Started

Open up the terminal and use the following instructions to get started.

```no-highlight
cd ~/challenges      
et get firefly-forever-js
cd firefly-forever-js
```

Open the `firefly-forever-js` **project folder** in your editor.

Open the `firefly-forever-js/index.html` file in your browser.

Open the Developer Console with `Command + Option + J`

### Instructions

Everyone knows that [Firefly](https://en.wikipedia.org/wiki/Firefly_(TV_series)) is one of the best shows to ever air in the history of always.

We sometimes gets our Firefly quotes mixed up though, ("'I'm a lion on the wind, watch how I roar-' that's the quote, right?").

To help each other out, we have created an array of some of the crew member names and a complex data structure with quotes.

One array contains crew names, and the other contains sets of quotes from the show. The index of each crew member corresponds to the index in which their quotes reside in the quotes array. For example, `crewMembers[0]` is `"River"` and her quotes are located at `quotes[0]`.

Let's answer these questions with JavaScript functions!

### Meeting Expectations Requirements

You must write at least one function for each question, but feel free to define other 'helper' functions that are called in your _answer_ functions. This is especially useful if you have code that repeats.

Below the functions in `code.js`, we've supplied calls to `console.log` to guide your programming. To use these sample function calls, you must implement the functions to return the expected results. If you implement the functions correctly, you should not have to modify any of the code below them.

* How many quotes does Mal have? Write a function called `numberOfQuotes` that takes one argument, the name of a character. This function should return the number of quotes that character has. If your function is set up properly you should be able to call `numberOfQuotes("Mal")` and `numberOfQuotes("Zoe")`, and achieve output based on the sample code provided:

Expected output:

```no-highlight
Mal has 5 quotes.
Zoe has 6 quotes.
```

* Which character said `"I am a leaf on the wind. Watch how I soar."`? Write a function called `whoSaidThis` that takes one argument, the quote. This function should return the name of the character. If your function is implemented properly, you should be able to call `whoSaidThis("I am a leaf on the wind. Watch how I soar.")` and `whoSaidThis("Let's be bad guys.")` and get output based on the sample code provided:

Expected output:

```no-highlight
Wash says: I am a leaf on the wind. Watch how I soar.
Jayne says: Let's be bad guys.
```

* What is River's longest quote? Write a function called `longestQuote` that takes one argument, the name of the character. This function should return the a string that is the longest quote from the provided name, and get output based on our sample code provided:

Expected output:

```no-highlight
River's longest quote is: Now they see the sky and they remember what they are.
Book's longest quote is:  A government is a body of people, usually, notably ungoverned.
```

* What is Zoe's average quote length? Write a function called `averageQuoteLength` that takes one argument, the name of the character. This function should return a number that represents the average length of all their quotes. If your function is implemented properly, you should be able to call `averageQuoteLength("Zoe")` and get output based on our sample code provided:

Expected output:

```no-highlight
The average length of Zoe's quotes is: 40.
```

{% show_hint %}

* Since we're comparing two arrays (`crewMembers` and `quotes`) that we know to be in associated orders, think about how you can use an `index` of something in one array to find the associated value in another array!
* `Math.round()` may help with the last question. This function takes a number as an argument and rounds to the nearest integer.

```javascript
let max = Math.round( 17.49);
console.log(max);
//=> 17
```

```javascript
let max = Math.round( 17.50);
console.log(max);
//=> 18
```

* `Math.min()` and `Math.max()` may help. These functions take a series of numbers as arguments and return the smallest and largest numbers in the argument list, respectively:

```javascript
let max = Math.max(1, 4);
console.log(max);
//=> 4
```

{% endshow_hint %}



