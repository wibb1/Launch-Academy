We've decided to make a website that can make the world a better place: specifically, by bringing joy to people by sharing our favorite puppy GIFs with them!

## Setup

To get started, run the following:

```
et get redux-dog-gifs
cd redux-dog-gifs
open index.html
```

Once the webpage is opened, you should see a header and a form that takes in a URL and rating and submits. You should have no errors in your console.

## User Stories

```no-highlight
As a user
I want to see adorable puppy GIFs
So I can have my day brightened
```

Acceptance Criteria:
* All GIFs in state should be rendered to the page.
* An `initialState` has already been provided which includes your first GIF, so you will need to implement a `render` method which can render it to the page.
* The numbered Rating as well as the GIF itself should both appear on the page.

```no-highlight
As a user
I want to be able to add puppy GIFs
So that I don't lose track of the awesome GIFs I find
```

Acceptance Criteria:
* A user should be able to fill in the existing form and have GIFs added to the page upon submit.
* When a user hits submit, you should be able to grab the data they input and save it to your store, so that the page updates with the new GIF.

#### Tips

- Review all of the code that you've been given before starting to build your own. We have provided you with all necessary HTML as well as some of your Redux setup, action types, and action creators, so be sure to review those fully before getting started.
- Remember to invoke your `render` method and use `subscribe` to connect it to your `store` - look back at the article if you need examples!
- If you don't happen to have puppy GIFs at your disposal at all times (what kind of monster ARE you?!), here are a few of our favorites. They are all, obviously, 5-star ratings.
  * https://media.giphy.com/media/mokQK7oyiR8Sk/giphy.gif
  * https://media.giphy.com/media/VFDeGtRSHswfe/giphy.gif
  * https://media.giphy.com/media/3ohzdYGKrPn8GzgAes/giphy.gif
