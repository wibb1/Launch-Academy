import React, { Component } from 'react'
import { connect } from 'react-redux'

import SongTile from '../components/SongTile'
import { getPlaylistSongs, deletePlaylistSong } from '../modules/playlists'

class PlaylistContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const playlistSongs = this.props.playlistSongs

    const songTiles = playlistSongs.map(playlistSong => {
      const deletePlaylistSong = () => {
        this.props.deletePlaylistSong(playlistSong.id)
      }
      return(
        <SongTile
          key={playlistSong.id}
          song={playlistSong.song}
          type='delete'
          handleClick={deletePlaylistSong}
        />
      )
    })

    return(
      <div className='columns small-10 medium-4'>
        <h1>Current Playlist</h1>
        {songTiles}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlistSongs: state.playlists.playlistSongs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlaylistSong: (songId) => dispatch(deletePlaylistSong(songId))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (PlaylistContainer)
