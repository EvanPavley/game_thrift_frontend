import React, { Component } from 'react';
import '../css/GameCard.css';

class GameCard extends Component {
  handelClick = () => {
    this.props.handleCart(this.props.game.id);
  };

  render() {
    return (
      <div>
        <div className='game-card'>
          <div className='image-container'>
            <img className='game-card-image' src={this.props.game.image} />
          </div>
          <div className='description-container'>
            <h2>{this.props.game.name}</h2>
            <div className='description-sub-container'>
              <p>Console: {this.props.game.console}</p>
              <p>Date Posted: {this.props.game.posted_date}</p>
              <p>Date Released: {this.props.game.release_date}</p>
            </div>
          </div>
        <div className='price-container'>
          <p>Price: ${this.props.game.price}</p>
          {this.props.isCart === true ? (
            <button onClick={this.handelClick}>remove</button>
          ) : (
            <button onClick={this.handelClick}>add to cart</button>
          )}
        </div>
        </div>
      </div>
    );
  }
}
export default GameCard;
