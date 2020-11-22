import React from 'react'
import { Link } from 'react-router-dom'
// import BackButton from './BackButton'

const NavBar = props => {
  return (
    <div>
      {/* <BackButton /> */}
      <Link to='/'>All Cereals</Link>
      {props.children}
    </div>
  )
}

export default NavBar