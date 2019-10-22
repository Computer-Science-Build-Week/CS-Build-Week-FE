import React, { useState } from "react";
import axios from "axios";
import { AuthContainer } from "./ViewStyles/AuthStyles";
import { Link, withRouter } from "react-router-dom";

const Register = props => {
  const [userData, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });
  const [error, setError] = useState("");

  const validateForm = () => {
    return (
      userData.username.length > 1 &&
      userData.password1.length > 7 &&
      userData.password2.length > 7
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/registration/", userData)
      .then(res => {
        console.log(res);
        localStorage.setItem("key", res.data.key);
        props.history.push("/login");
      })
      .catch(err => {
        //debugger;
        setError(err.response.data.password1);
        setTimeout(() => {
          setError("");
        }, 2500);
      });

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
        {error && <p style={{ color: "darkred" }}>{error}</p>}
      </form>
      <span>
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </AuthContainer>
  );
};

export default withRouter(Register);
