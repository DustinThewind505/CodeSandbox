import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChanges = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
  };

  console.log(user);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="box1">Username: </label>
        <input type="text" id="box1" name="username" onChange={handleChanges} />
        <br />
        <br />
        <label htmlFor="box2">Password: </label>
        <input type="text" id="box2" name="password" onChange={handleChanges} />
        <br />
        <br />
        <button>Clicky Click</button>
      </form>
    </div>
  );
}
