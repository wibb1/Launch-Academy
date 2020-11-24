const { createStore } = Redux;

const initialState = {
	pirates: [
		{
			name: 'Tom Thumb',
		},
	],
	walkThePlank: [],
};

const pirateReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PIRATE:
			const newPirateArray = state.pirates.concat(action.newPirate);
			return Object.assign({}, state, {
				pirates: newPirateArray,
			});
		case WALK_THE_PLANK:
			const walkedPirate = state.pirates[0].name;
			const filteredPirates = state.pirates.filter(function(pirate) {
				return pirate.name !== walkedPirate;
			});
			const walkedThePlank = state.walkThePlank.concat({name: walkedPirate});
			return Object.assign({}, state, {
				pirates: filteredPirates,
				walkThePlank: walkedThePlank,
			});
		default:
			return state;
	}
};

const newPirateForm = document.getElementById('new-pirate-form');

const ADD_PIRATE = 'ADD_PIRATE';

const addPirateToList = (newPirate) => {
	return {
		type: ADD_PIRATE,
		newPirate: newPirate,
	};
};

newPirateForm.addEventListener('submit', () => {
	event.preventDefault();
		const name = document.getElementById('name').value;
		document.getElementById('name').value = '';
		const newPirate = { name: name };
		if (newPirate.name.length === 0) {
			alert("Ar, Yar need to name the mate first Capt'n")
		} else {
			store.dispatch(addPirateToList(newPirate));
		}
});

const WALK_THE_PLANK = 'WALK_THE_PLANK';

const walkedButton = document.getElementById('walk-the-plank');

walkedButton.addEventListener('click', () => {
	event.preventDefault();
	if(store.getState().pirates.length>1) {
			store.dispatch({
		type: WALK_THE_PLANK,
	});
	} else {
		alert("a Capt'n needs a crew sir, add a mate before tossin' yur last one!")
	}
});

const store = createStore(pirateReducer);

const pirateList = document.getElementById('current-crew');

const walkedCrew = document.getElementById('walked-crew');

const plankWalkers = document.getElementById('plank-walkers');

const render = () => {
	let newPirateList = '';
	store.getState().pirates.forEach(function (pirate) {
		newPirateList += `<li>${pirate.name}</li>`;
	});
	let newWalkerList = '';
	let count = 0
	store.getState().walkThePlank.forEach(function (pirate) {
		newWalkerList += `<li>${pirate.name}</li>`
		count += 1;
	});
	pirateList.innerHTML = newPirateList;
	walkedCrew.innerHTML = newWalkerList;
	plankWalkers.innerHTML = count.toString()
};

render();
store.subscribe(render);
