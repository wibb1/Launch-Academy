import React from "react"

const MilkTile = props => {
  const { name } = props.milk
  return (
    <div className="cereal">
      <h2>{name}</h2>
    </div>
  )
}

export default MilkTile
