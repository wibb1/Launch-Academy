const { createStore } = Redux;

const initialState = {
  playerOneScore: 0,
  playerTwoScore: 0
}

const scoreReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLAYER_ONE_POINT:
      const playerOneNewScore = state.playerOneScore + 1
      return Object.assign({}, state, {
        playerOneScore: playerOneNewScore
      })
    case ADD_PLAYER_TWO_POINT:
      const playerTwoNewScore = state.playerTwoScore + 1
      return Object.assign({}, state, {
        playerTwoScore: playerTwoNewScore
      })
    default:
      return state;
  }
}

const playerOneScoreButton = document.getElementById('add-player-one-point')
const playerTwoScoreButton = document.getElementById('add-player-two-point')

const ADD_PLAYER_ONE_POINT = 'ADD_PLAYER_ONE_POINT'
const ADD_PLAYER_TWO_POINT = 'ADD_PLAYER_TWO_POINT'

playerOneScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_PLAYER_ONE_POINT
  })
})

playerTwoScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_PLAYER_TWO_POINT
  })
})

const store = createStore(scoreReducer);
const playerOneScoreSection = document.getElementById('player-one-score')
const playerTwoScoreSection = document.getElementById('player-two-score')

const render = () => {
  playerOneScoreSection.innerHTML = store.getState().playerOneScore
  playerTwoScoreSection.innerHTML = store.getState().playerTwoScore
}

render();
store.subscribe(render);