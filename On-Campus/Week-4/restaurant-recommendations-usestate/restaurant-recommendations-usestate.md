## Introduction

In this challenge, you will build a single-page app, similar to Yelp, for reviewing restaurants. Users should be able to submit a new review via form and see these reviews in review list.

## Getting Started

```no-highlight
et get restaurant-recommendations-usestate
cd restaurant-recommendations-usestate
yarn install
yarn run start
```

## Instructions

If you visit <http://localhost:8080>, you'll see that the app currently displays two columns:

- The left-hand column lists the restaurant we are currently viewing, including its title, location, and a small picture.
- The right-hand column is in place to house both a "new review form" and a potential reviews list.

### Part 1: Creating a List of Reviews

In `App.js`, an array of review objects (imported as `reviews`) has been imported for you to use to render a list of reviews in the right hand column.

- A `Review` component and `ReviewList` have already been created for you.
- The `Review` component is complete, you need only to pass it the right props. If you need, you may update this component however you like.
- Update the `ReviewList` component so that it renders `Review` components for each review.
- `ReviewList` should be rendered in `App`

When completed, you should be able to see each of the imported reviews on the page.

### Part 2: New Review Form

Create a form so that people can add a review. This should be in a component you define called `ReviewForm`. The form should prompt the user for the following information:

- Name
- Rating (one to five stars)
- The text content of their restaurant review

You should only be tracking user's input as they type in to the form (at first). _We will persist this new review in the next step._

##### Hints

- Start simple. Get your review form to render with the necessary fields but without state and event listeners. Then track user input.
- Display the form at the bottom of the reviews for the restaurant. You do not need to validate your form inputs.

### Part 3: Submitting New Restaurant Review and Storing in State

- Handle the form submission by saving the review to our state of `reviews` in `App`.
- Your `ReviewForm` component is a child of `App`. In order to change the state in `App` where `reviews` state is kept, you'll need to define a function in `App` that will be passed down to your `ReviewForm` component. This will allow you to pass new review information up from the `ReviewForm` to the `App` where all of the reviews are maintained.
- If you have built your app correctly, a change in state should signal a state change to `reviews`, and you will see the new review in your review list.

## Non-Core Optional

### Part 3: Restaurants List

Currently in our `constants` folder we are maintaining a list of restaurants that could be potentially be reviewed in the future!

Import this array of restaurants objects into `App.js`. Render a new `Restaurant` component for each restaurant in the `restaurants.js`. Each of these restaurants should appear vertically in the Restaurants column on the left.

Note: You may remove the hardcoded `defaultRestaurantData` found in the `Restaurant` component for this and future steps.

### Part 4: New Restaurant Form

Users shouldn't be constrained to this small list of restaurants!

- Add a second form to allow users to add restaurants to a list.
- This new restaurant form should be in its own component, and should appear above the current default restaurant "JM Curlys".
- As with the reviews form, the data should be saved to your App's state so the new additions are immediately rendered on the page.

### Part 5 (optional): Validation

You never know when your site could come under attack by malicious users. Add code to validate your inputs (ensure they are not blank) on both forms to help protect your site.

### Part 6

Users should be able to select a restaurant from the list on the left hand column, and then be able to write a review for the restaurant they selected.

- Selecting a restaurant from the list on the left should give the restaurant a background that is light blue.
- Selecting the restaurant should also trigger new props to be passed to the `ReviewForm` you have created, so that we can maintain the `restaurant_id` for the restaurant a user is making a review about.
