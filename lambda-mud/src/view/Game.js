import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Controls from "./Controls";
import axios from "axios";

const Game = ({ history }) => {
  const [details, setDetails] = useState({});
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log(res);
        setDetails(res.data);
      });
  }, []);

  return (
    <>
      <h1>Game Plan/Dashboard</h1>
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/login");
        }}
      >
        Logout
      </button>
      <Controls />;
    </>
  );
};

export default withRouter(Game);
