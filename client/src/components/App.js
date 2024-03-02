import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";

class App extends Component {
  state = {
    User: null,
    Error: null
  };
  handleAuth = (username, password) => {
    const Users = {
      Mudassar: "Mudassar@123",
      Tousif: "Tousif@123",
      Praveen: "Hello@123",
      Shivam: "password",
      Admin: "Admin@123",
      User: "User@123"
    };
    if (!Users[username]) {
      //Users not found
      this.setState({
        User: null,
        Error: "User not found!"
      });
    } else if (Users[username] && Users[username] !== password) {
      //Password is wrong.
      this.setState({
        User: null,
        Error: "Wrong Password!"
      });
    } else {
      //Password is right!
      this.setState({
        User: { Name: username },
        Error: null
      });
    }
  };
  handleLogOut = e => {
    e.preventDefault();
    this.setState({
      User: null
    });
  };
  render() {
    return (
      <div className="App">
        <Header className="Header" dark={true}>
          Mudassar Tousif Notes App
        </Header>
        {this.state.User ? (
          <Welcome User={this.state.User} handleLogOut={this.handleLogOut} />
        ) : (
          <Login handleAuth={this.handleAuth} Error={this.state.Error} />
        )}
      </div>
    );
  }
}

export default App;
