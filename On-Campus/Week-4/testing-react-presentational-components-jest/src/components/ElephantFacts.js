import React from "react"

const ElephantFacts = props => {
  const articleUrl = "https://www.buzzfeed.com/danieldalton/elephant-facts"

  const facts = [
    "A mother elephant will select several babysitters to care for the calf so that she has time to eat enough to produce milk.",
    "Elephants have been documented showing altruism toward other species, such as rescuing trapped dogs at considerable cost to themselves.",
    "Elephants can recognize themselves in a mirror.",
    "Elephants have a more developed hippocampus, a brain region responsible for emotion and spatial awareness, than any other animal. Studies indicate that they are superior to humans in keeping track of multiple objects in 3D space.",
    "Elephants commonly show grief, humor, compassion, cooperation, self-awareness, tool use, playfulness, and excellent learning abilities."
  ]

  const factItems = facts.map((fact, index) => <li key={index}>{fact}</li>)

  return (
    <div className="center">
      <h1>
        <a href={articleUrl} target="_blank">
          Here's some elephant facts!
        </a>
      </h1>
      <ul>{factItems}</ul>
    </div>
  )
}

export default ElephantFacts
