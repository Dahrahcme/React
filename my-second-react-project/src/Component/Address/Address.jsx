import React, { Component } from 'react'

export default class Address extends Component {
    
    this.state = {
        name: "Joseph", address: "34, Ikorodu Road"
    }

    render() {
    return (
      <div>
        <p>
            My name is {this.state.name} and i live at {this.name.address}
        </p>
      </div>
    )
  }
}
