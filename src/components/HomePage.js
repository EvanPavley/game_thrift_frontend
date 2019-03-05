import React, { Component } from 'react';
import GameCard from './GameCard';

class HomePage extends Component {
  getGames = () => {
    return this.props.games.map(game => <GameCard key={game.id} game={game} />);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>HOME PAGE</h1>
        <div>
          {this.props.games.length !== 0 ? (
            this.getGames()
          ) : (
            <h3>No matches found</h3>
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
