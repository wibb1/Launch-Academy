import React from 'react';

const Question = props => {
  let answer, button, questionClass;//creates the variables answer, button, and questionClass
  if (props.selected) {//recieved the prop passed down called selected (true or false) and uses if
    questionClass = 'selected-question'//if true it assigns a bunch of css to it to show that it is selected
    button = <i onClick={props.handleClick} className='fa fa-minus-square fa-2x green' aria-hidden='true'></i>//gets the handleclick function from the level above which will be passed up to show when the state of the given question changes
    answer = props.answer//shows the answer if available
  } else {
    questionClass = 'unselected-question'//ensures that css is for unselected question
    button = <i onClick={props.handleClick} className='fa fa-plus-square fa-2x' aria-hidden='true'></i>//gets the handleclick function from the level above which will be passed up to show when the state of the given question changes
  }

  return(
    <div>
      <div className={questionClass}>
        {button}
        <h5 onClick={props.handleClick}>{props.question}</h5>
      </div>
      <p>{answer}</p>
    </div>
  )//the return above lists the questions and answer if it is the selected question
}

export default Question;
