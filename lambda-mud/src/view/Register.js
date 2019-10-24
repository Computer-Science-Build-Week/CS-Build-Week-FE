import React, { useState } from "react";
import axios from "axios";
import { AuthContainer } from "./ViewStyles/AuthStyles";
import { Link, withRouter } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Register = props => {
  const [userData, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    return (
      userData.username.length > 1 &&
      userData.password1.length > 7 &&
      userData.password2.length > 7
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        "https://lambda-mud-game-sny.herokuapp.com/api/registration/",
        userData
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("key", res.data.key);
        props.history.push("/login");
      })
      .catch(err => {
        userData.password1 !== userData.password2
          ? setError("Password confirmation doesn't match")
          : setError(err.response.data.password1);

        setTimeout(() => {
          setError("");
        }, 2500);
      })
      .finally(err => {
        setLoading(false);
        // setUser({
        //   username: "",
        //   password1: "",
        //   password2: ""
        // });
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
          placeholder="Confirm password"
          value={userData.password2}
          onChange={e => setUser({ ...userData, password2: e.target.value })}
        />

        <input
          type="submit"
          disabled={!validateForm()}
          value={props.loading ? "Loading..." : "Register"}
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
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </AuthContainer>
  );
};

export default withRouter(Register);
