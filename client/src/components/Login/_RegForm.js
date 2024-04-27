import React, { Component } from "react";
import FormGroup from "../Forms/FormGroup";

export class RegForm extends Component {
  state = {
    RegUsername: "",
    RegPassword: ""
  };
  handleChange = e => {
    console.log(`${e.target.name}: ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleReg(this.state.RegUsername, this.state.RegPassword);
  };
  render() {
    return (
      <form className="RegForm" onSubmit={this.handleSubmit}>
        <h3 className="mb-3">Login</h3>
        {this.props.Error && (
          <div className="alert alert-danger">{this.props.Error}</div>
        )}
        {this.props.Success && (
          <div className="alert alert-success">{this.props.Success}</div>
        )}
        {[
          {
            Id: "RegUsername",
            Type: "text",
            Desc: "Put your username in right case."
          },
          {
            Id: "RegPassword",
            Type: "password",
            Desc: "Create a new password forget it."
          }
        ].map((fg, key) => {
          return (
            <FormGroup
              Label={fg.Id}
              Value={this.state[fg.Id]}
              {...fg}
              key={key}
              onChange={this.handleChange}
            />
          );
        })}
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    );
  }
}

export default RegForm;
