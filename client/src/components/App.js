import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";

class App extends Component {
  state = {
    User: null
  };
  render() {
    return (
      <div className="App">
        <Header className="Header" dark={true}>
          GFG Notes App
        </Header>
        {this.state.User ? <Welcome /> : <Login />}
      </div>
    );
  }
}

export default App;
