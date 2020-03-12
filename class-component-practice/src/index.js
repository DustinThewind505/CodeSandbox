import React from "react";
import ReactDOM from "react-dom";

import RenderMessage from "./components/Message";
import Form from "./components/Form";

class FooComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "World"
    };
  }

  updateStateMessage = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
        <RenderMessage message={this.state.message} />
        <Form updateStateMessage={this.updateStateMessage} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <FooComponent />
  </React.StrictMode>,
  rootElement
);
