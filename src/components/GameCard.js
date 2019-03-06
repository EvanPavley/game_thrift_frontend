import React, { Component } from 'react';
import '../css/GameCard.css';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

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
        <div
          className='game-card'
          onClick={() =>
            this.props.history.push(`/games/${this.props.game.id}`)
          }
        >
          <div className='image-container'>
            <img className='game-card-image' src={this.props.game.image} />
          </div>
          <div className='description-container'>
            <h2>{this.props.game.name}</h2>
            <hr/>
            <div className='description-sub-container'>
              <p>Console: {this.props.game.console}</p>
              <p>Date Posted: {postedDate}</p>
              <p>Date Released: {releaseDate}</p>
            </div>
          </div>
          <div className='price-container'>
            <p>Price: ${this.props.game.price}</p>
            {this.props.isCart === true ? (
              <button onClick={this.handleClick}>remove</button>
            ) : (
              <div>
                <button onClick={this.handleClick}>add to cart</button>
                <button id='wishlist'>wishlist</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(GameCard);
