import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
    // this.sendFormDataSomewhere(this.state)
  }

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
            /><br/>
          <label>Email:</label>
          <input
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            className='login-input'
            /><br/>
          <label>Password:</label>
          <input
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            className='login-input'
            /><br/>
          <input
            type="submit"
            value="submit"
            className='login-submit'
            />
        </form>
      </div>
    );
  }
}

export default Login;
