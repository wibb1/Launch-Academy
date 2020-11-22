import React, { Fragment } from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  // debugger
  return (
    <>
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <PlaylistCollection playlistData={props.data.playlists}/>
    </div>
    <div className="grid-container app">
      <SongCollection songData={props.data.songs}/>
    </div>

    </>
  );
}

export default App
