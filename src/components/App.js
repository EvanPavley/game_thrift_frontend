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
      ogGames: [],
      games: [],
      selectedGames: [],
      cart: [],
      total: 0,
      cartCount: 0,
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

  addToCart = (gameid) => {
    let foundGame = this.state.ogGames.find(game => game.id === gameid)
    let price = foundGame.price
    this.setState({
      cart: [foundGame, ...this.state.cart],
      total: this.state.total + price,
      cartCount: this.state.cartCount + 1,
    })
  }

  removeFromCart = (gameid) => {
    let foundGame = this.state.ogGames.find(game => game.id === gameid)
    let price = foundGame.price
    let updatedCart = this.state.cart.filter(game => {
      if (game !== foundGame){
        return game
      }
    })
    this.setState({
      cart: updatedCart,
      total: this.state.total - price,
      cartCount: this.state.cartCount - 1,
    })
  }

  checkout = () => {
    this.setState({
      cart: [],
      total: 0,
      cartCount: 0,
    })
  }


  render() {
    return (
      <div>
        <h2>GAME THRIFT</h2>
        <NavBar cartCount={this.state.cartCount}/>
        <Route
          path="/HomePage"
          render={() => <HomePage
            games= {this.state.games}
            addToCart= {this.addToCart}
            isCart= {false}
          />}
        />
        <Route
          path="/Cart"
          render={() => <Cart
            cart= {this.state.cart}
            removeFromCart= {this.removeFromCart}
            isCart= {true}
            total= {this.state.total}
            checkout= {this.checkout}
          />}
        />
        <Route
          path="/SearchPage"
          render={() => <SearchPage
          />}
        />
        <Route
          path="/Login"
          render={() => <Login
          />}
        />
        <Route
          path="/NewGameForm"
          render={() => <NewGameForm
          />}
        />
      </div>
    );
  }
}

export default App;
