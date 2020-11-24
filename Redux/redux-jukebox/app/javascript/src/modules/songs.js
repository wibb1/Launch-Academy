const initialState = {
  artists: [],
  artistSongs: [],
  selectedArtistId: null,
  isFetching: false
}

const songs = (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTISTS_REQUEST:
      return {...state, isFetching: true}
    case GET_ARTISTS_REQUEST_SUCCESS:
      return {...state,
        artists: action.artists,
        isFetching: false
      }
    case GET_ARTIST_SONGS_REQUEST:
      return {...state,
      selectedArtistId: action.selectedArtistId,
      isFetching: true
    }
    case GET_ARTIST_SONGS_REQUEST_SUCCESS:
      return {
        ...state,
        artistSongs: action.artistSongs,
        isFetching: false
      }
    default: 
      return state
  }
}

const GET_ARTISTS_REQUEST = 'GET_ARTISTS_REQUEST'

const getArtistsRequest = () => {
  return {
    type: GET_ARTISTS_REQUEST
  }
}

const GET_ARTISTS_REQUEST_SUCCESS = 'GET_ARTISTS_REQUEST_SUCCESS'

const getArtistsRequestSuccess = artists => {
  return {
    type: GET_ARTISTS_REQUEST_SUCCESS, 
    artists
  }
}

const GET_ARTIST_SONGS_REQUEST = 'GET_ARTIST_SONGS_REQUEST'

const getArtistsSongsRequest = (event) => {
  const selectedArtistId = event.target.id
  return {
    type: GET_ARTIST_SONGS_REQUEST,
    selectedArtistId
  }
}

const GET_ARTIST_SONGS_REQUEST_SUCCESS = 'GET_ARTIST_SONGS_REQUEST_SUCCESS'

const getArtistSongsRequestSuccess = (artistSongs) => {
  return {
    type: GET_ARTIST_SONGS_REQUEST_SUCCESS,
    artistSongs
  }
}

const getArtists = () => {
  return (dispatch) => {
    dispatch(getArtistsRequest())

    return fetch(`/api/v1/artists.json`)
    .then(response => response.json())
    .then(artists => {
      dispatch(getArtistsRequestSuccess(artists))
    })
  }
}

const getArtistSongs = (event) => {
  return (dispatch) => {
    dispatch(getArtistsSongsRequest(event))

    return fetch(`/api/v1/artists/${event.target.id}/songs.json`)
    .then(response => response.json())
    .then(artistSongs => {
      dispatch(getArtistSongsRequestSuccess(artistSongs))
    })
  }
}

export {
  songs,
  getArtists,
  getArtistSongs
}