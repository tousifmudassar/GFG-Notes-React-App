import React, { Component } from "react";
import Header from "./Header/Header";

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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                {this.state.User
                  ? `User Logged In as ${this.state.User.Name}`
                  : "User Logged Out"}
              </p>
              <button
                className="btn btn-primary btn-sm"
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    User: {
                      Name: "Mudassar Tousif"
                    }
                  });
                }}
              >
                Login
              </button>
              <button
                className="btn btn-secondary btn-sm ml-2"
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    User: null
                  });
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
