import React from "react";
import { Link, withRouter } from "react-router-dom";

const List = ({ Notes, setCurrentNote, CurrentNote }) => {
  return (
    <>
      <h3>Note Lists</h3>
      <div className="list-group">
        {Notes.map((item, key) => (
          <Link
            to={"/note-" + key}
            className={
              "list-group-item list-group-item-action" + (false ? "active" : "")
            }
            key={key}
            onClick={() => setCurrentNote(key)}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default withRouter(List);
