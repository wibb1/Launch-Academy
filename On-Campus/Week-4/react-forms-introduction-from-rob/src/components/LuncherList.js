import React from "react"
const LuncherList = props => {



//.map will cycle through each value in the {lunchers} object/ create a bulleted line item with the luncher name/ and assign them a key with the value of {luncher}
  const listItems = props.lunchers.map(luncher => {
    return <li key={luncher}>{luncher}</li>
  })

  // This return will display for us the new array of lunchers, created by our .map, in an unordered list
  return <ul>{listItems}</ul>
}

export default LuncherList
