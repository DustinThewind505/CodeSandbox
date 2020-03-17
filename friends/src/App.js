import React, { Component } from "react";
import "./App.css";
import { people } from "./people";
console.log(people);

class App extends Component {
  constructor() {
    console.log("Constructor Invoked!");
    super();
    this.state = {
      friends: people
    };
  }
  render() {
    console.log("Render Invoked!")
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
        {this.state.friends.map(element => <div key={element.id}>{element.first_name}</div>)}
      </div>
    );
  }
}

export default App;
