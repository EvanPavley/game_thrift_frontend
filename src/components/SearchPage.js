import React, { Component } from 'react';
import GameCard from './GameCard';

class SearchPage extends Component {
  renderGames = () => {
    return this.props.games.map(game => <GameCard key={game.id} game={game} />);
  };

  render() {
    // console.log(e => this.props.handleSearch(e));
    return (
      <div>
        <h1>SEARCH PAGE</h1>
        {/* filter by console, sort by price/name/ */}
        <form onSubmit={this.props.handleSubmit}>
          <input
            type='text'
            value={this.props.searchValue}
            onChange={e => this.props.handleSearch(e)}
          />
        </form>
        <div>
          <button name='ps1' onClick={null}>
            PlayStation 1
          </button>
        </div>
        {this.renderGames()}
      </div>
    );
  }
}

export default SearchPage;
