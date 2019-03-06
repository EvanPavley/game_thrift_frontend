import React from 'react';
import GameCard from './GameCard';
import { withRouter } from 'react-router-dom';
import '../css/UserShow.css';

function UserShowContainer(props) {
  const usersGames = () => {
    return props.user.games.map(g => {
      return <GameCard key={g.id} game={g} handleCart={props.addToCart} />;
    });
  };
  return (
    <div className='container'>
      <div className='user-show'>
        <h1>{props.user.username}</h1>
        <button onClick={() => props.history.goBack()}>back</button>
      </div>
      {usersGames()}
    </div>
  );
}

export default withRouter(UserShowContainer);
