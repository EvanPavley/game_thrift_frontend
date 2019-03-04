import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/App.css';
import NavBar from './NavBar'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import Cart from './Cart'
import Login from './Login'
import NewGameForm from './NewGameForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 'HomePage',
    }
  }

  handelPage = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div>
        <h2>GAME THRIFT</h2>
        <NavBar changePage={this.handlePageChange} />
        <Route
          path="/HomePage"
          component={() => <HomePage
          />}
        />
        <Route
          path="/Cart"
          component={() => <Cart
          />}
        />
        <Route
          path="/SearchPage"
          component={() => <SearchPage
          />}
        />
        <Route
          path="/Login"
          component={() => <Login
          />}
        />
        <Route
          path="/NewGameForm"
          component={() => <NewGameForm
          />}
        />
      </div>
    );
  }
}

export default App;
