import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const List = ({ Notes, match, User }) => {
  const [Filter, setFilter] = useState("All");
  const Filters = ["All Notes", "My Note"];
  const handleFilter = e => {
    e.preventDefault();
    setFilter(e.target.innerHTML.trim());
  };
  return (
    <>
      <h3 className="mb-3">Note Lists</h3>
      <div className="btn-group d-flex mb-3">
        {Filters.map((btn, key) => (
          <button
            className={
              "btn btn-" + (Filter === btn ? "success" : "outline-primary")
            }
            key={key}
            onClick={handleFilter}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="list-group">
        {Notes.filter(note => {
          if (Filter === "My Notes") {
            return note.User === User.name;
          } else {
            return true;
          }
        }).map((note, key) => (
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
        {Notes.length === 0 && (
          <span className="list-group-item">
            No notes found! Feel free to add one!
          </span>
        )}
      </div>
    </>
  );
};

export default withRouter(List);
