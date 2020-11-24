It's getting a bit quiet in here - time to set up a Jukebox!

## Getting Set Up

Run the following commands in your `challenges` directory to get set up:

```sh
et get redux-jukebox
cd redux-jukebox
yarn install
bundle install
yarn start
```

And in a second tab:

```sh
bundle exec rake db:drop db:create db:migrate db:seed
rails s
```

Be sure to take a moment to peruse the provided code. Right now, we have a number of different React containers and components, as well as a fully built-out backend. We can see that there's a `playlists` module file with a `playlists` reducer inside. This reducer has an `initialState` which is set up to hold all data we will end up needing to render our page.

## Meets Expectations Tasks

This is intended to be a longer assignment, and therefore will be broken up into "Meets Expectations" tasks (covering your main learning goals for this assignment), as well as "Exceeds Expectations" tasks should you have some extra time to work on this. You can find all of the user stories below!

### View a List of Artists

```no-highlight
As a music listener
I want to see a list of all artists in the jukebox
So I can peruse through their songs
```

Acceptance Criteria:

* The `ArtistsIndexContainer` is currently getting access to `state.playlists.artists` via `mapStateToProps`.
* Implement a `getArtists` thunk action creator such that the artists in our database are fetched when the `ArtistsIndexContainer` loads onto the page.
* Make sure you are updating `isFetching` in state throughout your fetch call.
* *Hint:* Look at `routes.rb` and the existing controllers to see what API endpoints have been provided for you!

### View Songs for a Specific Artist

```no-highlight
As a music listener
I want to see the songs for a specific artist
So I can decide what I want to play
```

Acceptance Criteria:

* The user should be able to click on an artist in the list to view their songs.
* Clicking an artist should invoke a fetch call to fetch the songs for that particular artist. These songs should be stored in the `artistSongs` array in state. Again, make sure you are updating `isFetching` in the store throughout your fetch call.
* Clicking on an artist should also update the `selectedArtistId` in state.
* Finally, the `SongsIndexContainer` needs to be connected to the store so that it has access to these new songs, in order to load the appropriate `SongTile`s onto the page.

### Add Song to Playlist

```no-highlight
As a music listener
I want to add a song to my playlist
So that I can listen to all the best music
```

Acceptance Criteria:

* Once the songs are loading on the page, you will see a `+` icon on each `SongTile`
* Clicking on this icon should add this song to the playlist by creating a new `playlist_song` in the database. Currently, this `onClick` is set up with an empty `addSong` function that needs to be filled in!
* Again, make sure you are updating `isFetching` in the store throughout your fetch call.
* This new playlist song should be added to the `playlistSongs` in state.
* *Hint:* Pay careful attention to what each of the provided API endpoints is returning to you!

### View Songs on the Playlist

```no-highlight
As a music listener
I want to see the songs in my playlist
So that I can judge whether these songs slap or not
```

Acceptance Criteria:

* Currently, the `PlaylistContainer` is mapping over `playlistSongs`, an empty array, to render `SongTile`s to the page.
* Upon initial rendering of this component, the existing songs in the playlist should be fetched from the database and stored in the `playlistSongs` array in state.
* Once this functionality is set up, this component should be updated to map over the `playlistSongs` in state.

We have now built a fully functional Jukebox to keep track of the songs we want to play - great work!

## Exceeds Expectations Tasks

Should you have some extra time, work on implementing the below additional features:

### Bartender Override

```no-highlight
As a bartender
I want to delete songs from my playlist
So that I can make sure only the best songs play
```

Acceptance Criteria:

* The `SongTile`s rendered by your `PlaylistContainer` should show a `-` icon in the same way the `SongsIndexContainer` `SongTile`s show a `+` icon
  * *Hint:* Look at the logic provided in `SongTile` to see how this could be rendered!
* Clicking on this `-` icon should delete the associated `playlist_song` from the database.
* This playlist song should be removed from the `PlaylistContainer` list of `SongTile`s without refreshing the page.
  * *Hint:* Try using `filter` in your reducer to remove only the deleted playlist song.

### Separate Concerns

```no-highlight
As a developer
I want to separate my module functionality
So that I can separate my concerns and keep my sanity
```

Acceptance Criteria:

* At this point, our `playlists` module and reducer have gotten a bit overbearing!
* Separate your code into two separate modules: `songs`, which will be responsible for displaying all artists and songs, and `playlists`, which will be responsible for displaying and updating the current playlist.
* Remember to add your new reducer inside `combineReducers`!
