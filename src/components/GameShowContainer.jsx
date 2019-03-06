import React from 'react';
import GameShowCard from './GameShowCard';

function GameShowContainer(props) {
  // suggestedGames = () => {

  // }
  return (
    <div>
      <GameShowCard game={props.game} handleCart={props.addToCart} />
      {/* {suggestedGames()} */}
    </div>
  );
}

export default GameShowContainer;