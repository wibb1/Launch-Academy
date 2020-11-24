import React, { Component } from 'react';
import { connect } from 'react-redux';
import { donuts, addDonutOrder,clearForm, handleFieldChange } from '../modules/donuts'

import InputField from '../components/InputField'

class NewDonutOrderFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  calculateNewId() {
    if (this.props.donutOrderList.length === 0) {
      return 1
    } else {
      const donutIds = this.props.donutOrderList.map(donut => donut.id)
      return Math.max(...donutIds) + 1
    }
  }
  
  handleFormSubmit(event) {
    event.preventDefault()
    const newId = this.calculateNewId()

    const newDonutOrder = {
      id: newId,
      name: this.props.name,
      flavor: this.props.flavor
    }

    this.props.addNewDonutOrder(newDonutOrder)
    this.props.clearForm()
  }

  render() {
    return (
      <div className='small-6 columns'>
        <h1>Add a New Donut Order</h1>
        <form onSubmit={this.handleFormSubmit}>
          <InputField
            value={this.props.name}
            key='newName'
            label='Your Name'
            type='text'
            name='name'
            handleChange={this.props.handleFieldChange}
          />
          <InputField
            value={this.props.flavor}
            key='newFlavor'
            label='Flavor'
            type='text'
            name='flavor'
            handleChange={this.props.handleFieldChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    donutOrderList: state.donuts.donutOrderList,
    name: state.donuts.name,
    flavor: state.donuts.flavor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewDonutOrder: (donutOrder) => dispatch(addDonutOrder(donutOrder)),
    handleFieldChange: (event) => dispatch(handleFieldChange(event)),
    clearForm: () => dispatch(clearForm())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (NewDonutOrderFormContainer);
