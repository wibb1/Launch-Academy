import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import CerealTile from "./CerealTile"

const CerealsIndexPage = (props) => {
  const [cereals, setCereals] = useState([])

  useEffect(() => {
    fetch("/api/v1/cereals")
      .then(response => response.json())
      .then(cereals => {
        setCereals(cereals)
      })
  }, [])

  const cerealTiles = cereals.map((cereal) => {
    return <CerealTile key={cereal.id} cereal={cereal} />
  })

  return (
    <div className="center-bg content">
      <h3 className="so-great">Cereals Are Great</h3>
      <Link to="/milks">So are milks!</Link>
      {cerealTiles}
    </div>
  )
}

export default CerealsIndexPage
