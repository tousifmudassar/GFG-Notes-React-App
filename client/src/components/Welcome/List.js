import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

const List = ({ Notes, match }) => {
  return (
    <>
      <h3>Note Lists</h3>

      <div className="list-group">
        {Notes.map((item, key) => (
          <Link
            to={"/note-" + key}
            className={
              "list-group-item list-group-item-action" +
              (+match.params.NoteID.replace("note-", "") === key
                ? "active"
                : "")
            }
            key={key}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default withRouter(List);
