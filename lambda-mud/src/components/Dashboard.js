import React from 'react';
import { StyledDashBoard } from '../components/styles/ComponentStyles'

const Dashboard = ({ directions, history }) => {
  return (
    <StyledDashBoard>
      <button
        onClick={() => {
          localStorage.clear();
          history.push('/login');
        }}
      >
        Logout
      </button>
      <h1>Dashboard</h1>
      <h3>Welcome {directions ? directions.name : null}</h3>
      <div>
        <h3>Current Room</h3>
        <h4>{directions ? directions.title : null}</h4>
      </div>
      <div>
        <h3>Description</h3>
        <h4>{directions ? directions.description : null}</h4>
      </div>
      {directions.error_msg && <span>{directions.error_msg}</span>}
    </StyledDashBoard>
  );
};

export default Dashboard;
