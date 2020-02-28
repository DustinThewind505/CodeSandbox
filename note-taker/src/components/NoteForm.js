import React, { useState } from "react";

const NoteForm = props => {
  // console.log("this is our props",props);
  const [note, setNote] = useState({
    title: "",
    body: ""
  });

  const handleChanges = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(note);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({
      title: "",
      body: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Note Title</label>
      <input
        id="title"
        name="title"
        onChange={handleChanges}
        value={note.title}
      />
      <label htmlFor="body">Note</label>
      <input
        id="body"
        type="textarea"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <button>Add Note</button>
    </form>
  );
};

export default NoteForm;
