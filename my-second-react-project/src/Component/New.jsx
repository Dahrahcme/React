import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      name: "Ifeoluwa"
    }
  }

    this.affidavit = this.affidavit.bind(this)

  // The function method
  affidavit (e) {    //e represents user input
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>My name is Jude</h2>
        <input type="text" onChange={this.affidavit} />
      </div>
    );
}

export default App;


//state function with two ppties: Name and street
//c my name is ----- and i live at _______