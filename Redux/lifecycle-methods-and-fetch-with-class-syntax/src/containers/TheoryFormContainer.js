import React, { Component } from 'react';

class TheoryFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theoryDescription: '',
    }

    this.handleNewTheoryChange = this.handleNewTheoryChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleNewTheoryChange(event) {
    this.setState({ theoryDescription: event.currentTarget.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let formPayload = {
      theoryDescription: this.state.theoryDescription
    };
    this.props.trackNewTheory(formPayload);

    this.handleClearForm(event);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      theoryDescription: ''
    })
  }

  render() {
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <label>New Theory Description:
          <input
            name="theoryDescription"
            type='text'
            value={this.state.theoryDescription}
            onChange={this.handleNewTheoryChange}
          />
        </label>

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit New Theory" />
        </div>
      </form>
    );
  }
}

export default TheoryFormContainer;
