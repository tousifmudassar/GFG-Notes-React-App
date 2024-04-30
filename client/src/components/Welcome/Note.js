import React from "react";
import { Switch, Route } from "react-router-dom";
import NoteWelcome from "./_NoteWelcome";
import NoteContent from "./_NoteContent";
import NewNote from "./_NewNote";

const Note = ({ User, Notes, RefreshNotes }) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={NoteWelcome} />
      <Route path="/new" render={rp => <NewNote {...rp} User={User} />}></Route>
      <Route
        path="/:NoteID"
        render={rp => (
          <NoteContent RefreshNotes={RefreshNotes} {...rp} Notes={Notes} />
        )}
      />
    </Switch>
  );
};

export default Note;
