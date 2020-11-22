import React, { Fragment } from 'react'

const Playlist = (props) => {
    //debugger
    
    let formating = ""
    if (props.selectedStatus) {
      //debugger
      formating = "selected"
    } 

    // function testclick() {
    //     debugger
    // }

    return (
        <div onClick={props.handleClick} className={formating}>
            {props.name}
        </div>
    )
}



export default Playlist