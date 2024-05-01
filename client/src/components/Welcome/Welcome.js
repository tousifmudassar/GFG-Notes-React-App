import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./List";
import WelcomeHeader from "./WelcomeHeader";
import Note from "./Note";
import { GetNotes } from "../../services/Notes";
class Welcome extends Component {
  state = {
    Notes: []
  };
  RefreshNotes = () => {
    GetNotes().then(res => {
      this.setState({
        Notes: res.data
      });
    });
  };
  componentDidMount() {
    this.RefreshNotes();
  }

  render() {
    const { User, handleLogOut } = this.props;
    return (
      <div className="container">
        <WelcomeHeader User={User} handleLogOut={handleLogOut} />
        <div className="row mt-3">
          <Route path={["/:NoteID", "/"]}>
            <div className="col-3">
              <List Notes={this.state.Notes} User={User} />
            </div>
            <div className="col-9">
              <Note
                Notes={this.state.Notes}
                User={User}
                RefreshNotes={this.RefreshNotes}
              />
            </div>
          </Route>
        </div>
      </div>
    );
  }
}
export default Welcome;
