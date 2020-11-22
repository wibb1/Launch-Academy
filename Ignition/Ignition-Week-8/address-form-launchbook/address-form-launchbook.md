Validate form fields as a user interacts with a form using JavaScript!

## Learning Goals

* Use event listeners in JavaScript to work with form submissions
* Become familiar with using JavaScript to validate form submissions
* Use JavaScript to manipulate the DOM to display specific feedback to users submitting forms
* Explore online documentation to support learning  

## Getting Started

```no-highlight
cd launchbook-js
open index.html
code .
```

### Instructions

**Be sure to use whatever online resources you can find to help you complete this challenge.**
Try [MDN!](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

We're back working with our `launchbook-js` app! Before we get started, let's create a new branch.

```no-highlight
git checkout master
git checkout -b add-form-validations
```

Now we can complete this task without messing with our prior code.

We have a form at the bottom of our page in `index.html`. Use JavaScript to validate all the fields in that Mailing Address form. It should alert the user if the form has any empty fields when the user clicks the **Submit** button.
Let the user know that those currently empty fields are required by manipulating the `document`, or DOM.

Here's an example of what your errors might look like after a user submits a partially incomplete form:

![Mailing Address Form](https://s3.amazonaws.com/horizon-production/images/shipping-address-form.png)

### Retrieving Values from Form Inputs

You can use the `document.getElementById()` method to retrieve individual elements in the DOM.
Combining this with the `.value` attribute will retrieve the data within a particular form field:

```html
<!-- html -->
<label for="last-name">Last Name:</label>
<input type="text" id="last-name" name="lastName" />
```
```javascript
// javascript
let lastName = document.getElementById('last-name').value
```

Another way to traverse the DOM is via the `name` attribute:

```html
<!-- html -->
<form id="mailing-address-form" name="mailingAddressForm" action="#" method="post">
  <label for="first-name">First Name:</label>
  <input type="text" id="first-name" name="firstName" />
</form>
```
```javascript
// javascript
let addressForm = document.mailingAddressForm
let firstName = addressForm.firstName.value
```

Experiment with these approaches in your browser's JavaScript console.

### Adding an Event Listener to the Form Submit Event

When a user clicks the **Submit** button, we need to prevent the form from submitting and first validate that the user has filled out the form completely.
We can do this with the `.addEventListener` method.

```javascript
let addressForm = document.mailingAddressForm
addressForm.addEventListener('submit', (event) => {
  event.preventDefault()
  // check if form is valid, here
})
```

### Notifying the User

There are a number of ways to do this -- here's a few ideas!

* Create an unordered list, listing the fields the user has left empty, and insert it into the document.

* Add elements to the page, notifying the user which fields are missing. A pre-styled class, `error`, exists if you wish to take this route.

> Pro Tip: Check out the [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property docs!

### When You're Done

Now we can go ahead and commit your work to this branch.

```no-highlight
git add .
git commit -m "your message here!"
```

Great job!
