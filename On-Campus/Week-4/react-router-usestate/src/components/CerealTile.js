import React from "react"
import { Link } from "react-router-dom"

const CerealTile = props => {
  const {id, name} = props.cereal
  return (
    <div className="cereal">
      <Link to={`/cereals/${id}`}>{name}</Link>
    </div>
  )
}

export default CerealTile
