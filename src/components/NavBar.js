import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    // console.log('nav', this.props);
    return (
      <div className='nav-container'>
        <NavLink className='nav-item' to='/Login'>
          {' '}
          Login{' '}
        </NavLink>
        <NavLink className='nav-item' id='ngf'to='/NewGameForm'>
          {' '}
          Sell Game{' '}
        </NavLink>
        <NavLink className='nav-item' to='/HomePage'>
          {' '}
          HomePage{' '}
        </NavLink>
        <NavLink className='nav-item' id='cart' to='/Cart'>
          {' '}
          Cart ({this.props.cartCount})
        </NavLink>
        <NavLink className='nav-item' id='search' to='/SearchPage'>
          {' '}
          Search{' '}
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
