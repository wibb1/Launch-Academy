import React from "react"

const CerealInformation = props => {
  const { name, description, sugarContent, deliciousness } = props.cereal
  return (
    <div className="center-bg content">
      <h2 className="cereal-name">{name}</h2>
      <p>{description}</p>
      <h3>Sugar Content: {sugarContent}</h3>
      <h3>Deliciousness: {deliciousness}</h3>
    </div>
  )
}

export default CerealInformation
