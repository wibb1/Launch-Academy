import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import ErrorList from '../components/ErrorList';

const CerealFormContainer = (props) => {
	const [newCereal, setNewCereal] = useState({
		name: "",
		description: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		setNewCereal({
			...newCereal,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (validForSubmission()) {
			props.Onsubmit(newCereal);
			setNewCereal({
				name: "",
				description: "",
			});
		}
	};

	const validForSubmission = () => {
		let submitErrors = {};
		const requiredFields = ['name', 'description'];
		requiredFields.forEach((field) => {
			if (newCereal[field] === "") {
				if (newCereal[field].trim() === "") {
					submitErrors = {
						...submitErrors,
						[field]: 'is blank',
					};
				}
			}
		});
		setErrors(submitErrors);
		return _.isEmpty(submitErrors);
  };
  const clearButton = (event) => {
    event.preventDefault()
    setNewCereal({
      name: "",
      description: ""
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <ErrorList errors={errors} />

      <label>
        Cereal Name:
        <input
          type="text"
          value={newCereal.name}
          id="name"
          name="name"
          onChange={handleChange}
        /> 
      </label>
      <label>
        Cereal Description:
        <input
          type="text"
          value={newCereal.description}
          id="description"
          name="description"
          onChange={handleChange}
        />
      </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <input className="button" type="clear" value="Clear" />
      </div>
    </form>
  )
};

export default CerealFormContainer
