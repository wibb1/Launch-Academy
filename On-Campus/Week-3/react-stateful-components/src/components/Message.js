import React, { useState } from "react"


const Message = props => {
  const [clickCount, setClickCount] = useState(0)

  const incrementCount = (event) => {
    event.preventDefault()
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
  }

  return (
    <div onClick={incrementCount}>
      <h1>Message: {props.message}</h1>
      <h1>Click Count: {clickCount}</h1>
    </div>
  )
}

export default Message
