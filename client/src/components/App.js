import React, { Component } from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import { AuthUser } from "../services/User";
import { RegUser } from "../services/User";

class App extends Component {
  state = {
    User: null,
    AuthError: null,
    RegError: null,
    RegSuccess: null
  };
  handleAuth = (username, password) => {
    AuthUser(username, password)
      .then(res =>
        this.setState({
          User: res.data.Message,
          AuthError: null
        })
      )
      .catch(error => {
        this.setState({
          User: null,
          AuthError: error.response.data.Message
        });
      });
  };
  handleReg = (username, password) => {
    RegUser(username, password)
      .then(res =>
        this.setState({
          User: null,
          RegError: null,
          RegSuccess: res.data.Message
        })
      )
      .catch(error => {
        this.setState({
          User: null,
          RegError: error.response.data.Message
        });
      });
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
          <Login
            handleAuth={this.handleAuth}
            handleReg={this.handleReg}
            RegSuccess={this.state.RegSuccess}
            AuthError={this.state.AuthError}
            RegError={this.state.RegError}
          />
        )}
      </div>
    );
  }
}

export default App;
