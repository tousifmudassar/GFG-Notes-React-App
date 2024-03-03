import React, { Component } from "react";
import List from "./List";
import WelcomeHeader from "./WelcomeHeader";
import Note from "./Note";
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
        <WelcomeHeader User={User} handleLogOut={handleLogOut} />
        <div className="row mt-3">
          <div className="col-3">
            <List
              Notes={this.state.Notes}
              CurrentNote={this.CurrentNote}
              setCurrentNote={this.setCurrentNote}
            />
          </div>
          <div className="col-9">
            <Note CurrentNote={this.state.CurrentNote} />
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
