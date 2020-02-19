import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '', 
    favToy: ''
  });

  function addFirst(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="App">
      <form>
        <label>
          First Name: <input name="fName" type="text" onChange={addFirst} />
        </label>
        <br />
        <br />
        <label>
          Last Name: <input name="lName" type="text" onChange={addFirst} />
        </label>
        <br />
        <br />
        <label>
          Favorite Toy: <input name="favToy" type="text" onChange={addFirst} />
        </label>
      </form>
    </div>
  );
}
