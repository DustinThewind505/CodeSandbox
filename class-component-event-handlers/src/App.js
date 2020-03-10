import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Ello Poppet"
    };
  }
  clickHandler = () => alert("Single Click");
  doubleClickHandler = () => alert("Double Click");
  mouseOverHandler = event => (event.target.textContent = "Mouse has Entered");
  mouseLeaveHandler = event => (event.target.textContent = "Mouse has Left");

  handleInput = event => {
    console.log(event.target.value);
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Event Handlers</h1>
        <button onClick={this.clickHandler}>Single Click Handler</button>
        <button onDoubleClick={this.doubleClickHandler}>
          Double Click Handler
        </button>
        <div onMouseEnter={this.mouseOverHandler}>Mouse Enter</div>
        <div onMouseLeave={this.mouseLeaveHandler}>Mouse Leave</div>
        <input
          onChange={this.handleInput}
          type="text"
          placeholder="Change me"
        />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;
