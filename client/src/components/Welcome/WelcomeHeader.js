import React from "react";
import { Link } from "react-router-dom";

const WelcomeHeader = ({ User, handleLogOut }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="border rounded p-2">
          <p>Welcome, {User.Name}.</p>
          <Link to="/" className="btn btn-primary btn-sm mr-2">
            Home
          </Link>
          <Link to="/new" className="btn btn-outline-primary btn-sm mr-2">
            New Note
          </Link>
          <button className="btn btn-danger btn-sm" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
