import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../images/gamethirftLOGO.png';

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
        <input
          className='image'
          type='image'
          src={logo}
          onClick={() => this.props.history.push('/HomePage')}
        />
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

export default withRouter(NavBar);
