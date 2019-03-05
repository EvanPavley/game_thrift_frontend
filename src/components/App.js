import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import '../css/App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import Cart from './Cart';
import Login from './Login';
import NewGameForm from './NewGameForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ogGames: [],
      games: [],
      selectedGames: [],
      cart: [],
      total: 0,
      cartCount: 0,
      searchGames: [],
      searchValue: ''
    };
  }

  handelPage = page => {
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    const url = 'http://localhost:3000/api/v1/games';
    fetch(url)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          ogGames: data,
          games: data,
          searchGames: data
        })
      );
  }

  addToCart = gameid => {
    let foundGame = this.state.ogGames.find(game => game.id === gameid);
    let price = foundGame.price;
    this.setState({
      cart: [foundGame, ...this.state.cart],
      total: this.state.total + price,
      cartCount: this.state.cartCount + 1
    });
  };

  removeFromCart = gameid => {
    let foundGame = this.state.ogGames.find(game => game.id === gameid);
    let price = foundGame.price;
    let updatedCart = this.state.cart.filter(game => {
      if (game !== foundGame) {
        return game;
      }
    });
    this.setState({
      cart: updatedCart,
      total: this.state.total - price,
      cartCount: this.state.cartCount - 1
    });
  };

  checkout = () => {
    this.setState({
      cart: [],
      total: 0,
      cartCount: 0
    });
  };

  handleSearch = e => {
    this.setState({ searchValue: e.target.value }, () =>
      console.log(this.state.searchValue)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    let searchedGames = this.state.games.filter(g =>
      g.name.toUpperCase().includes(this.state.searchValue.toUpperCase())
    );
    this.setState({ searchGames: searchedGames });
  };

  handleConsoleFilter = e => {
    if (e.target.name === 'ps1') {
      let games = this.state.games.filter(g => g.console === 'PlayStation');
      this.setState({ searchGames: games });
    }
    if (e.target.name === 'ng4') {
      let games = this.state.games.filter(g => g.console === 'Nintendo 64');
      this.setState({ searchGames: games });
    }
    if (e.target.name === 'snes') {
      let games = this.state.games.filter(
        g => g.console === 'Super Nintendo Entertainment System (SNES)'
      );
      this.setState({ searchGames: games });
    }
    if (e.target.name === 'dos') {
      let games = this.state.games.filter(g => g.console === 'PC DOS');
      this.setState({ searchGames: games });
    }
    if (e.target.name === 'sega') {
      let games = this.state.games.filter(
        g => g.console === 'Sega Mega Drive/Genesis'
      );
      this.setState({ searchGames: games });
    }
  };

  render() {
    return (
      <div>
        <h2>GAME THRIFT</h2>
        <NavBar cartCount={this.state.cartCount} />
        <Route
          path='/HomePage'
          render={() => (
            <HomePage
              games={this.state.games}
              addToCart={this.addToCart}
              isCart={false}
            />
          )}
        />
        <Route
          path='/Cart'
          render={() => (
            <Cart
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
              isCart={true}
              total={this.state.total}
              checkout={this.checkout}
            />
          )}
        />

        <Route path='/Login' render={() => <Login />} />

        <Route
          path='/SearchPage'
          render={() => (
            <SearchPage
              games={this.state.searchGames}
              searchValue={this.state.searchValue}
              handleSearch={this.handleSearch}
              handleSubmit={this.handleSubmit}
              handleConsoleFilter={this.handleConsoleFilter}
            />
          )}
        />
        <Route path='/NewGameForm' component={() => <NewGameForm />} />
      </div>
    );
  }
}

export default App;
