import React from "react";
import { Switch, Route } from "react-router-dom";
import NoteWelcome from "./_NoteWelcome";
import NoteContent from "./_NoteContent";

const Note = ({ Notes }) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={NoteWelcome} />
      <Route path="/new">Hello</Route>
      <Route
        path="/:NoteID"
        render={rp => <NoteContent {...rp} Notes={Notes} />}
      />
    </Switch>
  );
};

export default Note;
