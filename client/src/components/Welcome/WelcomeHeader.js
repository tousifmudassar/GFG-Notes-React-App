import React from "react";

const WelcomeHeader = ({ User, handleLogOut }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="border rounded p-2">
          <p>Welcome, {User.Name}.</p>
          <button className="btn btn-danger btn-sm" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
