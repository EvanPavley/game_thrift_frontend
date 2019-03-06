import React, { Component } from 'react';
import '../css/GameCard.css';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class GameCard extends Component {
  handleClick = () => {
    this.props.handleCart(this.props.game.id);
  };

  render() {
    let postedDate = moment
      .unix(this.props.game.posted_date)
      .format('MMMM Do YYYY');

    return (
      <div>
        <div className='game-card'>
          <div className='image-container'>
            <img
              className='game-card-image'
              src={this.props.game.image}
              alt=''
              onClick={() =>
                this.props.history.push(`/games/${this.props.game.id}`)
              }
            />
          </div>
          <div className='description-container'>
            <h2>{this.props.game.name}</h2>
            <hr />
            <div className='description-sub-container'>
              <p>Console: {this.props.game.console}</p>
              <p>Posted: {postedDate}</p>
              {this.props.game.seller ? (
                <p
                  onClick={() =>
                    this.props.history.push(
                      `/users/${this.props.game.seller.id}`
                    )
                  }
                >
                  Seller: {this.props.game.seller.username}
                </p>
              ) : null}
            </div>
          </div>
          <div className='price-container'>
            <p>Price: ${this.props.game.price}</p>
            {this.props.isCart === true ? (
              <button onClick={this.handleClick}>remove</button>
            ) : (
              <div>
                <button
                  onClick={
                    this.props.cart.includes(this.props.game)
                      ? null
                      : this.handleClick
                  }
                >
                  {this.props.cart.includes(this.props.game)
                    ? 'in your cart'
                    : 'add to cart'}
                </button>
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
