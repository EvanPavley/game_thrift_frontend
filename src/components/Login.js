import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
    }); // end of fetch
  };

  render() {
    return (
      <div className='login-container'>
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            className='login-input'
            required
          />
          <br />
          <label>Email:</label>
          <input
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            className='login-input'
            required
          />
          <br />
          <label>Password:</label>
          <input
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            type='password'
            className='login-input'
            required
          />
          <br />
          <input type='submit' value='login' className='login-submit' />
        </form>
      </div>
    );
  }
}

export default Login;
