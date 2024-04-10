import React from "react";
import { Link, withRouter } from "react-router-dom";

const List = ({ Notes, match }) => {
  return (
    <>
      <h3 className="mb-3">Note Lists</h3>

      <div className="list-group">
        {Notes.map((note, key) => (
          <Link
            to={"/note-" + key}
            className={
              "list-group-item list-group-item-action" +
              (match.params.NoteID &&
              +match.params.NoteID.replace("note-", "") === key
                ? "active"
                : "")
            }
            key={key}
          >
            {note.Title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default withRouter(List);
