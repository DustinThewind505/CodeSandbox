import React, { useState } from "react";

import Form from "./components/Form";
import Card from "./components/Card";
import "./styles.css";

function App() {
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Kel",
      email: "orangeSoda@aol.com",
      role: "DevOps",
      music: "Death Rap",
      complete: false
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role,
      music: note.music,
      complete: false
    };
    setUser([...user, newNote]);
  };

  const toggleComplete = clickedId => {
    const newArray = user.map(element => {
      if (element.id === clickedId) {
        return {
          ...element,
          complete: !element.complete
        };
      } else {
        return element;
      }
    });
    setUser(newArray);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Form Management</h1>
        <img
          src="https://media.giphy.com/media/26FLh2XOL18X7oKPu/giphy.gif"
          alt="man pushing down cubicle"
        />
      </header>
      <div>
        <Card info={user} toggleComplete={toggleComplete} />
        <Form addNewNote={addNewNote} />
      </div>
      {/* <footer>
        <h1>Form Management</h1>
      </footer> */}
    </div>
  );
}

export default App;
