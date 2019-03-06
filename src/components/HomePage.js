import React, { Component } from 'react';
import GameCard from './GameCard';
import '../css/HomePage.css';

class HomePage extends Component {
  getGames = () => {
    return this.props.games.map(game => (
      <GameCard
        cart={this.props.cart}
        game={game}
        handleCart={this.props.addToCart}
        isCart={this.props.isCart}
        key={game.id}
      />
    ));
  };

  render() {
    return (
      <div className='container homepage-container'>
        <h1 className='home-page-title'>Featured Games</h1>
        <div>
          {this.props.games.length !== 0 ? (
            this.getGames()
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
