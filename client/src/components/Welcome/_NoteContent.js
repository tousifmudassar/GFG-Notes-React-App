import React from "react";

const NoteContent = ({ match, Notes }) => {
  if (Notes.length === 0) {
    return (
      <>
        <button className="btn">
          {/* <i className="fa fa-home"></i> */}
          <i className="fa-solid fa-spinner"></i>
        </button>
        <h3 className="mb-3">Loading...</h3>
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

  const { Title, Desc } = Note;
  return (
    <>
      <h3 className="mb-3">{Title}</h3>
      <p>{Desc}</p>
    </>
  );
};

export default NoteContent;
