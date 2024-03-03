import React from "react";

const List = ({ Notes, setCurrentNote, CurrentNote }) => {
  return (
    <>
      <h3>Note Lists</h3>
      <ul className="list-group">
        {Notes.map((item, key) => (
          <li
            className={
              "list-group-item list-group-item-action" +
              (CurrentNote === key ? "active" : "")
            }
            key={key}
            onClick={() => setCurrentNote(key)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
