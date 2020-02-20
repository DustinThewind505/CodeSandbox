import React, { useState, useEffect } from "react";
import "./styles.css";

const hikers = [
  {
    name: "Mrs Janet",
    role: "Trail Angel",
    location: "Georgia"
  },
  {
    name: "Baltimore Jack",
    role: "Trail legend",
    location: "Afterlife"
  },
  {
    name: "Peacefoot",
    role: "Hiker",
    location: "The trail"
  },
  {
    name: "Peg Legs",
    role: "Hiker",
    location: "The trail"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = hikers.filter(element =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm]);

  function handler(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="main">
      <h1>Ello Poppet</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handler}
      />
      {searchResults.map(hiker => (
        <div className="card">
          <h4>{hiker.name}</h4>
          <h5>{hiker.role}</h5>
          <h4>{hiker.location}</h4>
        </div>
      ))}
    </div>
  );
}
export default App;
