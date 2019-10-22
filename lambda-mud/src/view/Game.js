import React from "react";
import { withRouter } from "react-router-dom";

const Game = ({ history }) => {
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
    </>
  );
};

export default withRouter(Game);
