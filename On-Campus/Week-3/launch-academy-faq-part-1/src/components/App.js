import React, { useState } from "react";
import FAQList from './FAQList'


const App = (props) => {
  
  return (
      <div>
        <h1>Were here to help</h1>
        <FAQList
          faqlist={props.data}   
        />
      </div>
    );
};

export default App;
