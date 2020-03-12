import React from "react";
import "./styles.css";

const people = [
  {
    name: "Piccalo"
  },
  {
    name: "Gohan"
  },
  {
    name: "Goku"
  },
  {
    name: "Trunks"
  }
];

const handleSubmit = event => {
  event.preventDefault();
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messageTwo: "",
      messageThree: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    people.push(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>Form</h1>
          <label>
            <input name="message" onChange={this.handleChange} required />
          </label>
          <label>
            <input name="messageTwo" onChange={this.handleChange} required />
          </label>
          <label>
            <input name="messageThree" onChange={this.handleChange} />
          </label>
          <label>
            <select required>
              <option value="Tubular">Tubular</option>
              <option value="Pizza">Pizza</option>
              <option value="Farm">Farm</option>
            </select>
          </label>
          <label>
            <input name="messageThree" onSubmit={handleSubmit} />
          </label>
        </form>
        <h1>Oi: {this.state.message}</h1>
        <h2>Oi: {this.state.messageTwo}</h2>
        <h3>Oi: {this.state.messageThree}</h3>
        {people.map(person => (
          <h5>{person.name}</h5>
        ))}
      </div>
    );
  }
}
export default App;
