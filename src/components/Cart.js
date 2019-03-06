import React, { Component } from 'react';
import GameCard from './GameCard';
import '../css/Cart.css';

class Cart extends Component {
  state = {
    cartMsg: 'Your cart is empty...'
  };

  getGames = () => {
    return this.props.cart.map(game => (
      <GameCard
        key={game.id}
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

  checkoutCart = () => {
    this.props.checkout();
    this.setState({
      cartMsg: 'Thank you for your purchase!'
    });
  };

  render() {
    return (
      <div className='row overall-cart-container'>
        {this.props.cart.length !== 0 ? (
          <div className='col'>{this.getGames()}</div>
        ) : (
          <h1 className='col'>{this.state.cartMsg}</h1>
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
            <button className='cart-button' onClick={this.props.checkout}>
              Empty Cart
            </button>
            <button
              className='cart-button'
              id='checkout-btn'
              onClick={this.checkoutCart}
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
