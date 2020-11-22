## Introduction

We heard that you now know how to write JSX and React components, which is very convenient, because our staff got a bit confused as to how to create a new "event management app". This app is particularly important because we are making it for the CEO of the company, Narkissa von Victress. Which is a totally normal sounding name.

Flex your new React JS skills and help the team make a new event list app that satisfies the demands of our boss!

## Learning Goals

- Practice using React components
- Understand how components are imported/exported
- Understand how `props` are used and passed between components
- Render a UI on to the DOM via JSX

## Setup

From your challenges directory, run the following:

```no-highlight
et get event-manager
cd event-manager
yarn install
yarn run start
```

## Instructions

Our staff began to setup the app, but they don't know write React code like you do. As you can see at `localhost:8080`, they are quite dramatic. Pick up where they left off.

**Complete each step before moving on to the next.**

#### Step 1

One of our staff left a desperate plea for help in managing our events. Let's change the display on the screen before the boss sees it.

Where possible, we want to avoid inserting plain old JSX right in the midst of our `ReactDOM.render`, and instead separate our concerns by moving any JSX we have into a component.

- Define a new component `EventManagementApp` in a separate file of the same name: `EventManagementApp.js`
- This component should render a `div` with a `className` of `event-management-app`
- Inside that `div` let's add a `h1` tag that has the text "Now viewing your upcoming events"
- Import this component into `main.js` and ensure that it is being rendered on to the DOM

By the end, your app should look similar to the following:

![Step 1 target][step1]

#### Step 2

Alright, things are looking better, but we need to render our first few events. Our first event just came in, can you ensure it displays on the screen?

Inside of the `EventManagementApp` component, complete the following:

- Add a new `div` with the `className` of `event-tile` as a child to the existing div (the one with the className `event-management-app`)
- Ensure that this `div` renders a header with the text "Brunch with Werewolves"
- Add a `p` tag to the `event-tile` div with the text "10:00am - 12:00pm"
- _Optional:_ add an additional description in another `p` tag that the boss should keep in mind when dining with...lycanthropes. If you think she might need it.

By the end of this step, your app should look similar to the following image:

![Step 2 target][step2]

#### Step 3

More events are on their way. Can we prepare by refactoring your werewolf brunch event JSX into its own `EventTile` component?

- Create a new `EventTile` component in its own file.
- Move all of the JSX that is contained in the `event-tile` div you created (including the div itself) into the `return` of `EventTile`
- Import this component into `EventManagementApp`, and render it right where your old JSX code used to be.

At this point, your app should look exactly the same as in the last step, only now we've separated our concerns by making multiple components.

#### Step 4

New events just came in. Look, it doesn't make sense for you to hard-code this stuff directly into the JSX any more. We have to think more dynamically, so here as an array of the events the boss has on her agenda for the day. Let's add this to your `EventManagementApp` (make sure to add this above your `return`).

```JavaScript
const events = ["Brunch with Werewolves", "Strategy Meeting with the Finfolk on New Import Tariffs", "Award Ceremony for Amrita the Banshee", "Djinn Tech Support with the Qamar and Caliope"]
```

Now that this is in our `EventManagementApp`, we can disseminate each of these event titles among four different instances of our `EventTile`.

- You are already rendering the `EvenTile` once. Call on it three more times. You should see "Brunch with Werewolves" on the screen four times.
- Make the "event title" in an `EventTile` be dependent on props e.g. `{props.title}`. For each `EventTile`, pass down a single prop called `title`, but pass a different event title to each tile e.g. `title=event[0]`

_Don't worry about the description and start/end times for these new events just yet. It's okay if it still shows your Werewolf times and description._

By the end of this work, you should now see all four events rendered on the screen like so:

![Step 4 target][step4]

#### Step 5

We just got some updates to the data for the events. Looks like you'll have to make some minor updates. Here is the new data, make sure to replace the original `events` array with the following:

