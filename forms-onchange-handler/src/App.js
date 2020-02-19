import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [argh, setArgh] = useState("");
  const [happy, setHappy] = useState(false);
  return (
    <div className="App">
      <h3>The pirate's name is {name || "(Fill in Form)"}</h3>
      <h3>This pirate is over here like {argh || "(Argh)"}!</h3>
      <h3>The pirate was {happy ? "stok" : "piss"}ed!</h3>
      <form>
        <label>
          1. Name |
          <input
            onChange={event => setName(event.target.value)}
            maxLength="15"
            placeholder="First Name"
            id="name"
            name="name"
            type="text"
          />
          |
        </label>

        <label>
          2. Favorite Rs |
          <select
            onChange={event => setArgh(event.target.value)}
            name="R's"
            id="R's"
          >
            <option />
            <option>Cars</option>
            <option>Mars</option>
            <option>Lars</option>
          </select>
          |
        </label>

        <label>
          3. Happy mood?
          <input
            onChange={event => setHappy(event.target.checked)}
            type="checkbox"
            name="isHappy"
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
