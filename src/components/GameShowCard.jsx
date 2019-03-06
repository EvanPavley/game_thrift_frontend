import React, { Component } from 'react';
import '../css/GameCard.css';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class GameShowCard extends Component {
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
          <div className='image-container'>
            <img className='game-card-image' src={this.props.game.image} />
          </div>
          <div className='description-container'>
            <h2>{this.props.game.name}</h2>
            <div className='description-sub-container'>
              <p>Console: {this.props.game.console}</p>
              <p>Date Released: {releaseDate}</p>
              <hr />
              <p>Posted: {postedDate}</p>
              <p>Seller: {this.props.game.seller.email}</p>
              <hr />
              <p>
                Description: <br />
                {this.props.game.description}
              </p>
            </div>
          </div>
          <div className='price-container'>
            <p>Price: ${this.props.game.price}</p>
            {this.props.isCart === true ? (
              <button onClick={this.handleClick}>remove</button>
            ) : (
              <button onClick={this.handleClick}>add to cart</button>
            )}
            <button onClick={() => this.props.history.goBack()}>Back</button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(GameShowCard);
