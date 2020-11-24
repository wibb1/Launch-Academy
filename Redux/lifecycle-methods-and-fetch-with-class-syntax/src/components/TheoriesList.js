import React from 'react';

const TheoriesList = props => {
  let theoryListItems = props.theories.map(theory => {
    // the key for these elements is temporarily set to be the theory description until we have ids generated from our database
    return(
      <li key={theory.theoryDescription}>
        {theory.theoryDescription}
      </li>
    )
  });

  return (
    <div>
      <h3 className="text-center">Latest Weird Theories</h3>
      <ul>{theoryListItems}</ul>
    </div>
  );
}

export default TheoriesList;
