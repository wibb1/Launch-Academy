import React from "react"
const LuncherList = props => {
  const { lunchers } = props
  const listItems = lunchers.map(luncher => {
    return <li key={luncher}>{luncher}</li>
  })

  return <ul>{listItems}</ul>
}

export default LuncherList
