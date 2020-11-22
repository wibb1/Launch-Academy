### Getting Started

```no-highlight
$ et get javascript-promise-api
$ cd javascript-promise-api
```

### Learning Goals

* Define **callback functions**, and examine some examples of them.
* Learn how to utilize JavaScript **Promises** to handle the complexity of dealing
  with asynchronous programming.

### Introduction

JavaScript is a programming language that treats functions as [first-class
citizens](https://en.wikipedia.org/wiki/First-class_citizen). This simply means
that functions are extremely flexible in JS: a function can be assigned to a variable, a function can be passed as an argument into other functions, and a function can be returned from a function.  Some functions are built into JavaScript, like `console.log()`. Other functions are constructed by you, the developer, in such syntax as follows:
```javascript
let myFunction = (argument) => {
  //something happens
}
```
This is known as a **named function**, since, obviously, it has the name of `myFunction`.

JavaScript also supports **asynchronous** programming. If we know that a process
might take some time (e.g. - reading a file, downloading an image, requesting data
from a database), we can ask JavaScript to handle this asynchronously, and
specify a **callback function** to execute later. When the asynchronous task
completes, the callback function is then executed. In pseudocode, this  might look like:
```javascript
if (/*download finishes*/) {
  alert("Download complete!")
}
```
Asynchronous programming is a hugely useful programming paradigm.  It is a pattern built into JavaScript and other languages designed to, among other things, prevent the "lock up" of the browser or the current "thread" of execution.

The problem here is that the asynchronous request may not be successful. What
happens when our code fails, or never gives a return value? Often, in order to
handle the many possibilities that could occur, code would become a nested mess
of conditionals such as `if` statements, colloquially known as **callback hell**, or **the Pyramid of
Doom**.

![Pyramid of Doom](https://s3.amazonaws.com/horizon-production/images/pyramid-of-doom.jpg)

Luckily for us, JavaScript has evolved a pattern to deal with this complexity.

### A Simple Callback Example

What **is** a callback function? To generalize this concept, a **callback** is a function that we expect to be
called by our code at some point in the future, once some other stuff happens first.

The JavaScript `setTimeout()` function is an example of a function that takes a
**callback** function as an argument. Simply put, `setTimeout()` lets us execute yet
another function at a specified point in the future.

Go ahead and try out the following example in the JavaScript console.

```no-highlight
let delay = 3000

window.setTimeout(() => {
  alert(`setTimeout() was called ${delay}ms ago.`)
}, delay)
```

`setTimeout()` is given two arguments: first, a callback function (`alert()`),
and second, the time to wait before executing that function.

To understand the asynchronous nature of this example, let's change our `setTimeout()` and add another line. Here, we will tell our first `console.log()` to delay by one second, and our second `console.log()` to not delay at all.

```no-highlight
window.setTimeout(() => {
  console.log("I'm the callback!")
}, 1000)

console.log("I'm called second, but appear first.")
```
The `setTimeout()` is called first, but the second `console.log()` is executed first. The call to
`window.setTimeout()` is **non-blocking**, meaning that execution of code
continues without us having to wait a full second for `"I'm the callback!"` to show up in the console.


### A Simple Promise

As we stated earlier, handling the conditions that arise from asynchronous code
can be hazardous. Instead of using numerous, nested `if..else`
statements to handle the many cases that can arise -- which can get messy! -- we can utilize the [**JavaScript
Promise API**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to avoid the dreaded Pyramid of Doom.

```no-highlight
new Promise((resolve, reject) => {
  // do something asynchronously

  if (successful) {
    resolve()  // .then() is executed
  } else {
    reject()   // .catch() is executed
  }

}).then(handleSuccess())  // process data, add elements to the DOM, etc...
  .catch(handleError())   // show user an error message, retry network request, etc...
```

The key items to note in this example are...

* `Promise`, `resolve`, and `reject` are all defined by the JavaScript Promise API.
* `resolve`, and `reject` are functions, which should be called to trigger `.then()`
  and `.catch()`, respectively.
* `handleSuccess` and `handleError` are functions we need to define.


### The Language of Promises

Since a promise describes something that _may_ happen in the future, it can be
in one of several states.

* **fulfilled** - This is the successful state of a promise. `resolve()` will be
  called and the `.then()` branch of the promise will be executed.
* **rejected** - This is the failure state of a promise. `reject()` will be
  called and the `.catch()` branch of the promise will be executed.
* **pending** - The promise has neither been fulfilled or rejected.
* **settled** - The opposite of pending. The promise has either been fulfilled
  or rejected.


### Working With Files

Let's move away from the browser for a moment to experiment with Promises.

"File I/O" is a fancy way of saying "reading from, or writing to files." Since
this process has the potential to take a long time to execute (large file size),
or has the potential for error (file does not exist, corrupt file format), it is
a good use case for Promises.

We will be working with `JSON` (JavaScript Object Notation) data a lot! JSON is a text format that is completely *language independent* and built on two structures:

* A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
* An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

![JSON Example](https://s3.amazonaws.com/horizon-production/images/JSON_example.png)

First, let's look at some example code, which uses a `try...catch` block, for reading a JSON file.  Think of `try...catch` in actual physical terms.  Perhaps your code is a rock climber.  It will `try` to scale an ice-covered crag, but if, for some reason, it fails, it has a harness to `catch` it.

As a disclaimer: this is the old, and messy, way to do it! Run and play with this code, but if it's hard to follow, know that that is kind of the point. We'll be talking about the better way to do write this functionality momentarily.

In your `myPromise.js` file, you should see this code:

```javascript
import fs from 'fs'

/*(1)*/ fs.readFile('twitterData.json', 'utf8', (err, data) => {
  if (err) {  // check if there was a problem reading the file
    console.log('Error reading file.')
    console.log(err)
  } else {  // if no probs reading file, try to parse it
    try {
      /*(2)*/ let twitterData = JSON.parse(data)
      /*(3)*/ console.log(twitterData)
    } catch (err) {
      console.log('Error parsing file.')
      console.log(err)
    }
  }
})
```

This ugly mess of code funk (1) reads a file, and, if successful, (2) tries to parse it,
and, if that's successful, (3) prints the data to the console. (`fs` is the JavaScript *f*ile *s*ystem library, which contains functions for reading from and writing to files.)

See for yourself. Run:
```
$ node myPromise.js
```
If, while typing out our `fs.readFile()` function, we happen to misspell the filename as `twittrData.json` and run the file, we will get the
following message:

```no-highlight
Error reading file.
{ Error: ENOENT: no such file or directory, open 'twittrData.json'
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'twittrData.json' }
```
Now change the filename from `twittrData.json` to `invalidFormat.json` and run the file again.
If we try to parse a file that isn't properly formatted, we will get this message:

```no-highlight
Error parsing file.
SyntaxError: Unexpected token : in JSON at position 16
    at JSON.parse (<anonymous>)
    at fs.readFile (/Users/.../javascript-promise-api/readJsonFile.js:9:26)
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:528:3)
```

Our code works, but this is pretty darn complex and unreadable. We can do better.

### Read File using Promises

First, we create a `read` function, which takes in a filename, and returns a Promise. We're going to use the `resolve` and `reject` that we talked about previously. We know that `reject` is going to kick off our "error" code (anything inside of our `.catch`), so we want it to run if we encounter an error. `resolve`, on the other hand, will be our "happy path" (running anything inside of `.then`), so want to run it only if everything goes well!

Replace the code in your `myPromise.js` with the following:

```javascript
import fs from 'fs'

let read = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err))
      } else {
        resolve(data)
      }
    })
  })
}
```

Now, we can use our `read` function to read the JSON data from the file, parse it,
and output it to the page.

```javascript
read('twitterData.json')
  .then((data) => {
    let parsedData = JSON.parse(data)
    console.log(parsedData)
  })
  .catch((err) => {
    console.log("Something went wrong.")
    console.log(err)
  })
```
This promise represents the result of an asynchronous operation and will map to one of three different states: pending, fulfilled or rejected. If there is an issue with **either** the filename or parsing the data within the
file, the code within `.catch()` will be executed without even looking at the `.then()`. This saves us some lines, and
keeps us from having to put in a `try..catch` block.  You may notice that nothing is specifically being passed to our `.catch()`, and it seems that the error is magically pushed into the variable.  It's not actually quite that magical, because the `.catch()` is fired when our Promise is rejected, receiving any errors that were passed along by the `reject()`.

### Chaining

We can take this example a step further. Within the `.then()` clause, we are
parsing some data, **then** printing it to the console. Let's update our example
to use `.then` chaining.

```javascript
read('twitterData.json')
  .then((data) => { return JSON.parse(data) })
  .then((json) => { console.log(json) })
  .catch((err) => {
    console.log("Something went wrong.")
    console.log(err)
  })
```

The return value of the first `then` becomes the input for the second. If anything
goes wrong, the `catch` handles it.


### The General Promise Format

```javascript
new Promise((resolve, reject) => {
  // do something asynchronously

  if (/* things are successful */) {
    resolve("It worked!")  // execute .then()
  } else {
    reject(Error("It broke!"))  // execute .catch()
  }

})
  .then((result) => {
  // process data, add elements to the DOM, etc...
  console.log(result)

})
  .catch((err) => {
  // show user an error message, retry network request, etc...
  console.log(err)
})
```

### Wrap Up

Promises allow us to execute asynchronous code, and then handle the success
or failure of that code.


### External Resources

* [Promise Burger Party](https://fullstackjournal.wordpress.com/2018/07/06/the-promise-js-explained-i-burger-party/)
* [JavaScript Callbacks Explained Using Minions](https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd#.54m4hm8li)
* [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [Demystifying JavaScript Closures, Callbacks, and IIFEs](https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/)
* [Art of Node: Callbacks](https://github.com/maxogden/art-of-node#callbacks)
* [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
* [Promises in Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)
* [Promises - promisejs.org](https://www.promisejs.org/)
* [Understanding ES6 - Promises](https://github.com/nzakas/understandinges6/blob/master/manuscript/11-Promises.md)
