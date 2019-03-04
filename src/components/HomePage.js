import React, { Component } from 'react';
import GameCard from'./GameCard'

class HomePage extends Component {
  getGames = () => {
    return this.props.games.map(game => <GameCard game={game}/>)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>HOME PAGE</h1>
        <div>
          {this.getGames()}
        </div>
      </div>
    );
  }
}

export default HomePage;
