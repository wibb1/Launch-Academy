import React, { useState } from 'react'
import TextField from './TextField'

const FormContainer = (props) => {
  const [name, setName] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = {
      book: {
        name: name
      }
    };
    props.addBook(formPayload)
    setName("")
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <form className="callout" onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={name}
        label='Book Title'
        name='name'
        onChange={handleChange}
      />
      <input className="button" type="submit" value="Submit" />
    </form>
  );
}


export default FormContainer;
