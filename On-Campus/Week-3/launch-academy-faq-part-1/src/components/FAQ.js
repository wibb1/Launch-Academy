import React from 'React'

const FAQ = props => {
let answer = props.answer

if (props.selectedStatus === false) {
  answer = null
}

return (
  <div>
    <h3>{props.question}</h3>
    <button type="button" onClick={props.setAnswerVisibilityClosure}>+</button>
    <p>{answer}</p>
  </div>
);}

export default FAQ