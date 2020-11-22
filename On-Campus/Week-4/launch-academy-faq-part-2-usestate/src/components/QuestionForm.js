import React, { useState } from 'react';//imports useState to allow use below
import _ from "lodash"//imports lodash (special formating) to use for errors below

import ErrorList from "./ErrorList"//imports the ErrorList (will not be required on the system check - i'm betting that it will be part of the exceeds)

const QuestionForm = (props) => {//imports the props passed down from above - onSubmit which is setMNewQuestion which is used to begin the fetch POST 

  const [newQA, setNewQA,] = useState({//sets the useState to empty for the form - this is the information that will be completed when filling out the forma and submitted using fetch POST 
    question: "",
    answer: ""
  })
  const [errors, setErrors] = useState({})//sets errors (getter) as an empty object and creates setErrors (setter)


  const handleChange = event => {//this gets the existing information in the newQA state and concats the information entered into the forms
    setNewQA({
      ...newQA,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmit = (event) => {//creating an onSubmit handler to transmit informatiion to the FAQContainer page
    event.preventDefault()//prevents the page loading when the button is clicked
    if (validForSubmission()) {//calls the function below validForSubmission - which checks if there are any errors
      props.onSubmit(newQA)//if not it gets onSubmit from the props, which is the setNewQuestion setter from FAQContainer
      setNewQA({//sets newQA to empty - clears the form on a valid submission - there is no feedback to the user - might want to (alert) 
        question: "",
        answer: ""
      })
    }
  }

  const validForSubmission = () => {//test for the submission of a valid form - checks both fields to see if something was entered using forEach
    let submitErrors = {}
    const requiredFields = ["question", "answer"]
    requiredFields.forEach(field => {
      if (newQA[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)//sets the useState errors 
    return _.isEmpty(submitErrors)//submits the errors if any are there
  }

  return (
    <div>
      <form onSubmit={onSubmit}>

        <ErrorList
          errors={errors}
        />

        <label htmlFor="question">New Question:</label>
        <input
          type="text"
          value={newQA.question}
          id="question"
          name="question"
          onChange={handleChange}
        />
        <label htmlFor="question">New Answer:</label>
        <input
          type="text"
          value={newQA.answer}
          id="answer"
          name="answer"
          onChange={handleChange}
        />
          <input
            type="submit"
            className="button"
            value="Submit"
          />
      </form>
    </div>
  )//the form above creates 2 text entry fields and one submit button and the entery is triggered onsubmit after the function onSubmit is triggered
}

export default QuestionForm