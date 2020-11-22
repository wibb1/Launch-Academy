import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";//required to use link

const LauncherList = (props) => { 
  const [launchers, setLaunchers] = useState([]); // sets useState as an empty array in launchers and designates setLaunchers as the function to change it
  useEffect(() => { //used to prevent the continuous calling of the fetch request - useEffect limits fetch to when the page opens
    fetch("/api/v1/launchers")
      .then((response) => response.json())
      .then((launchers) => {
        setLaunchers(launchers);//this sets the state equal to the information recieved from the fetch request (an array of the launchers)
      });
  }, []);//this does not contain the error messages but it could be added

  const mapFunction = launchers.map((launcher) => {//map functin iterates through the information in state (an array of launchers)
    return (
      <li key={launcher.id}>
        <Link to={`/launcher/${launcher.id}`}>{launcher.name}</Link>
      </li>
    );//the above return creates links to each launcher using the launcher name and the launcher ID - the string interpelation creates the link from the id
  });

  return (
    <div>
      <ul>
        <h1>{mapFunction}</h1>
      </ul>

      <h4>
        <Link to="/">FAQ list</Link>
      </h4>
    </div>
  );//the above return outputs the links created by the map function and a link to the FAQ page
};

export default LauncherList;
