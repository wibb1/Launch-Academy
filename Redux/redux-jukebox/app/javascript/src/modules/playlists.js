const initialState = {
  playlistSongs: [],
  isFetching: false
}

const playlists = (state = initialState, action) => {
  switch(action.type) {
    case POST_SONG_REQUEST:
      return {...state, isFetching: true }
    case POST_SONG_REQUEST_SUCCESS:
      const newPlaylistSongs = state.playlistSongs.concat(action.song)
      return {...state, 
        playlistSongs: newPlaylistSongs,
        isFetching: false 
      }
    case GET_PLAYLIST_SONGS_REQUEST:
      return {...state, 
        isFetching: true 
      }
    case GET_PLAYLIST_SONGS_REQUEST_SUCCESS:
      return {...state,
        playlistSongs: action.playlistSongs,
        isFetching: false
      }
    case DELETE_PLAYLIST_SONG_REQUEST:
      return {...state,
        isFetching: true 
      }
    case DELETE_PLAYLIST_SONG_REQUEST_SUCCESS:
      const updatedPlaylistSongs = state.playlistSongs.filter(song => song.id != action.playlistSongId)
      return {
        ...state,
        playlistSongs: updatedPlaylistSongs,
        isFetching: false
      }
    default:
      return state
  }
}

const POST_SONG_REQUEST = 'POST_SONG_REQUEST'

const postSongRequest = () => {
  return {
    type: POST_SONG_REQUEST
  }
}

const POST_SONG_REQUEST_SUCCESS = 'POST_SONG_REQUEST_SUCCESS'

const postSongRequestSuccess = song => {
  return {
    type: POST_SONG_REQUEST_SUCCESS,
    song
  }
}

const GET_PLAYLIST_SONGS_REQUEST = 'GET_PLAYLIST_SONGS_REQUEST'

const getPlaylistSongsRequest = () => {
  return {
  type: GET_PLAYLIST_SONGS_REQUEST
  }
}

const GET_PLAYLIST_SONGS_REQUEST_SUCCESS = 'GET_PLAYLIST_SONGS_REQUEST_SUCCESS'

const getPlaylistSongsRequestSuccess = (playlistSongs) => {
  return {
    type: GET_PLAYLIST_SONGS_REQUEST_SUCCESS,
    playlistSongs
  }
}

const DELETE_PLAYLIST_SONG_REQUEST = 'DELETE_PLAYLIST_SONG_REQUEST'

const deletePlaylistSongRequest = () => {
  return {
    type: DELETE_PLAYLIST_SONG_REQUEST
  }
}

const DELETE_PLAYLIST_SONG_REQUEST_SUCCESS = 'DELETE_PLAYLIST_SONG_REQUEST_SUCCESS'

const deletePlaylistSongRequestSuccess = (playlistSongId) => {
  return {
    type: DELETE_PLAYLIST_SONG_REQUEST_SUCCESS,
    playlistSongId
  }
}

const postSong = songData => {
  return dispatch => {
    dispatch(postSongRequest())

    return fetch(`/api/v1/songs/${songData}/playlist_songs.json`,
      {
        method: 'POST',
        body: JSON.stringify(songData),
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      return response.json()
    })
    .then(song => {
      dispatch(postSongRequestSuccess(song))
    })
  }
}

const getPlaylistSongs = () => {
  return (dispatch) => {
    dispatch(getPlaylistSongsRequest())

    return fetch(`/api/v1/playlist_songs.json`)
    .then(response => response.json())
    .then(playlistSongs => {
      dispatch(getPlaylistSongsRequestSuccess(playlistSongs))
    })
  }
}

const deletePlaylistSong = (playlistSongData) => {
  return dispatch => {
    dispatch(deletePlaylistSongRequest())

    return fetch (`/api/v1/${playlistSongData}.json`,
      {
        method: 'DELETE',
        body: JSON.stringify(playlistSongData),
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      }
    )
    .then(reponse => {
      return playlistSongData
    })
    .then(songId => {
      dispatch(deletePlaylistSongRequestSuccess(songId))
    })
  }
}

export {
  playlists,
  postSong,
  getPlaylistSongs,
  deletePlaylistSong
}
