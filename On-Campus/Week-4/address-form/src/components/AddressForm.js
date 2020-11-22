import React from "react"

const AddressForm = props => {
  return (
    <form className="callout secondary" id="shipping-address-form">
      <h1>Shipping Address</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />
      </div>

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" />

      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" />
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" />
      </div>

      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input type="text" id="zipCode" name="zipCode" />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
      </div>

      <input type="submit" className="button" value="Submit " />
    </form>
  )
}

export default AddressForm
