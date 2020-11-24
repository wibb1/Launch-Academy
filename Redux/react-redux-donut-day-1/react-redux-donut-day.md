![Donut Day][donut-pile]

We're already salivating. At Launch Academy, Thursday means **Donut Day**, a.k.a. the best day of the week. The one problem with Donut Day is having to keep track of all the delicious donuts we need to buy! We're in desperate need of an app to keep track of our list for us.

## Setup

To get started, run the following:

```sh
et get react-redux-donut-day
cd react-redux-donut-day
yarn install
yarn start
```

By navigating to `http://localhost:8080`, you should see a page that looks like the below, with no errors in your console.

![React Redux Donut Day Starter App][starter-screenshot]

## User Stories

In order for our application to be fully functional, we need to get the following features finalized. Right now, we have all components displaying to the page, so be sure to review all code provided before getting started on your Redux code!

### Display existing donut orders on the page

```no-highlight
As the designated donut purchaser
I want to see a list of the donuts I need to buy
So I don't panic in the store when faced with so many delicious donuts
```

Acceptance Criteria:

- I must see a list of all donuts to buy, as well as who to deliver them to
- Each list item should be in the format: `Name: Donut Flavor` (e.g., `Homer: Strawberry frosted`)
- The list of donuts should be held in my Redux store, which I should `connect` to through my `DonutOrdersIndexContainer`

### Add a donut to the list

```no-highlight
As a Launch team member
I want to be able to add a donut to the list
So I can make sure I get my donut of choice
```

Acceptance Criteria:

- Using the new donut form, I must enter my name and the flavor of donut I want
- Upon hitting submit, my new donut order should be added to the list
- My input fields should be controlled components whose value is tracked and updated via state from the store
- My `handleSubmit` function should dispatch an `addDonutOrder` action creator that adds my new order to the store
- The `handleSubmit` function should also dispatch a `clearForm` action that clears out the state of my form

[donut-pile]: https://s3.amazonaws.com/horizon-production/images/donut-pile.jpg
[starter-screenshot]: https://s3.amazonaws.com/horizon-production/images/react-redux-donut-day-starter-app.png