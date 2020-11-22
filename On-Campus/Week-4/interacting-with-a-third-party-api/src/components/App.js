import React, { useState, useEffect } from 'react';

const App = (props) => {

  useEffect(() => {
    // fetch(`api/v1/forecast?city_name=boston`)
    // .then((response) => {
    //   return response.json()
    // })
    // .then((weatherBody) => {
    //   console.log(weatherBody)
    // })
  }, [])

  return(
    <div>
      <h1>Interacting with a Third Party Api</h1>
    </div>
  )
}

export default App;
