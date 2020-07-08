import React, { Component } from 'react';
import Header from '../layout/Header'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="container">
          <React.Fragment>
            <Header />
          </React.Fragment>
            <h1>Login part</h1>
            <p>This part will contain a place for the user to enter their login credentials. Once they log in successfully, it will switch to the tenant info part</p>
        </div>
      </div>
    );
  }
}

export default Login;
