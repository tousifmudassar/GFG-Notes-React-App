import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  Route
  // withRouter
} from "react-router-dom";
import List from "./List";
import WelcomeHeader from "./WelcomeHeader";
import Note from "./Note";
class Welcome extends Component {
  state = {
    Notes: ["Note 1", "Note 2", "Note 3", "Note 4"]
  };

  render() {
    const { User, handleLogOut } = this.props;
    return (
      <div className="container">
        <WelcomeHeader User={User} handleLogOut={handleLogOut} />
        <div className="row mt-3">
          <Route path={["/:NoteID", "/"]}>
            <div className="col-3">
              <List Notes={this.state.Notes} />
            </div>
            <div className="col-9">
              <Note />
            </div>
          </Route>
        </div>
      </div>
    );
  }
}
export default Welcome;
