import React, { Component } from 'react';
import GameCard from './GameCard';
import '../css/Cart.css';

class Cart extends Component {
  getGames = () => {
    return this.props.cart.map(game => (
      <GameCard
        game={game}
        isCart={this.props.isCart}
        handleCart={this.props.removeFromCart}
      />
    ));
  };

  displayShortTitles = () => {
    return this.props.cart.map(game => {
      let short = game.name.replace(/(.{15})..+/, '$1…');
      return (
        <div>
          <p>{short}</p>
        </div>
      );
    });
  };

  displayPrices = () => {
    return this.props.cart.map(game => {
      return (
        <div>
          <p>${game.price}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='row overall-cart-container'>
        {this.props.cart.length !== 0 ? (
          <div className='col'>{this.getGames()}</div>
        ) : (
          <h1 className='col'>Thank you for your purchase!</h1>
        )}
        <div className='col col-lg-3 cart-container'>
          <h2>Summary</h2>
          <br />
          <div className='row'>
            <div className='col-9'>
              {this.displayShortTitles()}
              <p id='final-price'> TOTAL: </p>
            </div>
            <div className='col-3 prices'>
              {this.displayPrices()}
              <p id='final-price'>${this.props.total}</p>
            </div>
            <button class='cart-button' onClick={this.props.checkout}>
              Empty Cart
            </button>
            <button
              class='cart-button'
              id='checkout-btn'
              onClick={this.props.checkout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
