class Track {
  constructor (album_id, id, title, trackNumber, durationMS){
    this.albumID = album_id
    this.id = id
    this.title = title
    this.trackNumber = trackNumber
    this.durationMS = durationMS
  }
}

module.exports = Track;