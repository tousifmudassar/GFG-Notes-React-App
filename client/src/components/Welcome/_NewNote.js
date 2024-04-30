import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Sluggify } from "../../helpers/Helpers";

const NewNote = ({ User }) => {
  User = User.Name;
  const [Desc, setDesc] = React.useState("");
  const [Title, setTitle] = React.useState("");
  const NoteID = Sluggify(Title);
  return (
    <div className="NewNote">
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
        height={window.innerHeight - 300}
        value={Desc}
        onChange={setDesc}
      />
    </div>
  );
};

export default NewNote;
