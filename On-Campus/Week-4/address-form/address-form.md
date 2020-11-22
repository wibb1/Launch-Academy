## Introduction

In this exercise, you will convert a HTML form into a controlled React component.

## Getting Started

```no-highlight
$ et get address-form
$ cd address-form
$ yarn install
$ yarn run start
```

Open up your browser and navigate to <http://localhost:8080>. You should have no errors in your console.

## Instructions

Take a look at the `AddressForm` component. It is your job to convert this
into a collection of controlled components so that each input is managed with React state.

In order to prove to yourself that your form is wired up correctly, have the "Submit" button print the state of the Form container to the console. This state should reflect the values that a user has typed into the corresponding fields.  

## Stretch Goals (non-core)

* Write validations for the form fields and notify the user if the validations fail.
* Turn the state field into a select menu that contains all of the U.S. states.
* Submitting the address form should add this address to a running list of addresses that you maintain in state on a higher level component. 
