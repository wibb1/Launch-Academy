import React, { Fragment } from 'react'
import Collection from './Collection'

const App = (props) => {
  // debugger
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <Collection 
      playlistData={props.data.playlists}
      songData={props.data.songs}
      />
    </div>
  );
}

export default App
