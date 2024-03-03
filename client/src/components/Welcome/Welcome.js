import React, { Component } from "react";
import List from "./List";
class Welcome extends Component {
  state = {
    Notes: ["Note 1", "Note 2", "Note 3", "Note 4"],
    CurrentNote: null
  };
  setCurrentNote = CurrentNote => {
    this.setState({ CurrentNote });
  };
  render() {
    const { User, handleLogOut } = this.props;
    return (
      <div className="container">
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
        <div className="row mt-3">
          <div className="col-3">
            <List
              Notes={this.state.Notes}
              CurrentNote={this.CurrentNote}
              setCurrentNote={this.setCurrentNote}
            />
          </div>
          <div className="col-9">Right SideBar</div>
        </div>
      </div>
    );
  }
}
export default Welcome;
