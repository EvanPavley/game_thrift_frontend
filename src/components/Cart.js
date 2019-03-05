import React, { Component } from 'react';
import GameCard from './GameCard'

class Cart extends Component {

  getGames = () => {
    return this.props.cart.map(game => <GameCard game={game} isCart={this.props.isCart} handleCart={this.props.removeFromCart}/>)
  }

  render() {
    return (
      <div>
        <h1>CART</h1>
        <div>
          {this.getGames()}
        </div>
        <hr/>
        <h2> Your total is: ${this.props.total}</h2>
        <button onClick={this.props.checkout}>Checkout</button>
      </div>
    );
  }
}

export default Cart;
