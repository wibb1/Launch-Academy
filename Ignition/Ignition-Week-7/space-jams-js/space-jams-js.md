Build an app that converts a complex data structure into JavaScript Objects, using classes to organize your code.

**Read the directions all the way through before beginning the challenge**

## Getting Started
```no-highlight
et get space-jams-js
cd space-jams-js
node runner.js
```

### Instructions

Executing `runner.js` the first time should produce an error.
Your task is to build out an Album class (in the `album.js` file provided) that `runner.js` interacts with.
The ultimate goal of the challenge is to successfully execute `runner.js` and have each album's information output to the command line in the following format:

```no-highlight
Name: Space Jams
Artist(s): Tony Wrecks
Duration (min.): 41.45
Tracks:
- Bout My Bread
- Grindin Skit
- Drop It In Tha Bank
- Batter Up
- I Get Toe Up
- My Drop
- Heavyweights
- Preapproved - Freestyle
- Soldiers
- Don't Wanna See Me
- Lookin Clean
- One For Tha Money
- Toe Up Slowed And Chopped
- Swagger Up Slowed And Chopped
```

The challenge's `space_jams_tracks.js` file stores a list of tracks in the constant `TRACKS`. You do not need to make any changes to the `space_jams_tracks.js` file. You'll want to take a look to see what the `runner.js` file is doing for you when it accesses the `TRACKS` constant. It reads in the track data, creates a new `Album` object for each album in the data, and prints out the summary for each album:

```js
// runner.js
let Album = require('./album');
let TRACKS = require('./space-jams-tracks`');

let albums = []

TRACKS.forEach((track) => {
  // find an album by matching the album.id with track[:album_id]
  let album = albums.find(album => album.album_id === track.album_id)

  // if the album hasn't been added to the albums array yet, add it
  if (album === undefined) {
    album = new Album(track.album_id, track.album_name, track.artists)
    albums.push(album)
  }

  // add the track to the album's tracks property
  album.tracks.push(track)
})

// print out the summary for each album
albums.forEach((album) => {
  console.log(album.summary())
})

```

You should *not* edit this file unless you are attempting the extra challenge.

For _this_ portion of the challenge, just focus on creating an `Album` class with the necessary instance methods. Be attentive to the data structure(s) you're working with!

Your `Album` class should have the following properties:

* `id` - returns the ID of the album
* `title` - returns the title of the album
* `artists` - returns the name of the artist(s) on the album
* `tracks` - returns an array of objects representing each track on the album
* `durationMin` - returns the duration of the album in minutes (`durationMs` from the data is duration in milliseconds)
* `summary` - __returns a string__ of summary information in the format specified in the example above. No  `console.log` statements should exist in this method! That is a job delegated to the `runner.js` file.

### Tips

**If you're having trouble getting started, ignore the tracks to start**. Build an `Album` class that has only `id`, `title`, and `artists` properties, and a summary method that prints out just album name and artists:

  ```no-highlight
  Name: Space Jams
  Artist(s): Tony Wrecks
  ```

Then you can add a `tracks` property and populate each album's `track`'s property when you iterate through the track data to create your `albums` .

Finally, you can write the `durationMin` method and modify your `summary` method to return duration and track information.

Use the `\n` newline character as needed to properly format the string your `summary` will return.

When you use multiple files to hold your classes, remember that you must `require 'filename'` at the top of any *other* file where you want access to the class. For example, if you create an `Album` class within an `album.js` file, add `require 'album'` to import that class. You must also *export* the class by adding the line `module.exports = 'classname'` to the bottom of that class file.

### Extra Challenge

You know what would be nice? If tracks were their own class!.

Add a `Track` class (and a `track.js` file to put it in). A track should have the following properties:

- `albumId`
- `id` (`track_id` in the data)
- `title`
- `trackNumber`
- `durationMs` (duration in milliseconds)

Modify the `runner.js` file so that instead of adding the track object directly from the data to the `album.tracks` array, it creates a `Track` object first and then adds that to the album instead. Change your `Album` class so album duration is calculated using the methods from the `Track` class. (*Hint* You'll need to `require` your new `track.js` file anywhere you use the `Track` class.)
