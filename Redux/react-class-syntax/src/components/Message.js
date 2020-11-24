import React from "react"
import { render } from "node-sass";

// const Message = props => {
//   const clickCount = 0

//   return (
//     <div>
//       <h1>Message: {props.message}</h1>
//       <h1>Click Count: {clickCount}</h1>
//     </div>
//   )
// }
// Second Format

//import React, {Component} from "react"
// class Message extends Component {
//   constructor(props) {
//     super(props)
//   }

// //   render() {
// //     const message = this.props.message
//     const clickCount = 0

//     return(
//       <div>
//         <h1>Component Message: {message}</h1>
//         <h1>Component Click Count: {clickCount}</h1>
//       </div>
//     )
//   }
// }

// Third Format
// class Message extends React.Component {
//   constructor(props) {
//     super(props)

//     this.sate = {
//       clickCount: 0;
//       message: this.props.message
//     }
//   }

//   render() {

//     return(
//       <div>
//         <h1>Component Message: {this.state.message}</h1>
//         <h1>Component Click Count: {this.state.clickcount}</h1>
//       </div>
//     )
//   }
// }

class Message extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      clickCount: 0,
      message: this.props.message
    }

    this.incrementCount = this.incrementCount.bind(this);
  }

    incrementCount(event){
      event.preventDefault()

      const newClickCount = this.state.clickCount + 1
      this.setState({clickCount: newClickCount})
    }

    render() {
      return(
        <div onClick={this.incrementCount}>
          <h1>Component Message: {this.state.message}</h1>
          <h1>Component Click Count: {this.state.clickCount}</h1>
        </div>
      )
    }
  }

export default Message
