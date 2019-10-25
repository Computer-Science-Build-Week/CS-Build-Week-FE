import React, { useState } from "react";
import axios from "axios";
import { AuthContainer } from "./ViewStyles/AuthStyles";
import { Link, withRouter } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Login = props => {
  const [userData, setUser] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    return userData.username.length > 1 && userData.password.length > 7;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", userData)
      .then(res => {
        localStorage.setItem("key", res.data.key);
        props.history.push("/dashboard");
      })
      .catch(err => {
        setError("Unable to log in with provided credentials");
        setTimeout(() => {
          setError(null);
        }, 2000);
      })
      .finally(err => {
        //debugger;
        setLoading(false);
        setUser({
          username: "",
          password: ""
        });
      });
  };

  return (
    <AuthContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ height: "180px" }}>
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
        <PropagateLoader
          // css={override}
          sizeUnit={"px"}
          size={8}
          color={"darkred"}
          loading={loading}
        />
        {error && (
          <p style={{ color: "darkred", textAlign: "center" }}>{error}</p>
        )}
      </form>
      <span>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </span>
    </AuthContainer>
  );
};

export default withRouter(Login);
