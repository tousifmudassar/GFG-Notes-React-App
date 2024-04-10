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
    Notes: [
      {
        NoteID: "hello",
        Title: "Hello World",
        Desc: "Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World"
      },
      {
        NoteID: "faq",
        Title: "Frequently Asked Questions",
        Desc: "What questions are you asking frequently"
      },
      {
        NoteID: "gfg",
        Title: "GeeksforGeeks",
        Desc: "Hello GeeksforGeeks"
      },
      {
        NoteID: "mt",
        Title: "Mudassar Tousif",
        Desc: "Hello Mudassar Tousif"
      }
    ]
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
              <Note Notes={this.state.Notes} />
            </div>
          </Route>
        </div>
      </div>
    );
  }
}
export default Welcome;
