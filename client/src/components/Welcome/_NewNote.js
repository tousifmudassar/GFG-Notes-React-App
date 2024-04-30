import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Sluggify } from "../../helpers/Helpers";
import { CreateNote } from "../../services/Notes";

const NewNote = ({ User }) => {
  User = User.Name;
  const [Desc, setDesc] = React.useState("");
  const [Title, setTitle] = React.useState("");
  const NoteID = Sluggify(Title);
  const handleSubmit = e => {
    e.preventDefault();
    // <pre className="mt-3 border-rounded bg-light">
    //   {JSON.stringify({ NoteID, Desc, Title, User }, null, 2)}
    // </pre>;

    CreateNote(NoteID, Desc, Title, User).then(res => {
      console.log(res);
    });
  };
  const handleReset = e => {
    e.preventDefault();
    setDesc("");
    setTitle("");
  };
  return (
    <form className="NewNote" onSubmit={handleSubmit} onReset={handleReset}>
      <h3 className="mb-3">
        Creating
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter title here..."
          value={Title}
          onChange={e => setTitle(e.target.value)}
        />
      </h3>
      <p>
        <em>Being Created by {User}...</em>
      </p>
      <MDEditor
        height={window.innerHeight - 350}
        value={Desc}
        onChange={setDesc}
      />
      <input
        type="submit"
        value="Create Note"
        className="btn btn-primary mt-3 mb-3"
      />
      <input
        type="reset"
        value="Reset Note"
        className="btn btn-outline-secondary mt-3 mb-3 ml-3"
      />
    </form>
  );
};

export default NewNote;
