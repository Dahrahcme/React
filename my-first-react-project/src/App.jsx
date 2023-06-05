import React, { Component } from 'react'
import "./"


export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: "black"
    };
  }

  //method used to update the background color
  updateBackgroundColor(color) {
    this.setState(
      (this.state = {
      backgroundColor: color
      })
    );
  }


  render() {
    return (
      <div>App</div>
    )
  }
}

export default App


  render() {
    return (
      <div 
        style={{
          height: "100svh", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          padding: "20px",
          backgroundColor: this.state.backgroundColor
        }}
      >
        <input type="text" style={{borderColor: "blue"}} onChange={(e) => this.updateBackgroundColor()} />

      </div>
    )
  }