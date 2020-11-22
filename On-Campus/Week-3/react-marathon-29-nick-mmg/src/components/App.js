import React from 'react'
import PlaylistCollection from './PlaylistCollection'


const App = (props) => {
  // debugger
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>

      <PlaylistCollection playlistData={props.data.playlists}/>




      
    </div>
  );
}

export default App
