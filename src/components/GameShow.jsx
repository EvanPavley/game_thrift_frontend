import React from 'react';
import GameCard from './GameCard';

function GameShow(props) {
  console.log(props);
  return (
    <div>
      <GameCard game={props.game} />
    </div>
  );
}

export default GameShow;
