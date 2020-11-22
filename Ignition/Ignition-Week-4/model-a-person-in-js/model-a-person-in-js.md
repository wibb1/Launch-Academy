## Introduction

In this exercise, you will model a person using objects.

## Getting Started

```no-highlight
cd ~/challenges
et get model-a-person-in-js
cd model-a-person-in-js
```

Write your code in the `person.js` file.

## Instructions

Using **object literal notation**, create a JavaScript object to describe yourself. Your object should include the following properties:

* firstName
* lastName
* hometown
* occupation
* catchPhrase

Don't forget to provide values for these properties.

Once you have that working, add a `name` method that combines the object's `firstName` and `lastName` properties with a space in between.

Verify that your new object is syntactically correct by printing it to the console using `console.log()`. You can then execute your code using `node`.

```no-highlight
$ node person.js
```

{% show_hint %}
Object literal notation uses the curly-braces to create a new object: `{}`.
{% endshow_hint %}

{% show_solution %}
```javascript
let batman = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  hometown: 'Gotham',
  occupation: 'Batman',
  catchPhrase: 'Where is it?!?',
  name() {
    return this.firstName + " " + this.lastName
  }
}

console.log(batman)
console.log(batman.name())
```
{% endshow_solution %}
