import { useReducer, useEffect } from 'react';
import generate from 'generate-maze';
import axiosWithHeader from '../utils/axiosWithToken';

const token = 'Token ' + localStorage.getItem('key');
const headers = {
  headers: { 'Content-Type': 'application/JSON', Authorization: token }
};

const { min, max } = Math;

// CONSTANTS
const LOADED = 'maze/LOADED';
const KEY_PRESS = 'maze/KEY_PRESS';
const SUCCESS = 'SUCCESS';
const ONLOAD = 'ONLOAD';

// REDUCER
const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOADED:
      return { ...state, loaded: true, maze: payload };

    case KEY_PRESS: {
      const cell = state.maze[state.y][state.x];
      if (payload === 'ArrowLeft' && !cell.left)
        return { ...state, x: max(0, --state.x) };
      if (payload === 'ArrowUp' && !cell.top)
        return { ...state, y: max(0, --state.y) };
      if (payload === 'ArrowRight' && !cell.right)
        return { ...state, x: min(state.maze.length, ++state.x) };
      if (payload === 'ArrowDown' && !cell.bottom)
        return { ...state, y: min(state.maze.length, ++state.y) };
    } 

    case SUCCESS:
      return { ...state, directions: payload };

    case ONLOAD:
      return { ...state, directions: payload };

    default:
      return state;
  }
};

// STATE HOOK
const useMaze = () => {
  const [state, dispatch] = useReducer(reducer, {
    maze: [],
    x: 0,
    y: 0,
    directions: {}
  });
  useEffect(() => {
    const maze = generate(30);

    axiosWithHeader()
      .get('https://lambda-mud-test.herokuapp.com/api/adv/init/', headers)
      .then(res => {
        console.log(res);
        dispatch({ type: ONLOAD, payload: res.data });
      })
      .catch(err => {
        console.log(err.response.data);
      });

    const handleKeyPress = ({ key }) => {
      dispatch({ type: KEY_PRESS, payload: key });
      let direction = '';
      if (key === 'ArrowLeft') {
        direction = 'w';
      } else if (key === 'ArrowUp') {
        direction = 'n';
      } else if (key === 'ArrowDown') {
        direction = 's';
      } else if (key === 'ArrowRight') {
        direction = 'e';
      }

      axiosWithHeader()
        .post(
          'https://lambda-mud-test.herokuapp.com/api/adv/move/',
          {
            direction
          },
          headers
        )
        .then(res => {
          dispatch({ type: SUCCESS, payload: res.data });
        });
    };

    dispatch({ type: LOADED, payload: maze });

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);
  return state;
};

export default useMaze;
