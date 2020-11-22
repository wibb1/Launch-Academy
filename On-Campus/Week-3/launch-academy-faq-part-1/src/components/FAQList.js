import React, { useState } from "react"
import FAQ from "./FAQ"

const FAQList = (props) => {
  const [answerVisibility, setAnswerVisibility] = useState(null)

  const faqList = props.faqlist.map((item) => {
    let selectedStatus = false
    if (answerVisibility === item.id) {
      selectedStatus = true
    }

    const setAnswerVisibilityClosure = (event) => {
      event.preventDefault()
      if (answerVisibility === item.id){
        setAnswerVisibility(null)
      } else {
      setAnswerVisibility(item.id)
      }
    }

    let buttonClick = (event) => {
      if (answerVisibility === true) {
        setAnswerVisibility(false)
      } else {
        setAnswerVisibility(true)
      }
    }

    return (
      <FAQ
        key={item.id}
        question={item.question}
        answer={item.answer}
        selectedStatus={selectedStatus}
        setAnswerVisibilityClosure={setAnswerVisibilityClosure}
      />
    )
  })

  return <ul>{faqList}</ul>
}

export default FAQList
