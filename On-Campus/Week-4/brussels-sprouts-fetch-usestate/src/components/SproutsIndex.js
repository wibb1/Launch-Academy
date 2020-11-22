import React from 'react';
import SproutTile from './SproutTile'

const SproutsIndex = props => {

  const sprouts = props.recipes.map((recipe) => {
    return(
      <SproutTile
        key={recipe}
        recipe={recipe}
      />
    )
  })
  return(
    <ul>
      {sprouts}
    </ul>
  );
}

export default SproutsIndex;
