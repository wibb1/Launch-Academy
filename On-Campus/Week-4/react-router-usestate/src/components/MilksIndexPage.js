import React, { useState, useEffect } from "react"
import MilkTile from "./MilkTile"
import { Link } from 'react-router-dom'

const MilksIndexPage = (props) => {
  const [milks, setMilks] = useState([])
  useEffect(() => {
    fetch("/api/v1/milks")
      .then(response => response.json())
      .then(fetchedMilks => {
        setMilks(fetchedMilks)
      })
  }, [])

  const milkTiles = milks.map((milk) => {
    return <MilkTile key={milk.id} milk={milk} />
  })

  return (
    <div className="center-bg content">
      <h3 className="so-great">Milks Are Also Great</h3>
      <Link to="/">But so are cereals</Link>
      {milkTiles}
    </div>
  )
}

export default MilksIndexPage
