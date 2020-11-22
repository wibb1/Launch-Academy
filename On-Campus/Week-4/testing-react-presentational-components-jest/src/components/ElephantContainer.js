import React, { useState } from "react"
import Elephant from "./Elephant"

const ElephantContainer = props => {
  const [babyElephant, setBabyElephant] = useState(false)

  const handleClick = () => {
    const nextBabyElephant = !babyElephant
    setBabyElephant(nextBabyElephant)
  }

  let image, text

  if (babyElephant) {
    image =
      "http://akns-images.eonline.com/eol_images/Entire_Site/201438/rs_560x415-140408154504-1024.baby-elephant-grass.ls.4814.jpg"
    text = "Look at the baby elephant!"
  } else {
    image =
      "https://animalcorner.co.uk/wp-content/uploads/2015/02/elephant-1.jpg"
    text = "that's a big elephant"
  }

  return (
    <div>
      <Elephant image={image} onClick={handleClick} text={text} />
    </div>
  )
}

export default ElephantContainer
