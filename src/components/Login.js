import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className='container login-container'>
        {this.props.loggedInUser ? (
          <h1>You're already logged in, {this.props.loggedInUser.username}</h1>
        ) : (
          <div className='login'>
            <h1 id='login-title'>login</h1>
            <form className='login-form' onSubmit={this.props.handleSubmit}>
              <label>Username:</label>
              <br />
              <input
                name='username'
                value={this.props.username}
                onChange={this.props.handleChange}
                className='login-input'
                required
              />
              <br />
              <label>Email:</label>
              <br />
              <input
                name='email'
                value={this.props.email}
                onChange={this.props.handleChange}
                className='login-input'
                required
              />
              <br />
              <label>Password:</label>
              <br />
              <input
                name='password'
                value={this.props.password}
                onChange={this.props.handleChange}
                type='password'
                className='login-input'
                required
              />
              <br />
              <div className='button-holder'>
                <input type='submit' value='login' className='login-submit' />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
