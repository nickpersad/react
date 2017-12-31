import React, { Component } from "react";

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    console.log('un: ' + this.state.email);
    console.log('pw: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
  componentWillMount() {
    document.body.style.backgroundImage = '';
    document.body.style.background = '#f5f5f5';
    document.getElementById('outer-container').style.background = '#f5f5f5';
  }
}

export default Login