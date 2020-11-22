This marathon is designed to reinforce the concepts from this week. You will be creating a full-fledged stateful React application.

Note that this is a very task-based marathon. Read the instructions aloud, and keep referring back to the data that has been provided for you.

### Setup

From your challenges directory, run the following:

```no-highlight
et get react-marathon-plus
cd react-marathon-plus
yarn install
yarn run start
```

## Instructions

It's time to create our very own song app with React. It should display two lists:

- playlists that we can select
- associated songs that we can select

By the end, our React application should look something like this:

![React Marathon Final](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-7.png)

### Acceptance Criteria

- Clicking on a playlist list item should trigger that item to become highlighted, and the previously selected playlist should no longer be highlighted.
- Clicking on a song list item should also trigger that item to be highlighted. The song that was previously selected should then become un-highlighted.
- After the optional challenges are complete, you will have functionality such that changing the selected playlist should also change the songs appearing to only those in the current playlist, and the currently highlighted song to the first in that particular playlist's list of songs.

Now that we understand what our application should look like, lets get started!

If you go to <http://localhost:8080>, you should see a message saying "React Music Player".

![React Music Player Start Image](https://s3.amazonaws.com/horizon-production/images/react-marathon-start-image.png)

Take a moment to explore the code that has been provided. What has already been built for us? What stylesheets are being used? What JavaScript files have we already been given? We'll want to keep these in mind while building our application.

### Step 0.1 - Familiarization with the Code

`App.js` will be our top-level component. It is up to you to decide on how you end up using it. It may be responsible for managing state, creating some of our synthetic event functions, and even rendering our other components.

Note the file `constants/data.js`. This is where the information we wish to render into a React app is held. In the future, our React applications will receive important data via a `fetch` request, but for now it will be given to us via this file. It will be paramount that we take a moment to understand this `data` object's structure.

Foundation has been loaded into our project, allowing us to add specific classes to our JSX elements for styling should we choose.

### Step 0.2 - Planning Your React Component Tree

As a team, identify the component structure you wish to follow for your React application.

Once completed, you should have a tree-like diagram representing the components in your application. Use this as a guideline for your development, but know that your final code may be slightly different!

By the end of your planning, you should be able to answer the following questions:

- What are the necessary components for this feature?
- What responsibility will each component have?
- What behaviors does each component need to have?

### Step 1.0

First, we're just going to make sure we have access to the data being stored in `data.js`, in our top level component `App.js`.

- Load in the `data` object from the `constants/data.js`. Be sure to use your debugging tools to test that the data has been loaded into `App.js` as expected.

- Make sure that you can properly call on the playlists and songs that are being loaded in before moving on.

### Step 2.0

Now that we have our data loaded into `App.js`, let's focus on making the "PlaylistCollection" component. Later on, this component will be responsible for rendering our child `Playlist` components, and potentially manage state.

- Create a `PlaylistCollection` component to house the data for the playlist section of your app.

- First make sure it can render a header `"Playlists"` onto the page. Just to test that the component is being loaded correctly.

- Now lets also make sure that the correct data is being passed down to the `PlaylistCollection` component.  Again be sure to use `debuggers` to help check this.

- By the end your screen should look something like this:

![React Marathon Updated Step 2](https://horizon-production.s3.amazonaws.com/images/challenge/react-marathon-plus/updated-step-2.png)

### Step 3.0

While our `PlaylistCollection` component will be housing the playlist data, it shouldn't be responsible for displaying a playlist's information.  Lets create a `Playlist` component to handle this presentational aspect!  

- Create one `Playlist` component and have it render "this is a playlist"

- Ensure that it is being properly displayed on the page as a child of `PlaylistCollection`

- By the end your screen should look something like this:

![React Marathon Updated Step 3](https://horizon-production.s3.amazonaws.com/images/challenge/react-marathon-plus/updated-step-3.png)

### Step 4.0

Now lets make sure we can pass down a playlist's data down to one `Playlist` component.

- For the time being, lets only pass down the first playlist's data to our `Playlist` component. This data will have travelled from main.js, to App, through PlaylistCollection, and finally down to our latest `Playlist` component.  

- Lets update our component to  render that playlist's name on the page, so that we can confirm the data has been passed successfully.

- By the end your screen should look something like this:

![React Marathon Updated Step 4](https://horizon-production.s3.amazonaws.com/images/challenge/react-marathon-plus/updated-step-4.png)

### Step 5.0

We've rendered one playlist on the screen, but our application should be prepared to render numerous playlists as our love of music grows.

- Update the `PlaylistCollection` component to render a `Playlist` component for each and every playlist in our data set.
- There should now be multiple playlist names displayed.

The component should be able to dynamically render any number of `Playlist` components if it needs to, ideally using `.map`. `PlaylistCollection` should use the data imported from the `data.js` file to render each playlist.

- By the end your screen should look something like this:

![React Marathon Updated Step 5](https://horizon-production.s3.amazonaws.com/images/challenge/react-marathon-plus/updated-step-5.png)

### Step 6.0

Let's return to one of our acceptance criteria:

> Clicking on a playlist list item should also trigger that item to become highlighted, and the previously selected playlist should no longer be highlighted.

Discuss as a team how you will implement the feature for this step. It is okay to start with one approach, and refactor later.

Things to keep in mind:

- Each playlist needs to know when it is being clicked.
- Your app will need to have someplace to track which playlist is selected.
- You will need a way to _change_ the currently selected playlist.
- Each list item should have the power to update the record of the currently selected playlist with the proper id via an event listener.

A classname has been provided for you for styling.

```css
.selected {
  background-color: $yellow;
  width: 100%;
}
```

By the end of this step, your app should respond to clicking on a given playlist element, such that one playlist is highlighted at a time

- By the end your screen should look something like this:

![React Marathon Updated Step 6](https://horizon-production.s3.amazonaws.com/images/challenge/react-marathon-plus/updated-step-6.png)

### Step 7.0

Now on to the "Songs" section of the app!

- Create a `SongCollection` component to house the data for the song section of your app. Render this below your `PlaylistCollection` component in `App`

- Have this component render an h1 tag with the text `"Songs"`

- Ensure that only the data regarding songs is passed down to this component.

- We should have new component file and see the text "Songs" on the screen, in addition to our work for playlists.

- By the end your screen should look something like this:

![React Marathon Updated Step 7](https://horizon-production.s3.amazonaws.com/images/challenge/react-marathon-plus/updated-step-7.png)

### Step 8.0

We already know based on our tree diagram that our `SongCollection` component will eventually be responsible for creating various `Song` components, and will likely maintain selected song state. But we will need a smaller presentational component to display the song name and artist information on the screen.

- Create a `Song` component to house the data for the first song. This should render the artist alongside the song name separated by a `-`.

- This component should be a child of the `SongCollection` component, and receive the name and artist data from props.

- By the end your screen should look something like this:

![React Marathon Updated Step 8](https://horizon-production.s3.amazonaws.com/images/challenge/react-marathon-plus/updated-step-8.png)

### Step 9.0

Now that all the components have been created lets take a moment to make sure that they are being rendered on the page in the right way.

- Each section of the the app should take up a half of the page. Use the [Foundation Grid](https://get.foundation/sites/docs/xy-grid.html) to achieve the desired visual effect.

- By the end, your screen should look similar to this: ![React Marathon Step 9](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-4.png)

### Step 10.0

Getting back to our songs we have decided that one song is not enough -- let's render ALL THE SONGS!

- Update the `SongCollection` component to render a `Song` component for each song in our data set using `.map`.

The component should be able to dynamically rendering any number of `Song` components if it needs to. `SongCollection` should use the data imported from the `data.js` file to render each song.

By the end, your screen should look similar to the one below:

![React Marathon Step 10](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-6.png)

### Step 11.0

Our music app only really adds value if we can select a _song_ for playing. It's time to satisfy our final core acceptance criteria:

> Clicking on a song list item should trigger that item to be highlighted. The song that was previously selected should then become un-highlighted.

You'll want to make the same considerations that you made for highlighting a selected playlist.

**Note:** For the moment, changing a selected playlist should NOT also change a selected song. We'll get to that later in the *Optional Steps*.

By the end of this step, your app should respond to clicking on a given song element, such that one song is highlighted at a time. The same should be true for our playlists.

![React Marathon Step 7](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-7.png)

You've done a fantastic job! The core requirements are done!

## Optional Steps

Here are a list of extra challenges you can work in if you have more time for practice.

### Step 12.0

A lot of our core functionality is in place, but the two sections of our app are almost entirely independent of one another. Let's update the application to **only show the songs for the currently selected playlist.**

This step assumes that your music app is currently keeping track of which playlist is currently selected. However, because the selected playlist will now determine which songs are generated in your `SongCollection` component, **you may need to move your state to make sure that all necessary components have access to the `selectedPlaylistId`**. Once that is taken care of, you'll be able to move forward with this functionality!

Tips:

- First, gather the list of song ids for the currently selected playlist, and save them to a variable e.g. `selectedPlaylistSongIds`. You'll want to take another look at `data.js` to complete this step.
- Then, make a new array `selectedPlaylistSongs`, which holds only those songs that relate to the selected playlist.
- Finally, make sure that only those `selectedPlaylistSongs` are rendering on the page!

By the end of this step, changing a selected Playlist should also change which songs are rendered on the screen.

### Step 13.0

Let's make sure that a song and playlist are always highlighted, with a default playlist and song.

- Without editing `data.js`, upon opening the app, the first playlist of the playlists in `data.js` should be selected and highlighted.
- Without editing `data.js`, upon opening the app, the first song _of the selected playlist_ should be selected and highlighted.
- Finally, whenever you select a new playlist, the first song of that selected playlist should automatically be highlighted.

A user should be able to update their selected playlist and song as usual as well.

Once you have implemented the code from this last step, your song application is complete. EXCELLENT!
