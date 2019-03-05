import React, { Component } from 'react';
import GameCard from './GameCard';
import '../css/SearchPage.css';

class SearchPage extends Component {
  renderGames = () => {
    return this.props.games.map(game => <GameCard key={game.id} game={game} handleCart={this.props.addToCart}/>);
  };

  render() {
    // console.log(e => this.props.handleSearch(e));
    return (
      <div class="row" id='overall-search-container'>
        <div class="col col-lg-2" id='search-container'>
          {/* filter by console, sort by price/name/ */}
          <form onSubmit={this.props.handleSubmit}>
            <label>Search Games:</label>
            <br/>
            <input
              type='text'
              value={this.props.searchValue}
              onChange={e => this.props.handleSearch(e)}
            />
          <br/>
          <br/>
          </form>
          <div className='console-buttons'>
            <button name='ps1' onClick={e => this.props.handleConsoleFilter(e)}>
              PlayStation 1
            </button>
            <button name='n64' onClick={e => this.props.handleConsoleFilter(e)}>
              Nintendo 64
            </button>
            <button name='snes' onClick={e => this.props.handleConsoleFilter(e)}>
              Super Nintendo
            </button>
            <button name='dos' onClick={e => this.props.handleConsoleFilter(e)}>
              PC DOS
            </button>
            <button name='sega' onClick={e => this.props.handleConsoleFilter(e)}>
              Sega Genesis
            </button>
          </div>
        </div>
        <div class="col">
          {this.renderGames()}
        </div>
      </div>
    );
  }
}

export default SearchPage;
