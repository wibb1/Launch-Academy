class Album {
  constructor(album_id, album_name, album_artist) {
    this.id = album_id
    this.title = album_name
    this.artist = album_artist
    this.tracks = []
  }

  summary() {
    let track_names = []
    let duration = 0
    let album_info = []
    let track_list = ""
    for (let i = 0; i < this.tracks.length; i++) {
      track_names.push(`- ${this.tracks[i].title}\n`)
      duration += this.tracks[i].duration_ms/1000/60
    }
    album_info.push(`\nName: ${this.title}\nArtist(s): ${this.artist}\nDuration (min.): ${duration.toFixed(2)}\nTracks:\n`)
    track_list = track_names.join("")
    return `${album_info}${track_list}`
  }
}

module.exports = Album;