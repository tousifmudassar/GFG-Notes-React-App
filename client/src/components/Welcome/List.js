import React from "react";

const List = ({ Notes }) => {
  return (
    <>
      <h3>Note Lists</h3>
      <ul className="list-group">
        {Notes.map((item, key) => (
          <li className="list-group-item list-group-item-action" key={key}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
