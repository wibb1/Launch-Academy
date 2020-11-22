You have sold your soul by taking a job at an ad agency to create something similar to those annoying pop-up ads! You'll be doing this challenge in React. The pop-up ad design you have been code to is below:

![pop-up-ad-base-image][pop-up-ad-base-image]

Your job is to set up React in your application and render the pop-up ad to the page! **To be specific, we do not need you to make this an actual pop-up module on the page.** Don't worry too much about the styling, just work on that if you have time!

## Setup

From your challenges directory, run the following

```no-highlight
et get pop-up-ad
cd pop-up-ad
yarn install
yarn run start
```

If you go to [localhost:8080](localhost:8080), there should be nothing displayed on the page and there should be no errors in your console.

## Instructions

### Step 1 - Initial Rendering of JSX

Setup your application to use React. By the end of this step, you should see "Hello from React Pop-up-ad" render on the page

* You'll need to `import` the correct react packages in the top of the file!
* This will involve having `ReactDOM.render` in your `main.js` which finds the `div` in your `index.html` to render React elements within.
* Be sure to add a `div` to your `index.html` that has an `id` matching the one referred to in your `ReactDOM.render`'s second argument.
* As the first argument to `ReactDOM.render`, pass in a JSX `div` element with the text "Hello from React Pop-up-ad" so that this text appears on the screen.

*Refer back to readings for code examples for a `main.js` and an `index.html` if you need help.*

### Step 2 - Your First Components

 Now that we know that the app is configured correctly, we can get coding in earnest. Ideally, any JSX we write should be in a component. Replace your initial "Hello from React Pop-up-ad" message with a stateless React component to render the HTML elements needed for the ad (refer to the original design). Your component should be in a `src/components` folder and structured something like this:

```js
// Popup.js
import React from "react"

const Popup = props => {
  return(
    <div>
    ...
    </div>
  );
};

export default Popup
```

Put some plain text into the `div` at first so you have an idea of when the React component is successfully displaying. Then, you can work to implement the JSX needed to show a form within that component. Remember, your JSX will be very nearly the same as plain HTML, and by the end of this step, the display of your webpage should be nearly the same as the wireframe provided, less styling.

#### Tips
* You need only one component to complete this step, but you may start to divide your app into more components as well. One for the pink box and message, one for the form, and one for the close icon button (the "X" button at the top right). Consider what could be reused in future ads or other apps, and think of the ad being up of distinct pieces.
* `import` statements for the files you create are relative, so you'll need to use a path that leads from `main.js` (where your import statement is written), then into the components folder, and finally to your custom component.
* Bonus: Using this link to [font awesome](http://fortawesome.github.io/Font-Awesome/icon/times/), implement a static close icon at the top-right of the ad using a font-awesome icon tag that has the right className.

### Step 3 - Child Components

Our ad isn't catchy and annoying enough, so let's give the user more options of performances they can potentially see.

* Define a new component called `PerformanceList` in a new file within your `components` folder.
* This component should display three additional performances that the user could potentially be interested in. Whatever it takes to get their email so that we can spam them with more ads!

Here are three performances we suggest, but you can decide to use your own.

```no-highlight
-  See "Weird Al Yankovic LIVE at the Somerville Theatre (first row seats are encouraged to wear bathing suits)"
-  CLAIM NOW WHILE TICKETS LAST - Keanu Reeves and Nick Offerman: A Fireside Chat
-  HEADGEAR REQUIRED: Food-fight with the Foo Fighters vs. Flight of the Conchords vs. Flo-rida (with suprise guest First Aid Kit, if things get out of hand)
```
* Your `PerformanceList` component will only appear on the screen if its rendered by `ReactDOM.render`, or another component that is already being rendered. Import `PerformanceList` into your `Popup` component and call on it in the return of `Popup` so that it displays on the screen beneath your original email form.

By the end, your app should look like the following.

![Pop-up_ad_root_image][pop-up-ad-with-list]

Additionally, the component-tree file structure should look something like this


```no-highlight
├── main.js
    ├── Popup
        └── PerformanceList
```

## Optional Bonus

### Step 4

 Now we want some behavior associated with the "X" close icon icon. When you click on the [close icon][fa-times], you should see a [confirm][mdn-confirm] box with a message asking the user to confirm that they don't want to see Taylor Swift. The pop up should remain open.

- React has a slightly different way of [handling events][react-eventhandlers] than regular JavaScript. Use a React event handler for the close button.
- Remember, when you define these event handlers as props on the React component, you need to give them a function to execute when the event happens. This function should have the behavior that you want to see.

This function could look something like this:

```js
// Popup.js
import React from "react"

const Popup = props => {
  const handleExit = () => {
    confirm("Are you sure you don't want to see Tay Sway?")
  }

  return(
    <div onClick={handleExit}>
    ...
    </div>
  );
};

export default Popup
```

### Step 5

5. Now that you have a form and a working close icon, we want to look at the form behavior. For now, submitting the form should [stop][mdn-preventdefault] the submission event and output "Form Submitted" to the console (use `console.log`) in your Chrome Developer Tools.

You are a professional front-end developer, so make sure your ad visually matches the design even though it's horrible. Again, only do this part if you feel like you have extra time! Just getting this article down without the styling is a huge accomplishment!

## Pro Tips

- [Foundation][foundation] and [Font Awesome][font-awesome] are available for you to use via a CDN.

[fa-times]: http://fortawesome.github.io/Font-Awesome/icon/times/
[font-awesome]: http://fortawesome.github.io/Font-Awesome/
[foundation]: http://foundation.zurb.com/
[mdn-confirm]: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
[mdn-preventdefault]: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
[react-eventhandlers]: https://facebook.github.io/react/docs/handling-events.html
[pop-up-ad-base-image]: https://horizon-production.s3.amazonaws.com/images/pop-up-ad/pop-up-ad-base-app.png
[pop-up-ad-with-list]: https://horizon-production.s3.amazonaws.com/images/pop-up-ad/pop-up-ad-with-list.png
