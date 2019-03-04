import React, { Component } from 'react';
import '../css/GameCard.css';

class GameCard extends Component {

  render(){
    return (
      <div>
        <div className="game-card">
          <div className="description-container">
            <h2>{this.props.game.name}</h2>
            <p>Description: {this.props.game.description}</p>
            <p>Date Released: {this.props.game.release_date}</p>
            <p>Date Posted: {this.props.game.posted_date}</p>
            <p>Price: ${this.props.game.price}</p>
            <p>Console: {this.props.game.console}</p>
          </div>
          <img className="game-card-image"
            src={this.props.game.image}/>
        </div>
      </div>
    );
  }
}
export default GameCard;
