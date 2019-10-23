import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Controls from './Controls';
import axiosWithHeader from '../utils/axiosWithToken';
import { GameArena, GameContainer } from './ViewStyles/GameStyles';
import { Border } from './Border';
import useMaze from '../state/state';
import { Character } from './Character';

const Game = ({ history }) => {
  const { x, y, maze, loaded } = useMaze();
  const [details, setDetails] = useState({});
  const [direction, setDirection] = useState('');
  const [error, setError] = useState('');

  const token = 'Token ' + localStorage.getItem('key');
  const headers = {
    headers: { 'Content-Type': 'application/JSON', Authorization: token }
  };
  useEffect(() => {
    axiosWithHeader()
      .get('https://lambda-mud-test.herokuapp.com/api/adv/init/', headers)
      .then(res => {
        console.log(res);
        setDetails(res.data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, []);

  const handleDirection = e => {
    e.preventDefault();
    setDirection(e.target.value);

    axiosWithHeader()
      .post(
        'https://lambda-mud-test.herokuapp.com/api/adv/move/',
        {
          direction
        },
        headers
      )
      .then(res => {
        setDetails(res.data);
        setError(res.data.error_msg);
      });
  };

  console.log({ direction });
  console.log(error);

  return (
    <>
      {loaded && (
        <GameContainer>
          <GameArena width={30} height={30}>
            <Border maze={maze} width={30} height={30} />
            <Character x={x} y={y} />
          </GameArena>
        </GameContainer>
      )}
      <div>
        <h1>Game Plan/Dashboard</h1>
        <button
          onClick={() => {
            localStorage.clear();
            history.push('/login');
          }}
        >
          Logout
        </button>
        <h3>Welcome {details ? details.name : null}</h3>
        <h3>Initial Room: {details ? details.title : null}</h3>
        <h3>Description Room: {details ? details.description : null}</h3>
        <Controls handleClick={handleDirection} />
      </div>
    </>
  );
};

export default withRouter(Game);
