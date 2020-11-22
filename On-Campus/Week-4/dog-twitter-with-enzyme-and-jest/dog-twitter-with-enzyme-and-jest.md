### Learning Goals

- Write Enzyme tests for React containers and components

### Getting Started

```no-highlight
et get dog-twitter-with-enzyme-and-jest
cd dog-twitter-with-enzyme-and-jest
yarn install
yarn run start
```

You should be able to visit http://localhost:8080 and see the current tweets in our Dog Twitter data file. Clicking on a tweet should select it and turn the background yellow.

## Testing Twitter (for Dogs)

The Twittersphere is great for following Celebs and Doggos. Luckily, we've invented Twitter for famous puppers. The site works great on click testing, but we need to test our React code so that we know if something breaks before the Twitterverse is deprived of FurBabies! Help us build our Enzyme test suite!

### Let's talk about code

So what's this app doing?

At the root of the `src` folder, we have a `main.js` file that is importing React, and the `data` constant that lives in the `src/constants/data` file. This data file has all of the information we'll need about our tweets and tweeters. The `main.js` file is the rendering a `TwitterFeed` component on the DOM, and passing down the imported `data` as props.

If we look at our `src/components/TwitterFeed` component, we'll see our container component. It is rendering a collection of `Tweet`s, and is keeping track of which tweet is `selected` in `state`. If a particular `Tweet` is the `selected` tweet, it is adding the `className` of `selected` to the tweet's `div`. The `selected` class is defined in `main.scss`.

In the `src/components/Tweet` component, we are creating a `div` that displays the `props` received from `TwitterFeed`, and an `onClick` event listener that is calling the `div`'s `handleClick` function to set the `selectedTweetId`.

### Your Job

We want to make sure that we can rely on the information passed down from `TwitterFeed` and displayed by the `Tweet` component. Write tests to assert that everything is working as anticipated. You should not modify the code itself in order to get a green test suite! Run all of your tests using `yarn run test`.

`TwitterFeed` should:

- Initially mount with the `selectedTweetId` set to `null`
- Render a `Tweet` component
- Pass down different props to the `Tweet` component if a corresponding `Tweet` component is clicked (using `act()`) and updated.

`Tweet` should:

- Render the html tags that we expect
- Some html tags have `props` (such as how an `img` tag has an `src` prop to store the location). Testing for these props is useful! It's great to make sure there is an image on the page, but it's even better to know that that image is the one we want it to be.

#### Tips

- If you're having trouble starting the server, try `yarn global remove webpack-dev-server`, then `yarn install` again. This will ensure that the `webpack-dev-server` dependency that comes with the assignment isn't overwritten by a version you may have globally installed on your machine.
- Remember that when you `mount` a component (such as a `Tweet` component), you can pass in any information you like to it. For instance, we can decide that for test purposes, the `name` value is `Rory`. Then we can make sure that `Rory` appears in our `expect` statements.
