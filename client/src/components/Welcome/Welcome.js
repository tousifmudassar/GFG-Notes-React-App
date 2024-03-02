import React from "react";

const Welcome = ({ User, handleLogOut }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>Welcome, {User.Name}.</p>
          <button className="btn btn-danger btn-sm" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
