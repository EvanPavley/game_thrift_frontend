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
      ogGames: [],
      games: [],
      selectedGames: [],
    }
  }

  handelPage = (page) => {
    this.setState({ currentPage: page });
  }

  componentDidMount(){
    const url = 'http://192.168.3.58:3000/api/v1/games'
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({
      ogGames: data,
      games: data,
    }))
  }


  render() {
    return (
      <div>
        <h2>GAME THRIFT</h2>
        <NavBar changePage={this.handlePageChange} />
        <Route
          path="/HomePage"
          component={() => <HomePage
            games= {this.state.games}
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
