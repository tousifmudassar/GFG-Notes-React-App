import React from "react";
import MDEditor from "@uiw/react-md-editor";

const NoteContent = ({ match, Notes }) => {
  if (Notes.length === 0) {
    return (
      <>
        <h3 className="mb-3">Loading...</h3>
        <p>Please Wait...</p>
      </>
    );
  }
  const Note = Notes.find(note => note.NoteID === match.params.NoteID);
  if (!Note) {
    return (
      <>
        <h3 className="mb-3">Note Not Found</h3>
        <p>Oops! The Note you're looking for is not found!🙁</p>
      </>
    );
  }

  const { NoteID, Title, Desc, User } = Note;
  return (
    <>
      <h3 className="mb-3">
        {Title} <code>({NoteID})</code>
      </h3>
      <p>
        <em>Created by {User}.</em>
      </p>
      {/* <p>{Desc}</p> */}
      <MDEditor.Markdown source={Desc} />
    </>
  );
};

export default NoteContent;
