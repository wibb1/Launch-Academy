// Do not modify this code unless you are attempting the extra challenge
let Album = require('./album');
let TRACKS = require('./space-jams-tracks');
let Track = require('./track');

let albums = []
let tracks= []
function track(track)  {
  let song_track = new Track(track.album_id, track.track_id, track.title, track.trackNumber, track.durationMS)
  tracks.push(song_track)
}

TRACKS.forEach((track) => {
  let album = albums.find(album => { return album.id === track.album_id })
  if (!album) {
    album = new Album(track.album_id, track.album_name, track.artists)
    albums.push(album)
  }
  track(track)
})
albums.forEach((album) => {
  console.log(album.summary())
})