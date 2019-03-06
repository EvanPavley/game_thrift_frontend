import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import Cart from './Cart';
import Login from './Login';
import NewGameForm from './NewGameForm';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import GameShowContainer from './GameShowContainer';
import UserShowContainer from './UserShowContainer';

const featuredGamesNames = [
  'Jurassic Park',
  'Ghostbusters',
  'Super Bomberman',
  'Pokémon Stadium',
  'GoldenEye 007'
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ogGames: [],
      games: [],
      selectedGames: [],
      featuredGames: [],
      cart: [],
      total: 0,
      cartCount: 0,
      searchGames: [],
      searchValue: '',
      name: '',
      price: '',
      image: '',
      console: '',
      description: '',
      release_date: '',
      ogUsers: [],
      users: [],
      username: '',
      email: '',
      password: '',
      loggedInUser: null
    };
  }

  featuredGames = () => {
    return featuredGamesNames.map(name => {
      return this.state.games.find(g => g.name === name);
    });
  };

  componentDidMount() {
    const url = 'http://localhost:3000/api/v1/games';
    fetch(url)
      .then(resp => resp.json())
      .then(data =>
        this.setState(
          {
            ogGames: data,
            games: data,
            searchGames: data
          },
          () =>
            this.setState(
              {
                featuredGames: this.featuredGames()
              },
              () => console.log('app', this.state)
            )
        )
      );

    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users =>
        this.setState({
          ogUsers: users,
          users: users
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
    if (this.state.loggedInUser) {
      this.setState({
        cart: [],
        total: 0,
        cartCount: 0
      });
    } else {
      alert('Please log in to checkout');
    }
  };

  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
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
    if (e.target.name === 'n64') {
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

  handleAddGameChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  checkExistingUser = username => {
    return this.state.users.find(u => u.username === username) ? true : false;
  };

  handleLoginSubmit = e => {
    e.preventDefault();

    console.log(
      this.state.username,
      this.checkExistingUser(this.state.username)
    );
    if (this.checkExistingUser(this.state.username)) {
      let existingUser = this.state.users.find(
        u => u.username === this.state.username
      );
      this.setState(
        {
          loggedInUser: existingUser
        },
        () => alert(`Welcome back, ${existingUser.username}`)
      );
    } else {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        })
      }) // end of fetch
        .then(r => r.json())
        .then(user => {
          this.setState(
            {
              users: [...this.state.users, user],
              loggedInUser: user
            },
            () => alert(`Welcome to GAME THRIFT, ${user.username}`)
          );
        });
    }

    this.props.history.push('/HomePage');
  };

  handleAddGameSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:3000/api/v1/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
        console: this.state.console,
        posted_date: moment().unix(),
        description: this.state.description,
        release_date: new Date(this.state.release_date).getTime() / 1000,
        seller_id: this.state.loggedInUser.id
      })
    })
      .then(r => r.json())
      .then(game => {
        let currentUser = this.state.users.find(
          u => u.id == this.state.loggedInUser.id
        );

        currentUser.games.push(game);

        this.setState({
          games: [...this.state.games, game],
          users: [...this.state.users, currentUser],
          name: '',
          price: '',
          image: '',
          console: '',
          description: '',
          release_date: ''
        });
      });

    this.props.history.push('/HomePage');
  };

  render() {
    return (
      <div>
        <NavBar cartCount={this.state.cartCount} />
        <Route
          path='/HomePage'
          render={() => (
            <HomePage
              cart={this.state.cart}
              games={this.state.featuredGames}
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
              loggedInUser={this.state.loggedInUser}
            />
          )}
        />
        <Route
          path='/Login'
          render={() => (
            <Login
              username={this.state.username}
              password={this.state.password}
              email={this.state.email}
              handleChange={this.handleLoginChange}
              handleSubmit={this.handleLoginSubmit}
              loggedInUser={this.state.loggedInUser}
            />
          )}
        />
        <Route
          path='/SearchPage'
          render={() => (
            <SearchPage
              cart={this.state.cart}
              games={this.state.searchGames}
              searchValue={this.state.searchValue}
              handleSearch={this.handleSearch}
              handleSubmit={this.handleSubmit}
              handleConsoleFilter={this.handleConsoleFilter}
              addToCart={this.addToCart}
            />
          )}
        />
        <Route
          path='/NewGameForm'
          render={() => (
            <NewGameForm
              handleSubmit={this.handleAddGameSubmit}
              handleChange={this.handleAddGameChange}
              name={this.state.name}
              price={this.state.price}
              image={this.state.image}
              console={this.state.console}
              description={this.state.description}
              release_date={this.state.release_date}
              loggedInUser={this.state.loggedInUser}
            />
          )}
        />
        <Route
          path='/games/:id'
          render={props => {
            let game = this.state.games.find(
              g => g.id == props.match.params.id
            );
            return game ? (
              <GameShowContainer
                cart={this.state.cart}
                {...props}
                games={this.state.games}
                game={game}
                addToCart={this.addToCart}
              />
            ) : (
              <h1>Loading...</h1>
            );
          }}
        />
        <Route
          path='/users/:id'
          render={props => {
            let user = this.state.users.find(
              u => u.id == props.match.params.id
            );

            return user ? (
              <UserShowContainer
                cart={this.state.cart}
                {...props}
                user={user}
                addToCart={this.addToCart}
                isCart={false}
              />
            ) : (
              <h1>Loading...</h1>
            );
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);
