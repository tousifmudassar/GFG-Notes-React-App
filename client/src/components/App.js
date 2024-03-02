import React, { Component } from "react";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" dark={true}>
          GFG Notes App
        </Header>
      </div>
    );
  }
}

export default App;
