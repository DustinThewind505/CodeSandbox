import React from "react";
import ReactDOM from "react-dom";

import Name from "./components/name";
import Alignment from "./components/alignment";
import Message from "./components/message";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Venom",
      message: "We are Venom",
      alignment: "Villan"
    };
  }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Alignment alignment={this.state.alignment} />
        <Message message={this.state.message} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
