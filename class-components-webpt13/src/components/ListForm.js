import React, { Component } from "react";

class ListForm extends Component {
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }

  handleChanges = e => {
    this.setState({
      itemName: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.itemName);
    this.setState({ itemName: "" });
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="itemName"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
