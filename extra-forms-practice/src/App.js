import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState({
    firstInput: '',
    secondInput: '',
    thirdInput: ''
  });
  const [select, setSelect] = useState("");
  const [car, setCar] = useState(false);

  const handleChange = event => {
    setInput({
      ...input,
     [event.target.name]: event.target.value
    });
  };

  return (
    <div className="App">
      <form
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <h1>Forms</h1>
        <label>
          First Input
          <br />
          <input
            maxLength="15"
            placeholder="__________________P"
            id="firstInput"
            name="firstInput"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Second Input
          <br />
          <input
            maxLength="15"
            placeholder="__________________P"
            id="secondInput"
            name="secondInput"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Third Input
          <br />
          <input
            maxLength="15"
            placeholder="__________________P"
            id="thirdInput"
            name="thirdInput"
            type="text"
            onChange={handleChange}
          />
        </label>
        <h2>Second Input</h2>
        <select onChange={e => setSelect(e.target.value)}>
          <option />
          <option>Red</option>
          <option>Blue</option>
          <option>One, Two</option>
        </select>
        <label>
          <input type="checkbox" onChange={e => setCar(e.target.checked)} />
        </label>
        <h4>{input.firstInput}</h4>
        <h4>{input.secondInput}</h4>
        <h4>{input.thirdInput}</h4>
        <h3>{select}</h3>

        <h2>The car is {car ? "running" : "not running"}.</h2>
        <input type="submit" />
      </form>
    </div>
  );
}
