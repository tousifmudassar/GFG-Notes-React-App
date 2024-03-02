import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";

class App extends Component {
  state = {
    User: null
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
    } else if (Users[username] && Users[username] !== password) {
      //Password is wrong.
    } else {
      //Password is right!
      this.setState({
        User: { Name: username }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header className="Header" dark={true}>
          GFG Notes App
        </Header>
        {this.state.User ? <Welcome User={this.state.User} /> : <Login />}
      </div>
    );
  }
}

export default App;
