import React from 'react';
import { Link } from "react-router-dom";

const CerealTile = (props) => {
  return (
    <div class-name="article-tile">
      <Link to={`/cereals/${props.id}`}>
        <p>{props.name}</p>
      </Link>
      <hr />
    </div>
  )
}

export default CerealTile