import React, { Component } from "react";
import FormGroup from "../Forms/FormGroup";

export class LoginForm extends Component {
  state = {
    Username: "",
    Password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAuth(this.state.Username, this.state.Password);
  };
  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <h3 className="mb-3">Login</h3>
        {this.props.Error && (
          <div className="alert alert-danger">{this.props.Error}</div>
        )}
        {[
          {
            Id: "Username",
            Type: "text",
            Desc: "Put your username in right case."
          },
          {
            Id: "Password",
            Type: "password",
            Desc: "Put your password that you might forgotten."
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

export default LoginForm;
