import React from "react" //This page will not be required for meets expectations but could be required for exceeds - its purpose is to create error messages on the form so the user sees the error that must be corrected
import _ from "lodash" //provides several functions that can make our lives easier - we use the capitalize function below

const ErrorList = props => {
  const errantFields = Object.keys(props.errors) //unpacks the error that the QuestionForm passed to ErrorList
  if (errantFields.length > 0) { // checks if there are any errors
    let index = 0 //sets the index to 0 so it starts with the first error
    const listItems = errantFields.map(field => { //iterates thorugh the props data 
      index++ //adds 1 to the index so it knows which error it is on - for the key below
      // code in return below is used to list each error and ensure capitalization - which requires import of lodash (above)
      return (
        <li key={index}> 
          {_.capitalize(field)} {props.errors[field]}
        </li>
      )
    })
    //return below pulls the list of errors from the map function and makes it available to the form page
    return (
      <div className="callout alert">
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return <div/>
  } // else and return return with <div/> above is required or the page breaks
}

export default ErrorList