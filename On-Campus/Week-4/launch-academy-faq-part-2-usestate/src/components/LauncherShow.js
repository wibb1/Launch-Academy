import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";//required for the Link used below

const LauncherShow = (props) => { //recieved props from the page itself in the form of params (ruby)  the props in this case are an object with many different pieces however we want the match.params.id to use below

  const [launcher, setLauncher] = useState({//this sets the use state - you should put the keys (name and state) in will be called later 
    name: "",
    bio: ""
  });

  let ID = props.match.params.id;//this is the params - we don't have to assign it like this it could be used directly in the code below

  useEffect(() => {
    fetch(`/api/v1/launcher/${ID}`) // the params are used here to construct the fetch request so that you only fetch the data you need
      .then((response) => response.json()) //converts the data from the line above into a json file
      .then((body) => setLauncher(body)); //inserts the data from the line above into our useState launcher
  }, []);

  return (
    <div>
      <h1>{launcher.name}</h1>
      <h3>{launcher.bio}</h3>

      <h4>
        <Link to="/launchers">List of Infamous Launchers</Link>
      </h4>

      <h4>
        <Link to="/">FAQ list</Link>
      </h4>
    </div>
  );//the return statement above displays the dta recieved from the fetch request and links to the other pages
};

export default LauncherShow;
