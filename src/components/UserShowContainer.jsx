import React from 'react';
import GameCard from './GameCard';

function UserShowContainer(props) {
  console.log('user show', props);
  const usersGames = () => {
    return props.user.games.map(g => {
      return <GameCard game={g} handleCart={props.addToCart} />;
    });
  };
  return (
    <div>
      <h1>{props.user.name}</h1>
      <h2>Games</h2>
      {usersGames()}
    </div>
  );
}

export default UserShowContainer;
