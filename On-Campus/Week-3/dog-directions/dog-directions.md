Hi, I'm Bruce.

![alt text][bruce]

My human is well-intentioned, but sometimes needs some guidance. So I've made a list of how to do my favorite things so that my human can follow along.

We want to help Bruce better communicate with his human. Right now we have a React app that displays how to do Bruce's favorite things, but we think his human might need more guidance than that. Let's build the functionality to allow Bruce's human to highlight an individual instruction and follow along one step at a time.

## Getting Started

Run the following commands to get setup and start the Webpack server, which will compile our Javascript code and serve it to the browser:

```no-highlight
et get dog-directions
cd dog-directions
yarn install
yarn run start
```

In a separate tab, run the following commands to start your Sinatra server:

```no-highlight
bundle
ruby server.rb
```

Then navigate to `localhost:4567`

This is a React app running on top of Sinatra. Don't worry too much if it looks a little unfamiliar to have two servers running together. You should be able to complete all of the _required_ sections using just the files inside the `react` directory!

### What's going on here

Let's take a look at what the code is doing. The `main.js` file is importing a constant called `data`, which stores all of the information about Bruce's favorite things. It then renders an `InstructionsContainer` component and passes `data` to that component as `props`.

Within `InstructionsContainer`, we persist `supplies` and `directions` from within the `data` props and then `map` over each of them, returning `ItemTile`s or `StepTile`s, respectively. The component ultimately `return`s a header with the name of the activity, the `ItemTile` array, and the `StepTile` array.

## Instructions

Right now, when we boot up our app and take a look, we can see that we have a list of supplies and instructions. We currently don't have any way to interact with this page - clicking around doesn't change anything!

What we want to do is make it so that upon clicking on each individual step in our instructions, it highlights that step (and only that step!) in blue. We will do this by defining state in our app to keep track of which `StepTile` is selected. We'll walk through how we would approach this below.

### Setting the State

Let's first set up our app to track which step is selected in `state`.

- Use `useState` to create a `selectedId` piece of state with an initial value of `null`
- While iterating over our directions, declare a closure function named `setSelectedStepClosure` wrap around the invocation of our setter function (effectively freezing it WITH an id argument)
- Within `setSelectedStepClosure`, use the function returned by `useState` to set the state of `selectedId` to `stepId`
- This closure will be passed to each of our step tiles

### Changing the State with Synthetic Events

Great! Now our app can handle state, but we have to make sure that Bruce's human can change the state by clicking around.

- Uncomment the `setSelectedStepClosure` function within `directions.map`. This function doesn't take in any arguments, but when it is invoked, it will call your new `setSelectedStep` function with an input of the id of the direction currently being mapped over.

  This concept of putting one function inside another can be confusing. We need to wrap our `setSelectedStep` function like this before handing it down to a `StepTile` because each `StepTile` needs to run `setSelectedStep` with a *DIFFERENT* id *WITHOUT* actually invocating. For example, the `StepTile` for the first direction needs to run `setSelectedStep` with an input of `1`, whereas the `StepTile` for the fourth direction needs to run it with an input of `4`. Defining a function within the map allows us to use a single function (`setSelectedStepClosure`) that can call `setSelectedStep` with whichever `id` corresponds to that `StepTile`! Wrapping our setter function in this closure function gives us the versatility to preload the id argument while still being able to pass our callback function to the onClick in StepTile.

- Pass this `setSelectedStepClosure` function to `StepTile` as `props` (the same way we're currently passing down a `step`, `key`, and `id`: `setSelectedStepClosure={setSelectedStepClosure}`).
- Use the `onClick` synthetic event on the `StepTile`'s `li` element to call the `setSelectedStepClosure` function we've now passed down through props.
- At this point, you should be able to `console.log(stepId)` in the `InstructionsContainer` and see the `state` change as you click!

### Adding Dynamic Styling as Visual Feedback

We're getting really close now! Since we're good UX designers, we want to make sure that Bruce's human can actually _see_ the state being set, instead of just being able to `console.log` it. Let's turn the selected step blue to make it easy to follow along.

Try the next steps on your own, then check the hint below to see if you've got it right!

- Initialize a `className` variable within in the `directions.map` function using `let` (we need to be able to reassign its value, as we'll see in the next step).

- For each `StepTile`, we want to check whether the direction we're putting on the page is the _selected_ direction: i.e., that the `direction`'s `id` is the same as the `selectedId` stored in our `state`. If it is, we'll change the value of `className` to `selected`.

- Pass that `className` variable down as props to the `StepTile`.

The map function should now look like this:

```javascript
const steps = directions.map(direction => {
  // initialize the className variable
  let className
  // check whether the selected id is the id of this direction
  if (direction.id === selectedId) {
    className = "selected"
  }
  // no need for an `else`: we can just leave `className` as null if the ids are not equal!

  const setSelectedStepClosure = () => {
    setSelectedStep(direction.id)
  }

  return (
    <StepTile
      step={direction.step}
      key={direction.id}
      id={direction.id}
      className={className}
      setSelectedStepClosure={setSelectedStepClosure}
    />
  )
})
```


- Add the `className` attribute to the `li` in `StepTile` and set it equal to the value you just passed down through `props`.
- The styling for the `.selected` (the class named `selected`) has already been defined for you in `public/home.css`. At this point, your app should have the selected step turn blue with each click!

### Extra Challenge

Let's refactor to use `fetch` to get our data instead of importing `data.js` into `main.js`. To get set up:

- Write an additional function `fetchData` in `InstructionsContainer` that makes a fetch request to `/api/v1/favorite_things.json`. This endpoint has been set up for you in `server.rb`, so you don't need to do anything to get it up and running (you could even visit `http://localhost:4567/api/v1/favorite_things.json` in your browser to see the data being returned by this API endpoint).
- Once the data has been fetched, it should be stored in state. This will mean you will need new invocation(s) of `useState`.
- `fetchData` should be called when the `FetchButton` is clicked. Once your state has been updated with the new data, you will want to refactor `InstructionsContainer` to read the data from your newly created state instead of from `props`.
- Once the change has been implemented, you should start out with a page with the button and no lists and then see the lists appear after the button has been clicked!

### Tips

- Remember that your component will re-render every time the changes (when you call your state setter function). Placing a `debugger` or `console.log` at the top of any callback functions or at the top of your component are good places to see what's going on.
- Remember that we **never** directly mutate a piece of `state` without using the function provided by `useState`.

[bruce]: https://s3.amazonaws.com/horizon-production/images/bruce.jpg "dog photo"
