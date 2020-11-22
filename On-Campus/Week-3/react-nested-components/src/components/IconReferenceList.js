import React from "react";
import Icon from './Icon';

const IconReferenceList = (props) => {
  const articleDescription = `These are written lessons that will walk you through
    a particular concept or technique. Don't submit anything for these!`;
  const exerciseDescription = `These assignments are intended to be small, short tasks
   that will allow you to put some of that newly acquired knowledge to work!
   You should submit solutions to all of these via ET!`;
  const challengeDescription = `These assignments are larger, and usually require you to
   put two or three of the new concepts you've learned together.
   You should submit solutions to all of these via ET!`;

  return(
    <ul>
      <Icon
        iconName="Article"
        fontAwesomeSymbol='fa-file-text-o'
        description={articleDescription}
      />
      <Icon
        iconName="Exercise"
        fontAwesomeSymbol='fa-heartbeat'
        description={exerciseDescription}
      />
      <Icon
        iconName="Challenge"
        fontAwesomeSymbol='fa-puzzle-piece'
        description={challengeDescription}
      />
    </ul>
  );
};

export default IconReferenceList;