```JavaScript
const events = [
  { title: "Brunch with Werewolves", timePeriod: "10:00am - 12:00pm", description: null, eventType: "personal"},
  { title: "Strategy Meeting with the Finfolk on New Import Tariffs", timePeriod: "1:00pm - 2:00pm", description: "The World Wizardry Workgroup hit us hard on these tariffs.", eventType: "business" },
  { title: "Award Ceremony for Amrita the Banshee", timePeriod: "2:00pm - 3:00pm", description: "Bring earplugs, have fun.", eventType: "business-casual" },
  { title: "Djinn Tech Support with the Qamar and Caliope", timePeriod: "4:00pm - 5:00pm", description: "Computers are down, let them work their magic.", eventType: "business" }
]
```

Let's make sure each `EventTile` can render with the information found in each of these event objects. We recommend you focus on one key/value pair and one prop at a time.

- Make sure that the title prop is still being passed down to each `EventTile`, but now using the above data structure e.g. `title={events[0].title}`.
- Now do the same for the `timePeriod` and `description` properties.

_Don't worry about eventType just yet._

By the end of this work, you should now see all four events rendered on the screen like so:

![Step 5 target][step5]

#### Step 6

Nice work, but now the boss wants to be able to determine what to wear for each of these events. She is VERY particular, so make sure each meeting displays with a different color.

You'll want to make sure the `className` on each div in your `EventTile` component no longer is hardcoded to be `event-tile`, but is instead determined by flow control (using an `if...else` statement or a `case` statement)

- If the meetingType is `personal`, then the background should be green.
- If the meetingType is `business-casual`, then the background should be pink.
- If the meetingType is `business`, then the background should be light blue.

Classes have defined in `src/styles/app.css` that can easily give blue, pink and green backgrounds to an element.

By the end of this work, you should now see all four events rendered on the screen like so:

![Step 6 target][step6]

#### Step 7

Uh...so the boss...really loves her dogs. She has requested that they should appear at the very bottom of the page, below the `EventTiles`...with an inspirational quote.

Here is the image url: https://horizon-production.s3.amazonaws.com/images/challege/event-manager/event-manager-dogs.jpg

Here is the quote: "The day may be ruff, but we are here for you in spirit!"

- Create a `DogImage` component.
- Add the image and description to this component however you like
- Render the component at the bottom of the screen.

By the end of this work, you should see something similar to the following:

![Final step target][finalstep]

**That is all the boss has asked for initially, nice job and thank you!!**

## Bonus Features

Look, what you did earlier was fantastic, but if you have some extra time, could you implement the following features?

### Bonus #1

The boss needs to be reminded to take her supplements, otherwise she can get a bit cranky. Let's make a button at the top of the screen to remind her.

Create a button element in your `EventManagementApp` component that will display an `alert` message saying "Take one dose red pill, two doses of the purple pills. Take one half of your vitamin D supplement (don't take the whole thing!)"

Use your knowledge of React [event handling][react-eventhandlers] to create a function for an [alert][mdn-alert] box with this information. (Don't forget to style your button, and consider making it into its own component!)

Note: You can finish this feature using a combination of React and vanilla JavaScript event listeners, or you can use the built in `onClick` event listener. In either case, you may have to experiment or look at React event listener documentation to finish the feature.

### Bonus #2

We can DRY up our code by iterating over our list of `events` with `.map`. Use `.map` to create an array of `EventTile` components and render them on the screen. By the end, your screen should look exactly the same, but our code will be stronger AND should make adding more events easier to do in the future.

### Bonus #3

Add a button to a tile that allows the boss to make an event turn gray in color if she has completed the event.

- This button should exist on each `EventTile` component, and should be clickable.
- Clicking the button should change the background color to gray instead of whatever color it was previously.

You will want to look at how to add state in a React component in order to complete this step.

[step1]: https://horizon-production.s3.amazonaws.com/images/challenge/event-manager/step1-event-manager.png
[step2]: https://horizon-production.s3.amazonaws.com/images/challenge/event-manager/step2-event-manager.png
[step4]: https://horizon-production.s3.amazonaws.com/images/challenge/event-manager/step4-event-manager.png
[step5]: https://horizon-production.s3.amazonaws.com/images/challenge/event-manager/step5-event-manager.png
[step6]: https://horizon-production.s3.amazonaws.com/images/challenge/event-manager/step6-event-manager.png
[finalstep]: https://horizon-production.s3.amazonaws.com/images/challenge/event-manager/finalstep-event-manager.png
[react-eventhandlers]: https://facebook.github.io/react/docs/handling-events.html
[mdn-alert]: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
