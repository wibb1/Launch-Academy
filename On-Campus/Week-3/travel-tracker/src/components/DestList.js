import React, { useState } from "react"
import Dest from "./Dest"

const DestList = (props) => {
  const [strikeThru, setStrikeThru] = useState(null)
  let beautMsg
  const mapFunction = props.places.map((item) => {
    
    let selectedStatus = false

    if (strikeThru === item.id) {
      selectedStatus = true
    }

    if (strikeThru === item.favorite) {
      beautMsg = <div className="beauty">"What a Beauty"</div>
    }

    const handleClick = () => {
      event.preventDefault()
      if (strikeThru === item.id) {
        setStrikeThru(null)
      } else {
        setStrikeThru(item.id)
      }
    }

    return (
      <Dest
        key={item.id}
        name={item.name}
        selectedStatus={selectedStatus}
        handleClick={handleClick}
      />
    )
  })
  return (
    <div className="box-div">
      {mapFunction}
      {beautMsg}
    </div>
  )
}

export default DestList
