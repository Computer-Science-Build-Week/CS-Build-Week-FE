import React, { useState } from "react";
import axios from "axios";
import { LoginContainer } from "./ViewStyles/LoginStyles";

const Login = props => {
  const [userData, setUser] = useState({
    username: "",
    password: ""
  });

  const validateForm = () => {
    return userData.username.length > 0 && userData.password.length > 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", userData)
      .then(res => localStorage.setItem("key", res.data.key))
      .catch(err => console.log(err));

    setUser({
      username: "",
      password: ""
    });
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={e => setUser({ ...userData, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={e => setUser({ ...userData, password: e.target.value })}
        />
        <input
          type="submit"
          disabled={!validateForm()}
          value={props.loading ? "Loading..." : "Login"}
        />
      </form>
      <span>
        Don't have an account? <a href="/signup">Sign Up</a>
      </span>
    </LoginContainer>
  );
};

export default Login;
