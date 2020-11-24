import React, { Component } from 'react';

import TheoryFormContainer from './TheoryFormContainer';
import TheoriesList from '../components/TheoriesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theories: []
    }
    this.trackNewTheory = this.trackNewTheory.bind(this);
  }

  trackNewTheory(theorySubmission) {
    fetch("/api/v1/theories", {
      method: "POST",
      body: JSON.stringify(theorySubmission)
    })
    .then((response) => response.json())
    .then((newlyPersistedTheory) => {
      let oldTheories = this.state.theories
      this.setState({theories: oldTheories.concat(newlyPersistedTheory)})
    })
  }

  componentDidMount(){
    fetch("/api/v1/theories")
    .then((response) => response.json())
    .then((persistedTheoriesResponse) => {
      this.setState({theories: persistedTheoriesResponse})
    })
  }

  render() {


    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Theory Tracker</h1>
          <TheoryFormContainer trackNewTheory={this.trackNewTheory} />
          <TheoriesList theories={this.state.theories} />
        </div>
      </div>
    );
  }
}

export default App;
