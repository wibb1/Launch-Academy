import React from 'react';
//import { ProgressPlugin } from "webpack";
import DestList from "./DestList";

const App = (props) => {
  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          <DestList
            places={props.data.places}
            favorite={props.data.favoritePlaceId}
          /> 
        </div>
      </div>
    </div>
  );
};

export default App;
