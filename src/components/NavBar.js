import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-container'>
        <NavLink className='nav-item' to='/Login'>
          {' '}
          Login{' '}
        </NavLink>
        <NavLink className='nav-item' id='ngf' to='/NewGameForm'>
          {' '}
          Post Game{' '}
        </NavLink>
        <NavLink className='nav-item' id='homepage' to='/HomePage'>
          {' '}
          GAME THRIFT{' '}
        </NavLink>
        <NavLink className='nav-item' id='cart' to='/Cart'>
          {' '}
          Cart ({this.props.cartCount})
        </NavLink>
        <NavLink className='nav-item' id='search' to='/SearchPage'>
          {' '}
          Browse{' '}
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
