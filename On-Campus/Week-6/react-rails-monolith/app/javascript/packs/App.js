import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CerealsIndexContainer from '../containers/CerealsIndexContainer.js';
import CerealShowContainer from '../containers/CerealShowContainer';
import NavBar from '../../javascript/components/NavBar';

const App = (props) => {
	// return (
	// 	<BrowserRouter>
	// 		<Switch>
	// 			<Route exact path="/" component={CerealsIndexContainer} />
	// 			<Route exact path="/cereals/:id" component={CerealShowContainer} />
	// 		</Switch>
	// 	</BrowserRouter>
  // );
  
  return(
    <h1>Basic Header About Cereals</h1>
  )
};

export default App;
