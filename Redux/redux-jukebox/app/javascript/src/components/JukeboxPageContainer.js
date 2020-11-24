import React from 'react'

import ArtistsIndexContainer from '../containers/ArtistsIndexContainer'
import PlaylistContainer from '../containers/PlaylistContainer'
import SongsIndexContainer from '../containers/SongsIndexContainer'

const JukeboxPageContainer = props => {
  return(
    <div className='row'>
      <ArtistsIndexContainer />
      <SongsIndexContainer />
      <PlaylistContainer />
    </div>
  )
}

export default JukeboxPageContainer
