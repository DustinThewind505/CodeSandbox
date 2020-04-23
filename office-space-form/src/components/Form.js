import React, { useState } from "react";

function Form(props) {
  const [teamMate, setTeamMate] = useState({
    name: "",
    email: "",
    role: "",
    music: ""
  });

  const handleChange = event => {
    setTeamMate({ ...teamMate, [event.target.name]: event.target.value });
    console.log(teamMate);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewNote(teamMate);
    setTeamMate({
      name: "",
      email: "",
      role: "",
      music: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          value={teamMate.name}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          value={teamMate.email}
        />
        <label htmlFor="role">Role</label>
        <input
          id="role"
          name="role"
          onChange={handleChange}
          value={teamMate.role}
        />
        <label htmlFor="music">Music</label>
        <input
          id="music"
          name="music"
          onChange={handleChange}
          value={teamMate.music}
        />
        <button>Add Person</button>
      </form>
    </div>
  );
}

export default Form;
