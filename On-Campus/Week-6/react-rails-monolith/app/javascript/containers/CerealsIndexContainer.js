import React, { useState, useEffect} from 'react'
import CerealShowContainer from './CerealShowContainer'

import CerealTile from "../components/CerealTile.js"

const CerealsIndexContainer = (props) => {
  const [cereals, setCereals] = useState([]);
  
  useEffect(() => {
    fetch("/api/v1/cereals")
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error;
      }
    })
    .then((response) => response.json())
    .then((response) => {
      setCereals(response);
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
   }, [])

   const addNewCereal = (formPayload) => {
     fetch("api/v1/cereals", {
      method: "POST",
      body: JSON.stringify(formPayload),
     })
     .then((response) => {
       if (response.ok) {
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setCereals([...cereals, body])
      })
      .catch((error) => console.error(`Errorn in fetch: ${error.message}`))
   }

  let cerealTiles = cereals.map((cereal) =>{
    return (
      <CerealTile
        id={cereal.id}
        key={cereal.id}
        name={cereal.name}
        description={cereal.description}
      />
    )
  })
 
  return(
    <div>
      <h1>hi from CerealsIndexContainer!</h1>
      <h2>{cerealTiles}</h2>
    </div>
  )
}

export default CerealsIndexContainer
