import React, { useState } from 'react';
import { LoginContainer } from './ViewStyles/LoginStyles';

export const Login = props => {
  const [userData, setUser] = useState({
    username: '',
    password: ''
  });

  return (
    <LoginContainer>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          placeholder='username'
          value={userData.username}
          onChange={e => setUser({ ...userData, username: e.target.value })}
        />

        <input
          type='password'
          placeholder='Password'
          value={userData.password}
          onChange={e => setUser({ ...userData, password: e.target.value })}
        />
        <input type='submit' value={props.loading ? 'Loading...' : 'Login'} />
      </form>
      <span>
        Don't have an account? <a href='/signup'>Login</a>
      </span>
    </LoginContainer>
  );
};
