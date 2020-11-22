import React, { useState } from 'react';

const ChocolateList = (props) => {

  const chocolateData = [
    "Cadbury Chocolate Bar",
    "Lindt 90% Dark Chocolate",
    "Hershey's Special Dark",
    "Lily's Sugar Free Chocolate",
    "Crunch",
    "Toblerone"
  ]
  
  const [chocholateVisibility,setChocholateVisibility] = useState(false)

  let chocolateClick = (event) => {
    if (chocholateVisibility === true) {
      return setChocholateVisibility(false)
    } else {
      return setChocholateVisibility(true);
    }
  };

  let chocolateListItems = chocolateData.map((chocolate) => {
    if (chocholateVisibility === true) {
      return(
      <li> {chocolate} </li>)
    } else {
      return (null)
    }
  })

  return(
    <div id="chocolate-app">
      <h1 onClick={chocolateClick}>CHOCOLATE ONLY CABINET</h1>
      <ul>
        {chocolateListItems}
      </ul>
    </div>
  )
}

export default ChocolateList;