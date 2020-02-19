import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div className="App">
      <form
        onSubmit={event => {
          event.preventDefault();
          axios.post("/", {name: "Gangrel"});
        }}
      >
        <label>
          name: <input id="nameInput" type="text" />
        </label>
        <br />
        <br />
        <label>
          age: <input id="ageInput" type="number" />
        </label>
        <br />
        <br />
        <button>send</button>
      </form>

      <h5>
        Ohhh uhhh my name is {name || "bumpkin"} and I'm {age || "stupid"}
      </h5>
    </div>
  );
}
