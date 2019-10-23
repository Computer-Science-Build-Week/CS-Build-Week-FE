import React from 'react';
import { withRouter } from 'react-router-dom';
import { GameArena, GameContainer } from './ViewStyles/GameStyles';
import { Border } from '../components/Border';
import useMaze from '../state/state';
import { Character } from '../components/Character';
import Dashboard from '../components/Dashboard';

const Game = ({history}) => {
  const { x, y, maze, loaded, directions } = useMaze();

  return (
    <GameContainer>
      {loaded && (
        <GameArena width={30} height={30}>
          <Border maze={maze} width={30} height={30} />
          <Character x={x} y={y} />
        </GameArena>
      )}
      <Dashboard directions={directions} history={history} />
    </GameContainer>
  );
};

export default withRouter(Game);
