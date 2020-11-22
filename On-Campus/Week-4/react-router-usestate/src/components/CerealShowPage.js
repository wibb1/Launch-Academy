import React, { useState, useEffect } from "react"

import CerealInformation from "./CerealInformation"

const CerealShowPage = (props) => {
  const [cereal, setCereal] = useState({})

  useEffect(() => {
    let cerealId = props.match.params.id
    fetch(`/api/v1/cereals/${cerealId}`)
      .then(response => response.json())
      .then(fetchedCereal => {
        setCereal(fetchedCereal)
      })
    }, [])

  return (<CerealInformation cereal={cereal} />)
}

export default CerealShowPage
