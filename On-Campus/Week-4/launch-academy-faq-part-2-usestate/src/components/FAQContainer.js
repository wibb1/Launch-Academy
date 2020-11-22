import React, { useState, useEffect } from 'react'; //always required when using useState and useEffect

import Question from './Question'; //importing Question information
import QuestionForm from './QuestionForm'; //importing QuestionForm information

import { Link } from 'react-router-dom'; //importing Link which is used below

const FAQContainer = (props) => { //recieved props from Apps
  const [questions, setQuestions] = useState([]) //declares the questions use state, the function that will be used to change it, and sets the defalt state to an empty array
  const [selectedQuestion, setSelectedQuestion] = useState([])//declares the selectedQuestion use state, the function that will be used to change it, and sets the defalt state to an empty array

  useEffect(() => { //this prevents the fetch request from running continuously - fetch will occur on each rerender of the page if useEffect or some other event is not use to trigger it - other events include onClick-onSubmit-onChange
    fetch('/api/v1/questions') //retrieves data from the source - must correlate to the get request in server.rb (or other backend if used)
    .then(response => { // .then picks up what fetch, or another then, is putting down... it assigns that value to response (in this case) and then performs a function on it
      if(response.ok) {//this if statement is checking if the responose is acceptable and if so it returns the response, if not --
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);// --it throws an error that is caught at line 27
      }
    })
    .then(response => response.json()) // picks up response and modifies it from json to js object
    .then(response => {
      setQuestions(response) // places the object into the Question useState
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))//this catches the error and writes it to the console
  },[])

  const toggleQuestionSelect = (id) => {//this code block allows the user to close the question after they have read it
    if(id === selectedQuestion) {//if the user selects a question that is already selected
      setSelectedQuestion(null)//the state of the question is set to null
    }
    else {
      setSelectedQuestion(id)//otherwise it is set to the id of the question
    }
  }

  const setNewQuestion = (formPayload) => {//This section is responsible for the posting of a new question to the question.json file
    fetch('/api/v1/questions', {// a fetch requst that includes the method: 'POST' which will send the body: to questions.json
      method: 'POST',//this makes the fetch a post rather than a get
      body: JSON.stringify(formPayload)//this takes the information recieved from form and turns it into a json
    })
    .then(response => {//another check error message - since these are identical you could make them a function that is available throughout the FAQContainer
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);//tossing the error over the next part to below @ line 60
      }
    })
    .then(response => response.json()) // after the post the data posted is recieved back as a json and must be converted - you do this so that you maintain one source of the correct information [one truth]
    .then(body => {
      setQuestions([//we are using setQuestions to update the info in questins useState
        ...questions,//...questions is used to retrieve the current data and only overwrite the portions that are included in body 
        body
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));//you caught the error from above
  }

  const questionListItems = questions.map(question => {//map function to find the currently selected question - this is passed to the Question component in line (77)
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => { toggleQuestionSelect(question.id) //this is passed to Question - it needs to be passed as a function to the Question component and will be used there
    }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )//the above return allows information exchange the Questiion component.  The Question component will recieve the information passed down (which requires the key to work correctly and the output will be inserted here  
  })

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <div className='question-list'>
        {questionListItems}
      </div>
      <div className='question-form'>
        <QuestionForm
          onSubmit={setNewQuestion}
        />
      <h1>
        <Link to="/launchers">List of Famous Launchers</Link>
      </h1>
      </div>
    </div>
  )// the above code block outputs information iterated through in questionListItems and recieves infromation from the QuestionForm, it also passes setNewQuestion to QuestionForm as onSubmit

}

export default FAQContainer;