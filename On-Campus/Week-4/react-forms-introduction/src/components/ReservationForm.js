import React, { useState } from "react";

const ReservationForm = (props) => {
  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventefault()
    props.onNameSubmitted(firstName)
    setFirstName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">Your First Name</label>
        <input
          id="first_name"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input type="submit" value="RSVP" className="btn" />
      </div>
    </form>
  );
};

export default ReservationForm;
