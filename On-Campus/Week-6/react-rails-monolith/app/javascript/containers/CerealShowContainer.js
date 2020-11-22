import React, { useState, useEffect } from 'react';

import CerealShow from '../components/CerealsShow'

const CerealShowContainer = (props) => {
	const [cereal, setCereal] = useState({
		id: '',
		name: '',
		description: '',
	});

	let ID = props.match.param.id;

	useEffect(() => {
		fetch(`/api/v1/cereals/${ID}`)
			.then((response) => response.json())
			.then((body) => setCereal(body));
	}, []);

	return (
    <CerealShow id={cereal.id} name={cereal.name} description={cereal.description}/>
  )
};

export default CerealShowContainer;
