import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Controls from "./Controls";
import axiosWithHeader from "../utils/axiosWithToken";
import axios from "axios";

const Game = ({ history }) => {
  const [details, setDetails] = useState({});
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("key");
    const headers = {
      headers: { "content-type": "application/JSON", Authorization: token }
    };
    axiosWithHeader()
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/", headers)
      .then(res => {
        console.log(res);
        setDetails(res.data);
      })
      .catch(err => {
        debugger;
      });
  }, []);

  const handleDirection = e => {
    e.preventDefault();
    setDirection(e.target.value);

    axios
      .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", {
        direction
      })
      .then(res => {
        setDetails(res.data);
        setError(res.data.error_msg);
      });
  };

  console.log({ direction });
  console.log(error);

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
      <h3>Welcome {details ? details.name : null}</h3>
      <h3>Initial Room: {details ? details.title : null}</h3>
      <h3>Description Room: {details ? details.description : null}</h3>
      <Controls handleClick={handleDirection} />
    </>
  );
};

export default withRouter(Game);
