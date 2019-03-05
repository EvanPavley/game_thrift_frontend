import React, { Component } from 'react';
import '../css/GameCard.css';
import moment from 'moment';

class GameCard extends Component {
  handleClick = () => {
    this.props.handleCart(this.props.game.id);
  };

  render() {
    let releaseDate = moment
      .unix(this.props.game.release_date)
      .format('MMMM Do YYYY');

    let postedDate = moment
      .unix(this.props.game.posted_date)
      .format('MMMM Do YYYY');

    console.log(moment().unix());

    return (
      <div>
        <div className='game-card'>
          <div className='description-container'>
            <h2>{this.props.game.name}</h2>
            <p>Description: {this.props.game.description}</p>
            <p>Date Released: {releaseDate}</p>
            <p>Date Posted: {postedDate}</p>
            <p>Price: ${this.props.game.price}</p>
            <p>Console: {this.props.game.console}</p>
            {this.props.isCart === true ? (
              <button onClick={this.handleClick}>remove from cart</button>
            ) : (
              <button onClick={this.handleClick}>add to cart</button>
            )}
          </div>
          <img className='game-card-image' src={this.props.game.image} />
        </div>
      </div>
    );
  }
}
export default GameCard;
