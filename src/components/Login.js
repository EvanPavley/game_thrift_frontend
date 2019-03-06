import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <h1>LOGIN</h1>
        <form onSubmit={this.props.handleSubmit}>
          <label>Username:</label>
          <input
            name='username'
            value={this.props.username}
            onChange={this.props.handleChange}
            className='login-input'
            required
          />
          <br />
          <label>Email:</label>
          <input
            name='email'
            value={this.props.email}
            onChange={this.props.handleChange}
            className='login-input'
            required
          />
          <br />
          <label>Password:</label>
          <input
            name='password'
            value={this.props.password}
            onChange={this.props.handleChange}
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
