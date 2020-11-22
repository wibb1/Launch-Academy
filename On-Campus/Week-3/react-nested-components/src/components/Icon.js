import React from "react"

const Icon = props => {
  const iconClass = "fa fa-2x fa-fw " + props.fontAwesomeSymbol
  const iconName = props.iconName
  const descriptionAlert = () => alert(props.description)

  return (
    <li onClick={descriptionAlert}>
      <i className={iconClass} /> - {iconName}
    </li>
  )
}

export default Icon