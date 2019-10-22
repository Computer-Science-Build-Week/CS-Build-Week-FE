import React, { useState } from "react";
import axios from "axios";
import { AuthContainer } from "./ViewStyles/AuthStyles";
import { Link } from "react-router-dom";

const Register = props => {
  const [userData, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const validateForm = () => {
    return (
      userData.username.length > 1 &&
      userData.password1.length > 7 &&
      userData.password2.length > 7
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/registration/", userData)
      .then(res => {
        console.log(res);
        localStorage.setItem("key", res.data.key);
      })
      .catch(err => console.log(err));

    setUser({
      username: "",
      password1: "",
      password2: ""
    });
  };

  return (
    <AuthContainer>
      <h1>Register</h1>
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
          value={userData.password1}
          onChange={e => setUser({ ...userData, password1: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={userData.password2}
          onChange={e => setUser({ ...userData, password2: e.target.value })}
        />

        <input
          type="submit"
          disabled={!validateForm()}
          value={props.loading ? "Loading..." : "Register"}
        />
      </form>
      <span>
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </AuthContainer>
  );
};

export default Register;
